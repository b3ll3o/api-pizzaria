import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";
import { IS_NO_JWT_GUARD } from "../no-jwt-guard/no-jwt-guard.strategy";

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_NO_JWT_GUARD, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (isPublic) 
      return true;
    
    return super.canActivate(context);
  }
}
