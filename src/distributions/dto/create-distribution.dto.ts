import { IsNotEmpty, IsNumber, IsOptional, IsString, IsDateString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDistributionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  projectId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  beneficiaryId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  itemType: string;

  @ApiProperty()
  @IsNumber()
  quantity: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty()
  @IsDateString()
  distributionDate: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  notes?: string;
}
