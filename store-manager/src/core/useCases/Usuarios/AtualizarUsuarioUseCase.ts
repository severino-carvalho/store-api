import { UsuarioDto } from '../../dtos/Usuarios/UsuarioDto';
import { IUsuarioEntidade } from '../../entidades/entidades/Usuario';
import { IGerenciadorSenhaService } from '../../ports/IGerenciadorSenhaService';
import { IUsuarioRepositorio as IUsuarioRepo } from '../../repositorios/IUsuarioRepositorio';
import { IUseCase } from '../IUseCase';

export class AtualizarUsuarioUseCase implements IUseCase<void> {
  private usuariosRepo: IUsuarioRepo;
  private senhaService: IGerenciadorSenhaService;

  constructor(
    usuariosRepo: IUsuarioRepo,
    gerenciadorSenhaService: IGerenciadorSenhaService,
  ) {
    this.usuariosRepo = usuariosRepo;
    this.senhaService = gerenciadorSenhaService;
  }

  async execute(usuario: UsuarioDto, id: number): Promise<any> {
    if (!id) throw new Error('Usuário não encontrado.');

    const usuario_id: IUsuarioEntidade = await this.usuariosRepo.buscaPorId(
      Number(id),
    );
    if (!usuario_id) throw new Error('Usuário não encontrado');

    const usuario_email: IUsuarioEntidade =
      await this.usuariosRepo.buscaPorEmail(usuario.email);
    if (usuario_email && usuario_email.id != id)
      throw new Error('Email já utilizados.');

    if (!this.senhaService.compararSync(usuario.senha, usuario_id.senha)) {
      usuario.senha = this.senhaService.hashSync(
        usuario.senha,
        Number(process.env.SALT_CRYPT),
      );
    } else {
      usuario.senha = usuario_id.senha;
    }

    return await this.usuariosRepo.atualizar(usuario, id);
  }
}
