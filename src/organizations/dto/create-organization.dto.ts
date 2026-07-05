import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrganizationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  registrationNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sectorOfFocus: string;
}
