import { ProdutoDto } from 'src/core/dtos/Produtos/ProdutoDTO';
import { IProdutoEntidade } from 'src/core/entidades/entidades/Produto';
import { IProdutoRepositorio as IProdutoRepo } from 'src/core/repositorios/IProdutoRepositorio';
import { IUseCase } from '../IUseCase';

export class AtualizarProdutoUseCase implements IUseCase<void> {
  private produtosRepo: IProdutoRepo;

  constructor(produtoRepo: IProdutoRepo) {
    this.produtosRepo = produtoRepo;
  }

  async execute(produto: ProdutoDto, id: number): Promise<any> {
    if (!id) throw new Error('Produto não encontrado.');

    const produto_id: IProdutoEntidade = await this.produtosRepo.buscaPorId(
      Number(id),
    );
    if (!produto_id) throw new Error('Produto não encontrado');

    return await this.produtosRepo.atualizar(produto, id);
  }
}
