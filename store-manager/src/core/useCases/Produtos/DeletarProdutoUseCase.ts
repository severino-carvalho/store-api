import { IProdutoEntidade } from 'src/core/entidades/entidades/Produto';
import { IProdutoRepositorio as IProdutosRepo } from 'src/core/repositorios/IProdutoRepositorio';
import { IUseCase } from '../IUseCase';

export class DeletarProdutoUseCase implements IUseCase<void> {
  private produtosRepo: IProdutosRepo;

  constructor(produtosRepo: IProdutosRepo) {
    this.produtosRepo = produtosRepo;
  }

  async execute(id: string): Promise<any> {
    if (!id) throw new Error('Produto não encontrado.');

    const produto: IProdutoEntidade = await this.produtosRepo.buscaPorId(
      Number(id),
    );
    if (!produto) throw new Error('Produto não encontrado.');

    return await this.produtosRepo.deletar(produto.id);
  }
}
