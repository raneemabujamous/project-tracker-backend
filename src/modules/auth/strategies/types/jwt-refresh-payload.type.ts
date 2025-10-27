

export type JwtRefreshPayloadType = {
  session_id: string;
  hash: string;
  iat: number;
  exp: number;
};
