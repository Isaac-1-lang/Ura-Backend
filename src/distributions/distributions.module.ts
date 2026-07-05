import { Module } from '@nestjs/common';
import { DistributionsService } from './distributions.service';
import { DistributionsController } from './distributions.controller';

@Module({
  providers: [DistributionsService],
  controllers: [DistributionsController]
})
export class DistributionsModule {}
