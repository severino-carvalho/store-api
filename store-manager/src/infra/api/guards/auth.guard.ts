import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuarioMemoriaRepo } from '../../repositorios/in-memory/UsuariosRepositorio';
import { AutenticacaoService } from '../../services/applications/AutenticacaoService';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly autenticacaoService: AutenticacaoService,
    private readonly usuariosRepo: UsuarioMemoriaRepo,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;

    if (!authorization)
      throw new UnauthorizedException('No authorization header');

    const token = authorization?.split(' ')[1];

    const valid_token = this.autenticacaoService.verificarToken(
      token,
      process.env.ACCESS_SECRET,
    );

    if (!valid_token) throw new UnauthorizedException('Invalid Token');
    const payload = this.autenticacaoService.decodificar(token);
    const user = await this.usuariosRepo.buscaPorId(payload.sub);

    request.user = user;

    return true;
  }
}
