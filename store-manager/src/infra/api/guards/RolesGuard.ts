import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../roles/PermissoesEnum';
import { ROLES_KEY } from '../decorators/PermissoesDecorator';
import { IUsuarioEntidade } from '../../../core/entidades/entidades/Usuario';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const user = context.switchToHttp().getRequest().user as IUsuarioEntidade;

    const hasRoles = requiredRoles?.every((role) =>
      user?.permissoes?.includes(role),
    );

    if (!hasRoles) throw new UnauthorizedException('Acesso não autorizado');

    return true;
  }
}
