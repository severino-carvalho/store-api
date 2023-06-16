import { Entidade, IEntidade } from '../Entidade';
import { ProdutoEntidade } from './Produto';

export interface ICarrinhoEntidade extends IEntidade {
  produtos: ProdutoEntidade[];
  usuario_id: string;
}

export class CarrinhoEntidade extends Entidade implements ICarrinhoEntidade {
  produtos: ProdutoEntidade[];
  usuario_id: string;
}
