import { CarrinhoDto } from '../../../dtos/Carrinho/CarrinhoDto';
import { CarrinhoEntidade, ICarrinhoEntidade } from '../../entidades/Carrinho';
import { Mapper } from '../Mapper';

export class mapCarrinhoDtoEntidade
  implements Mapper<CarrinhoDto, ICarrinhoEntidade>
{
  public mapFrom(data: CarrinhoDto): CarrinhoEntidade {
    const carrinho = new CarrinhoEntidade();

    carrinho.produtos = data.produtos;

    return carrinho;
  }

  public mapTo(data: ICarrinhoEntidade): CarrinhoDto {
    const carrinho = new CarrinhoDto();

    carrinho.id = data.id;
    carrinho.produtos = data.produtos;

    return carrinho;
  }
}
