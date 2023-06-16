import { AutenticacaoRespostaDto } from 'src/core/dtos/Autenticacao/AutenticacaoDto';
import { UsuarioDto } from 'src/core/dtos/Usuarios/UsuarioDto';
import { IAutenticacaoService } from 'src/core/ports/IAutenticacaoService';
import { IGerenciadorSenhaService } from 'src/core/ports/IGerenciadorSenhaService';
import { IUsuarioEntidade } from '../../entidades/entidades/Usuario';
import { IUsuarioRepositorio as IUsuarioRepo } from '../../repositorios/IUsuarioRepositorio';
import { IUseCase } from '../IUseCase';

export class AuthenticationUseCase
  implements IUseCase<AutenticacaoRespostaDto>
{
  constructor(
    private readonly usuariosRepo: IUsuarioRepo,
    private readonly autenticacaoService: IAutenticacaoService,
    private readonly gerenciadorSenhaService: IGerenciadorSenhaService,
  ) {
    this.usuariosRepo = usuariosRepo;
    this.autenticacaoService = autenticacaoService;
    this.gerenciadorSenhaService = gerenciadorSenhaService;
  }

  async execute(usuario: UsuarioDto): Promise<AutenticacaoRespostaDto> {
    const usuario_existente: IUsuarioEntidade =
      await this.usuariosRepo.buscaPorEmail(usuario.email);

    if (!usuario_existente) throw new Error('Credenciais inválidas.');

    const senha_valida = this.gerenciadorSenhaService.compararSync(
      usuario.senha,
      usuario_existente.senha,
    );

    if (!senha_valida) throw new Error('Credenciais inválidas.');

    const access_token: string = this.autenticacaoService.gerarToken(
      { sub: usuario_existente.id, email: usuario_existente.email },
      process.env.ACCESS_SECRET,
      '25m',
    );

    const refresh_token: string = this.autenticacaoService.gerarToken(
      { sub: usuario_existente.id, email: usuario_existente.email },
      process.env.REFRESH_SECRET,
      '5h',
    );

    return { access_token, refresh_token };
  }
}
