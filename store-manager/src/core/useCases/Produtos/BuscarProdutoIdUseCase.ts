import { IProdutoEntidade } from '../../entidades/entidades/Produto';
import { IProdutoRepositorio as IProdutoRepo } from '../../repositorios/IProdutoRepositorio';
import { IUseCase } from '../IUseCase';

export class BuscarProdutoIdUseCase implements IUseCase<void> {
  private produtoRepo: IProdutoRepo;

  constructor(produtosRepo: IProdutoRepo) {
    this.produtoRepo = produtosRepo;
  }

  async execute(id: number): Promise<any> {
    if (!id) throw new Error('Produto não encontrado.');

    const produtoExistente: IProdutoEntidade =
      await this.produtoRepo.buscaPorId(id);
    if (!produtoExistente) throw new Error('Produto não encontrado.');

    return produtoExistente;
  }
}
