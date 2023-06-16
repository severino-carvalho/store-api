import { IProdutoRepositorio } from 'src/core/repositorios/IProdutoRepositorio';
import { IUseCase } from '../IUseCase';
import { IOpcoesPaginacao } from '../IOpcoesPaginacao';

export class ListarProdutosUseCase implements IUseCase<IProdutoRepositorio[]> {
  private produtosRepo: IProdutoRepositorio;

  constructor(produtosRepo: IProdutoRepositorio) {
    this.produtosRepo = produtosRepo;
  }

  async execute(options: IOpcoesPaginacao): Promise<any> {
    const { offset, limite } = options;
    const { data, quantidade } = await this.produtosRepo.buscarTodos({
      offset: offset,
      limite: limite,
    });

    return { data, quantidade };
  }
}
