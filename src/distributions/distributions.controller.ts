import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { DistributionsService } from './distributions.service';
import { CreateDistributionDto } from './dto/create-distribution.dto';
import { UpdateDistributionDto } from './dto/update-distribution.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { Role } from '@prisma/client';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('distributions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('distributions')
export class DistributionsController {
  constructor(private readonly distributionsService: DistributionsService) {}

  @Post()
  @Roles(Role.ADMIN, Role.FIELD_AGENT)
  create(@Body() createDistributionDto: CreateDistributionDto, @Request() req: any) {
    return this.distributionsService.create(createDistributionDto, req.user.id);
  }

  @Get()
  findAll() {
    return this.distributionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distributionsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.FIELD_AGENT)
  update(@Param('id') id: string, @Body() updateDistributionDto: UpdateDistributionDto) {
    return this.distributionsService.update(id, updateDistributionDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.distributionsService.remove(id);
  }
}
