import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDistributionDto } from './dto/create-distribution.dto';
import { UpdateDistributionDto } from './dto/update-distribution.dto';

@Injectable()
export class DistributionsService {
  constructor(private prisma: PrismaService) {}

  create(createDistributionDto: CreateDistributionDto, fieldAgentId: string) {
    return this.prisma.distribution.create({
      data: {
        ...createDistributionDto,
        distributionDate: new Date(createDistributionDto.distributionDate),
        fieldAgentId,
      },
    });
  }

  findAll() {
    return this.prisma.distribution.findMany({
      include: {
        project: true,
        beneficiary: true,
      }
    });
  }

  async findOne(id: string) {
    const distribution = await this.prisma.distribution.findUnique({
      where: { id },
      include: {
        project: true,
        beneficiary: true,
      }
    });
    if (!distribution) throw new NotFoundException('Distribution not found');
    return distribution;
  }

  update(id: string, updateDistributionDto: UpdateDistributionDto) {
    const data: any = { ...updateDistributionDto };
    if (data.distributionDate) data.distributionDate = new Date(data.distributionDate);
    
    return this.prisma.distribution.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.distribution.delete({ where: { id } });
  }
}
