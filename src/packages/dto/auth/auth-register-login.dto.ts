import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { lowerCaseTransformer } from '@/utils/transformers/lower-case.transformer';

export class AuthRegisterDto {
  @ApiProperty({ example: 'raneem@gmail.cpm' })
  @Transform(lowerCaseTransformer)
  @IsEmail()
  email: string;

  @ApiProperty()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'Raneem' })
  @IsNotEmpty()
  first_name: string;

  @ApiProperty({ example: 'abu jamous' })
  @IsNotEmpty()
  last_name: string;

  @ApiProperty({ example: '' })
  @IsOptional()
  user_img_url: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  role_id: number;


  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  organization_id: number;
}
