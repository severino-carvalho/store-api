import { ProdutoEntidade } from '../../../core/entidades/entidades/Produto';

export class CarrinhoDto {
  id?: number;
  produtos: ProdutoEntidade[];
  usuario_id: number;
  produto_id?: number;
}
