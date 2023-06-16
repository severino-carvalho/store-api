import { IUsuarioEntidade } from '../../entidades/entidades/Usuario';
import { IUsuarioRepositorio } from '../../repositorios/IUsuarioRepositorio';
import { IUseCase } from '../IUseCase';

export class BuscarUsuarioIdUseCase implements IUseCase<void> {
  private usuariosRepositorio: IUsuarioRepositorio;

  constructor(usuariosRepositorio: IUsuarioRepositorio) {
    this.usuariosRepositorio = usuariosRepositorio;
  }

  async execute(id: number): Promise<any> {
    if (!id) throw new Error('Usuário não encontrado');

    const usuarioExistente: IUsuarioEntidade =
      await this.usuariosRepositorio.buscaPorId(id);

    if (!usuarioExistente) throw new Error('Usuário não encontrado.');

    return usuarioExistente;
  }
}
