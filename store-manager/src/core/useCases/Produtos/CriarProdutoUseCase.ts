import { ProdutoDto } from 'src/core/dtos/Produtos/ProdutoDTO';
import { mapProdutoDTOProdutoEntidade } from 'src/core/entidades/mappers/Produto/mapProdutoDTOProdutoEntidade';
import { IProdutoRepositorio } from '../../repositorios/IProdutoRepositorio';
import { IUseCase } from '../IUseCase';

export class CriarProdutoUseCase implements IUseCase<void> {
  private produtosRepo: IProdutoRepositorio;
  private mapDtoEntidade: mapProdutoDTOProdutoEntidade;

  constructor(produtosRepo: IProdutoRepositorio) {
    this.produtosRepo = produtosRepo;
    this.mapDtoEntidade = new mapProdutoDTOProdutoEntidade();
  }

  async execute(produto: ProdutoDto): Promise<any> {
    if (!produto) throw new Error('Produto inválido.');

    const entidade = this.mapDtoEntidade.mapFrom(produto);
    entidade.validarProduto();

    return await this.produtosRepo.criar(produto);
  }
}
