import { User } from '@/packages/domins';

export type JwtPayloadType = Pick<User, 'user_id'> & {
  session_id: string;
  iat: number;
  exp: number;
};
