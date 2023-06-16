import { ICategoriaEntidade } from 'src/core/entidades/entidades/Categoria';
import { ICategoriaRepositorio as ICategoriaRepo } from 'src/core/repositorios/ICategoriaRepositorio';
import { IUseCase } from '../IUseCase';

export class BuscarCategoriaIdUseCase implements IUseCase<void> {
  private categoriaRepo: ICategoriaRepo;

  constructor(categoriaRepo: ICategoriaRepo) {
    this.categoriaRepo = categoriaRepo;
  }

  async execute(id: number): Promise<any> {
    if (!id) throw new Error('Categoria não encontrada.');

    const categoriaExistente: ICategoriaEntidade =
      await this.categoriaRepo.buscaPorId(id);

    if (!categoriaExistente) throw new Error('Caregoria não encontrada.');

    return categoriaExistente;
  }
}
