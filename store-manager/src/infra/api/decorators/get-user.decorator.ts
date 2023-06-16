import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUsuarioEntidade } from '../../../core/entidades/entidades/Usuario';

export const GetUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IUsuarioEntidade => {
    const request = ctx.switchToHttp().getRequest();
    return request.user as IUsuarioEntidade;
  },
);
