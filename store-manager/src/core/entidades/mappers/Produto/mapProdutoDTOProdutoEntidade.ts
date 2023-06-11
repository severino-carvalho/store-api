import { ProdutoDto } from '../../../dtos/Produtos/ProdutoDTO';
import { IProdutoEntidade, Produto } from '../../entidades/Produto';
import { Mapper } from '../Mapper';

export class mapProdutoDTOProdutoEntidade
  implements Mapper<ProdutoDto, IProdutoEntidade>
{
  public mapFrom(data: ProdutoDto): Produto {
    const produto = new Produto();

    produto.nome = data.nome;
    produto.preco = data.preco;

    return produto;
  }

  public mapTo(data: IProdutoEntidade): ProdutoDto {
    const produto = new ProdutoDto();

    produto.id = data.id;
    produto.nome = data.nome;
    produto.preco = data.preco;

    return produto;
  }
}
