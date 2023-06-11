import { ProdutoDto } from '../dtos/Produtos/ProdutoDTO';
import { IProdutoEntidade } from '../entidades/entidades/Produto';
import { IRepositorio } from './IRepositorio';

export interface IProdutoRepositorio extends IRepositorio<IProdutoEntidade> {
  buscaPorId(id: number): Promise<IProdutoEntidade>;
  buscaPorCategirias(categorias: string[]): Promise<any>;
  criar(produto: ProdutoDto): Promise<IProdutoEntidade>;
  atualizar(produto: ProdutoDto, id: number): Promise<IProdutoEntidade>;
  deletar(id: number): Promise<IProdutoEntidade>;
}
