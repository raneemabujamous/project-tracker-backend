import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { JwtRefreshPayloadType } from './types/jwt-refresh-payload.type';
import { OrNeverType } from '@/utils/types/or-never.type';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh'
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:'refreshSecret'
    });
  }

  public validate(
    payload: JwtRefreshPayloadType
  ): OrNeverType<JwtRefreshPayloadType> {
    if (!payload.session_id) {
      throw new UnauthorizedException();
    }

    return payload;
  }
}
