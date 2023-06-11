import { IProdutoEntidade } from '../../entidades/entidades/Produto';
import { IProdutoRepositorio as IProdutoRepo } from '../../repositorios/IProdutoRepositorio';
import { IUseCase } from '../IUseCase';

export class BuscarProdutoEmailUseCase implements IUseCase<void> {
  private produtosRepo: IProdutoRepo;

  constructor(produtosRepo: IProdutoRepo) {
    this.produtosRepo = produtosRepo;
  }

  async execute(categorias: string[]): Promise<any> {
    if (!categorias) throw new Error('Nenhum produto encontrado.');

    const produtoExistente: IProdutoEntidade =
      await this.produtosRepo.buscaPorCategirias(categorias);

    if (!produtoExistente) throw new Error('Nenhum produto encontrado.');

    return produtoExistente;
  }
}
