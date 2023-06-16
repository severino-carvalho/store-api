import { IUsuarioEntidade } from '../../entidades/entidades/Usuario';
import { IUsuarioRepositorio } from '../../repositorios/IUsuarioRepositorio';
import { IUseCase } from '../IUseCase';
export class BuscarUsuarioEmailUseCase implements IUseCase<void> {
  private usuariosRepositorio: IUsuarioRepositorio;

  constructor(usuariosRepositorio: IUsuarioRepositorio) {
    this.usuariosRepositorio = usuariosRepositorio;
  }

  async execute(email: string): Promise<any> {
    if (!email) throw new Error('Usuário não encontrado');

    const usuarioExistente: IUsuarioEntidade =
      await this.usuariosRepositorio.buscaPorEmail(email);

    if (!usuarioExistente) throw new Error('Usuário não encontrado.');

    return usuarioExistente;
  }
}
