import { Entidade, IEntidade } from '../Entidade';
import { Produto } from './Produto';

export interface ICarrinhoEntidade extends IEntidade {
  produtos: Produto[];
  usuario_id: string;
}

export class Carrinho extends Entidade implements ICarrinhoEntidade {
  produtos: Produto[];
  usuario_id: string;
}
