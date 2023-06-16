import { CarrinhoDto } from '../dtos/Carrinho/CarrinhoDto';
import { ICarrinhoEntidade } from '../entidades/entidades/Carrinho';
import { IRepositorio } from './IRepositorio';

export interface ICarrinhoRepositorio extends IRepositorio<ICarrinhoEntidade> {
  buscaPorIdUsuario(usuario_id: number): Promise<ICarrinhoEntidade>;
  buscaPorProdutoCarrinho(
    usuario_id: number,
    produto_id: number,
  ): Promise<ICarrinhoEntidade>;
  criar(usuario: CarrinhoDto): Promise<ICarrinhoEntidade>;
  atualizar(usuario: CarrinhoDto, id: number): Promise<ICarrinhoEntidade>;
  deletar(usuario_id: number, produto_id: number): Promise<ICarrinhoEntidade>;
}
