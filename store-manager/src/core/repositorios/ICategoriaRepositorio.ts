import { CategoriaDto } from '../dtos/Categorias/CategoriaDto';
import { ICategoriaEntidade } from '../entidades/entidades/Categoria';
import { IRepositorio } from './IRepositorio';

export interface ICategoriaRepositorio
  extends IRepositorio<ICategoriaEntidade> {
  buscaPorId(id: number): Promise<ICategoriaEntidade>;
  buscaPorNome(nome: string): Promise<any>;
  criar(categoria: CategoriaDto): Promise<ICategoriaEntidade>;
  atualizar(categoria: CategoriaDto, id: number): Promise<ICategoriaEntidade>;
  deletar(id: number): Promise<ICategoriaEntidade>;
}
