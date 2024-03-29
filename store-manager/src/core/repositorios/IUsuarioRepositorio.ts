import { UsuarioDto } from '../dtos/Usuarios/UsuarioDto';
import { IUsuarioEntidade } from '../entidades/entidades/Usuario';
import { IRepositorio } from './IRepositorio';

export interface IUsuarioRepositorio extends IRepositorio<IUsuarioEntidade> {
  buscaPorId(id: number): Promise<IUsuarioEntidade>;
  buscaPorEmail(email: string): Promise<any>;
  criar(usuario: UsuarioDto): Promise<IUsuarioEntidade>;
  atualizar(usuario: UsuarioDto, id: number): Promise<IUsuarioEntidade>;
  deletar(id: number): Promise<IUsuarioEntidade>;
}
