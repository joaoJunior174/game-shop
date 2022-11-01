import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Role } from './user.enum';
import { User } from './schemas/user.schema';
import jwt_decode from 'jwt-decode';
import { UserService } from './user.service';
import { IDecoded } from './decoded.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UserService) {}
  canActivate(context: ExecutionContext): boolean {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requireRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const token: string | null =
      request.headers?.authorization?.split('Bearer ');

    if (token == null) {
      return false;
    }
    const decoded: IDecoded = jwt_decode(token[1]);
    return requireRoles.some((role) => decoded.rule.includes(role));
  }
}
