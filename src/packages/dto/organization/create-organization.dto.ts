import { Transform, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';


export class CreateOrganizationDto {

  @ApiProperty({ example: 'nx' })
  @IsNotEmpty()
  organization_title: string;

}
