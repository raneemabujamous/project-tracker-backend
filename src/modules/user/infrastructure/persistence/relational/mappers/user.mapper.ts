import { User } from '../../../../../../packages/domins';
import { UserEntity } from '../entities/user.entity'

export class UserMapper {
  static toDomain(raw: UserEntity): User {
    const user = new User();
    user.user_id = raw.user_id;
    user.email = raw.email;
    user.password = raw.password;
    user.previousPassword = raw.previousPassword;
    user.first_name = raw.first_name;
    user.last_name = raw.last_name;
    user.createdAt = raw.createdAt;
    user.updatedAt = raw.updatedAt;
    user.deletedAt = raw.deletedAt;
    user.organization_id= raw.organization_id;

    return user;
  }

  static toPersistence(user: User): UserEntity {
    const userEntity = new UserEntity();
    if (user.user_id && typeof user.user_id === 'number') {
      userEntity.user_id = user.user_id;
    }
    userEntity.email = user.email;
    userEntity.password = user.password;
    userEntity.previousPassword = user.previousPassword;
    userEntity.first_name = user.first_name;
    userEntity.last_name = user.last_name;
    userEntity.createdAt = user.createdAt;
    userEntity.updatedAt = user.updatedAt;
    userEntity.deletedAt = user.deletedAt;
    userEntity.organization_id= user.organization_id;

    return userEntity;
  }
}
