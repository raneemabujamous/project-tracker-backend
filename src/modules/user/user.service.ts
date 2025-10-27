import {
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from '../../packages/dto/user';
import { UserRepository } from './infrastructure/persistence/user.repository';
import { User } from '../../packages/domins'
import { NullableType } from '@/utils/types/nullable.type';
import { EntityCondition } from '@/utils/types/entity-condition.type';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async create(createProfileDto: CreateUserDto): Promise<User> {
    const clonedPayload = {
      provider: createProfileDto.email,
      ...createProfileDto,
    };
    if (clonedPayload.password) {
      clonedPayload.password = clonedPayload.password
    }

    if (clonedPayload.email) {
      const userObject = await this.usersRepository.findOne({
        email: clonedPayload.email,
      });
      if (userObject) {

        return  userObject
      }
    }

    return this.usersRepository.create(clonedPayload);
  }
  findOne(fields: EntityCondition<User>): Promise<NullableType<User>> {
    return this.usersRepository.findOne(fields);
  }


  
}
