import { SetMetadata } from '@nestjs/common';

export const IS_NO_JWT_GUARD = 'isNoJWTGuard';
export const NoJwtGuard = () => SetMetadata(IS_NO_JWT_GUARD, true);
