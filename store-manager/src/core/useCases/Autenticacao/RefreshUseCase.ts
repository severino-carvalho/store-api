import { IAutenticacaoService } from '../../ports/IAutenticacaoService';
import { IUseCase } from '../IUseCase';

export class RefreshAuthenticationUseCase implements IUseCase<any> {
  private autenticacaoService: IAutenticacaoService;

  constructor(autenticacaoService: IAutenticacaoService) {
    this.autenticacaoService = autenticacaoService;
  }

  async execute(refresh_token: string): Promise<any> {
    if (!refresh_token) throw new Error('Não autorizado.');

    const token_valido = this.autenticacaoService.verificarToken(
      refresh_token,
      process.env.REFRESH_SECRET,
    );

    if (!token_valido) throw new Error('Não autorizado.');

    const { payload } = this.autenticacaoService.decodificar(refresh_token, {
      complete: true,
    });

    const access_token = this.autenticacaoService.gerarToken(
      { sub: payload.sub, email: payload.username },
      process.env.ACCESS_SECRET,
      '25m',
    );

    return { access_token };
  }
}
