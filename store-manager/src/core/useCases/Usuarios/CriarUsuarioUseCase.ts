import { UsuarioDto } from '../../dtos/Usuarios/UsuarioDto';
import { IUsuarioEntidade } from '../../entidades/entidades/Usuario';
import { mapUsuarioDTOUsuarioEntidade } from '../../entidades/mappers/Usuario/mapUsuarioDtoEntidade';
import { IGerenciadorSenhaService } from '../../ports/IGerenciadorSenhaService';
import { IUsuarioRepositorio } from '../../repositorios/IUsuarioRepositorio';
import { IUseCase } from '../IUseCase';

export class CriarUsuarioUseCase implements IUseCase<void> {
  private usuariosRepositorio: IUsuarioRepositorio;
  private senhaService: IGerenciadorSenhaService;
  private mapDtoEntidade: mapUsuarioDTOUsuarioEntidade;

  constructor(
    usuariosRepositorio: IUsuarioRepositorio,
    gerenciadorSenhaService: IGerenciadorSenhaService,
  ) {
    this.usuariosRepositorio = usuariosRepositorio;
    this.senhaService = gerenciadorSenhaService;
    this.mapDtoEntidade = new mapUsuarioDTOUsuarioEntidade();
  }

  async execute(usuario: UsuarioDto): Promise<any> {
    if (!usuario) throw new Error('Usuário inválido.');

    const entidade = this.mapDtoEntidade.mapFrom(usuario);
    entidade.validarUsuario();

    const usuarioExiste: IUsuarioEntidade =
      await this.usuariosRepositorio.buscaPorEmail(usuario.email);

    if (usuarioExiste) throw new Error('Email já utilizado.');

    const senhaEncriptada = this.senhaService.hashSync(
      usuario.senha,
      Number(process.env.SALT_CRYPT),
    );
    usuario.senha = senhaEncriptada;

    return await this.usuariosRepositorio.criar(usuario);
  }
}
