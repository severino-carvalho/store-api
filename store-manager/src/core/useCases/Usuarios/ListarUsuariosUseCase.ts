import { IUsuarioEntidade } from '../../entidades/entidades/Usuario';
import { IUsuarioRepositorio } from '../../repositorios/IUsuarioRepositorio';
import { IUseCase } from '../IUseCase';
import { IOpcoesPaginacao } from './interfaces/IOpcoesPaginacao';

export class BuscarUsuariosUseCase implements IUseCase<IUsuarioEntidade[]> {
  private usuariosRepositorio: IUsuarioRepositorio;

  constructor(usuariosRepositorio: IUsuarioRepositorio) {
    this.usuariosRepositorio = usuariosRepositorio;
  }

  async execute(options: IOpcoesPaginacao): Promise<any> {
    const { offset, limite } = options;
    const { data, quantidade } = await this.usuariosRepositorio.buscarTodos({
      skip: offset,
      take: limite,
    });

    return { data, quantidade };
  }
}
