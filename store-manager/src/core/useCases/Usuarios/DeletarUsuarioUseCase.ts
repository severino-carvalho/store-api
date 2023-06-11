import { IUsuarioEntidade } from '../../entidades/entidades/Usuario';
import { IUsuarioRepositorio } from '../../repositorios/IUsuarioRepositorio';
import { IUseCase } from '../IUseCase';

export class DeletarUsuarioUseCase implements IUseCase<void> {
  private usuariosRepositorio: IUsuarioRepositorio;

  constructor(usuariosRepositorio: IUsuarioRepositorio) {
    this.usuariosRepositorio = usuariosRepositorio;
  }

  async execute(id: string): Promise<any> {
    if (!id) throw new Error('Usuário não encontrado.');

    const usuario: IUsuarioEntidade = await this.usuariosRepositorio.buscaPorId(
      Number(id),
    );
    if (!usuario) throw new Error('Usuário não encontrado.');

    return await this.usuariosRepositorio.deletar(usuario.id);
  }
}
