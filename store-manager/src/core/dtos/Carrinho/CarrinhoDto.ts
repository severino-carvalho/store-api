import { Produto } from '../../../core/entidades/entidades/Produto';

export class CarrinhoDto {
  id?: number;
  produtos: Produto[];
  usuario_id: number;
  produto_id?: number;
}
