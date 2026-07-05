import { IsNotEmpty, IsNumber, IsOptional, IsString, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { VulnerabilityCategory } from '@prisma/client';

export class CreateBeneficiaryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nationalId: string;

  @ApiProperty()
  @IsNumber()
  householdSize: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  province: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  district: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sector: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cell: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  village: string;

  @ApiPropertyOptional({ enum: VulnerabilityCategory, default: VulnerabilityCategory.MODERATE })
  @IsEnum(VulnerabilityCategory)
  @IsOptional()
  vulnerabilityCategory?: VulnerabilityCategory;
}
