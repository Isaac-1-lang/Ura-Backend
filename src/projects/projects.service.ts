import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  create(createProjectDto: CreateProjectDto) {
    return this.prisma.project.create({
      data: {
        ...createProjectDto,
        startDate: new Date(createProjectDto.startDate),
        endDate: createProjectDto.endDate ? new Date(createProjectDto.endDate) : null,
      },
    });
  }

  findAll() {
    return this.prisma.project.findMany({ include: { organization: true } });
  }

  async findOne(id: string) {
    const project = await this.prisma.project.findUnique({ 
      where: { id },
      include: { organization: true, distributions: true }
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  update(id: string, updateProjectDto: UpdateProjectDto) {
    const data: any = { ...updateProjectDto };
    if (data.startDate) data.startDate = new Date(data.startDate);
    if (data.endDate) data.endDate = new Date(data.endDate);
    
    return this.prisma.project.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.project.delete({ where: { id } });
  }
}
