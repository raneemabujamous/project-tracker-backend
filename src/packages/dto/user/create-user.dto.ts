import { Transform, Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'rabujamous@.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string | null;


  @ApiProperty({ example:1})
  @IsNotEmpty()
  @IsNumber()
   organization_id:number

  @ApiProperty()
  @MinLength(6)
  password?: string;

  provider?: string;


  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  first_name: string | null;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  last_name: string | null;


  hash?: string | null;
}
