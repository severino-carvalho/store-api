import { UsuarioDto } from '../../dtos/Usuarios/UsuarioDto';
import { IUsuarioEntidade } from '../../entidades/entidades/Usuario';
import { IGerenciadorSenhaService } from '../../ports/IGerenciadorSenhaService';
import { IUsuarioRepositorio } from '../../repositorios/IUsuarioRepositorio';
import { IUseCase } from '../IUseCase';

export class AtualizarUsuarioUseCase implements IUseCase<void> {
  private usuariosRepositorio: IUsuarioRepositorio;
  private senhaService: IGerenciadorSenhaService;

  constructor(
    usuariosRepositorio: IUsuarioRepositorio,
    gerenciadorSenhaService: IGerenciadorSenhaService,
  ) {
    this.usuariosRepositorio = usuariosRepositorio;
    this.senhaService = gerenciadorSenhaService;
  }

  async execute(usuario: UsuarioDto, id: number): Promise<any> {
    if (!id) throw new Error('Usuário não encontrado.');

    const usuario_id: IUsuarioEntidade =
      await this.usuariosRepositorio.buscaPorId(Number(id));
    if (!usuario_id) throw new Error('Usuário não encontrado');

    const usuario_email: IUsuarioEntidade =
      await this.usuariosRepositorio.buscaPorEmail(usuario.email);
    if (usuario_email && usuario_email.id != id)
      throw new Error('Email já utilizados.');

    if (!this.senhaService.compareSync(usuario.senha, usuario_id.senha)) {
      usuario.senha = this.senhaService.hashSync(
        usuario.senha,
        Number(process.env.SALT_CRYPT),
      );
    } else {
      usuario.senha = usuario_id.senha;
    }

    return await this.usuariosRepositorio.atualizar(usuario, id);
  }
}
