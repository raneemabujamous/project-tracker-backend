import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsNumber()
  user_id: number;
}
