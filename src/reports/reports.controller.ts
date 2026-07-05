import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('reports')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@UseInterceptors(CacheInterceptor)
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('beneficiaries-per-district')
  getBeneficiariesPerDistrict() {
    return this.reportsService.getBeneficiariesPerDistrict();
  }

  @Get('beneficiaries-per-province')
  getBeneficiariesPerProvince() {
    return this.reportsService.getBeneficiariesPerProvince();
  }

  @Get('aid-per-project')
  getAidDistributedPerProject() {
    return this.reportsService.getAidDistributedPerProject();
  }

  @Get('active-projects')
  getActiveProjects() {
    return this.reportsService.getActiveProjects();
  }
}
