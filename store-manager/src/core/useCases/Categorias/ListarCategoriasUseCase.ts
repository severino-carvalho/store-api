import { ICarrinhoEntidade } from 'src/core/entidades/entidades/Carrinho';
import { ICategoriaRepositorio as ICategoriaRepo } from 'src/core/repositorios/ICategoriaRepositorio';
import { IOpcoesPaginacao } from '../IOpcoesPaginacao';
import { IUseCase } from '../IUseCase';

export class ListarCategoriasUseCase implements IUseCase<ICarrinhoEntidade[]> {
  private categoriaRepo: ICategoriaRepo;

  constructor(categoriaRepo: ICategoriaRepo) {
    this.categoriaRepo = categoriaRepo;
  }

  async execute(options: IOpcoesPaginacao): Promise<any> {
    const { offset, limite } = options;
    const { data, quantidade } = await this.categoriaRepo.buscarTodos({
      offset: offset,
      limite: limite,
    });

    return { data, quantidade };
  }
}
