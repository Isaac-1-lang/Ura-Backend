import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager';

@Injectable()
export class DashboardService {
  constructor(
    private prisma: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async getSummary() {
    const cached = await this.cacheManager.get('dashboard_summary');
    if (cached) return cached;

    const [totalUsers, totalOrganizations, totalProjects, totalBeneficiaries, totalDistributions] = await Promise.all([
      this.prisma.user.count(),
      this.prisma.organization.count(),
      this.prisma.project.count(),
      this.prisma.beneficiary.count(),
      this.prisma.distribution.count(),
    ]);

    const data = {
      totalUsers,
      totalOrganizations,
      totalProjects,
      totalBeneficiaries,
      totalDistributions,
    };

    await this.cacheManager.set('dashboard_summary', data, 60000); // 1 min cache
    return data;
  }
}
