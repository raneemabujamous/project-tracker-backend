import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayloadType } from '../auth/strategies/types/jwt-payload.type';
import { JwtRefreshPayloadType } from '../auth/strategies/types/jwt-refresh-payload.type';

export const AuthUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): JwtPayloadType => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);

export const AuthRefreshUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): JwtRefreshPayloadType => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
