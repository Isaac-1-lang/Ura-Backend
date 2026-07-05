import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';

@Injectable()
export class BeneficiariesService {
  constructor(private prisma: PrismaService) {}

  async create(createBeneficiaryDto: CreateBeneficiaryDto) {
    const existing = await this.prisma.beneficiary.findUnique({
      where: { nationalId: createBeneficiaryDto.nationalId }
    });
    if (existing) {
      throw new ConflictException('Beneficiary with this National ID already exists');
    }
    return this.prisma.beneficiary.create({
      data: createBeneficiaryDto,
    });
  }

  findAll() {
    return this.prisma.beneficiary.findMany();
  }

  async findOne(id: string) {
    const beneficiary = await this.prisma.beneficiary.findUnique({ 
      where: { id },
      include: { distributions: { include: { project: true } } }
    });
    if (!beneficiary) throw new NotFoundException('Beneficiary not found');
    return beneficiary;
  }

  async update(id: string, updateBeneficiaryDto: UpdateBeneficiaryDto) {
    if (updateBeneficiaryDto.nationalId) {
       const existing = await this.prisma.beneficiary.findUnique({
         where: { nationalId: updateBeneficiaryDto.nationalId }
       });
       if (existing && existing.id !== id) {
         throw new ConflictException('National ID is already in use by another beneficiary');
       }
    }
    return this.prisma.beneficiary.update({
      where: { id },
      data: updateBeneficiaryDto,
    });
  }

  remove(id: string) {
    return this.prisma.beneficiary.delete({ where: { id } });
  }
}
