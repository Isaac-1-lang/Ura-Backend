import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { ProjectStatus } from '@prisma/client';

@Injectable()
export class ReportsService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getBeneficiariesPerDistrict() {
    const cached = await this.cacheManager.get('beneficiaries_district');
    if (cached) return cached;
    
    const data = await this.prisma.beneficiary.groupBy({
      by: ['district'],
      _count: { _all: true },
    });
    
    await this.cacheManager.set('beneficiaries_district', data, 60000); // 1 min cache
    return data;
  }

  async getBeneficiariesPerProvince() {
    const cached = await this.cacheManager.get('beneficiaries_province');
    if (cached) return cached;

    const data = await this.prisma.beneficiary.groupBy({
      by: ['province'],
      _count: { _all: true },
    });

    await this.cacheManager.set('beneficiaries_province', data, 60000);
    return data;
  }

  async getAidDistributedPerProject() {
    const cached = await this.cacheManager.get('aid_per_project');
    if (cached) return cached;

    const data = await this.prisma.distribution.groupBy({
      by: ['projectId'],
      _sum: { quantity: true },
    });

    await this.cacheManager.set('aid_per_project', data, 60000);
    return data;
  }

  async getActiveProjects() {
    return this.prisma.project.findMany({
      where: { status: ProjectStatus.ACTIVE },
    });
  }
}
