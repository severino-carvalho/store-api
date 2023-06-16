import { ProdutoDto } from '../../../dtos/Produtos/ProdutoDto';
import { IProdutoEntidade, ProdutoEntidade } from '../../entidades/Produto';
import { Mapper } from '../Mapper';

export class mapProdutoDTOProdutoEntidade
  implements Mapper<ProdutoDto, IProdutoEntidade>
{
  public mapFrom(data: ProdutoDto): ProdutoEntidade {
    const produto = new ProdutoEntidade();

    produto.nome = data.nome;
    produto.preco = data.preco;
    produto.quantidade = data.quantidade;

    return produto;
  }

  public mapTo(data: IProdutoEntidade): ProdutoDto {
    const produto = new ProdutoDto();

    produto.id = data.id;
    produto.nome = data.nome;
    produto.preco = data.preco;
    produto.quantidade = data.quantidade;

    return produto;
  }
}
