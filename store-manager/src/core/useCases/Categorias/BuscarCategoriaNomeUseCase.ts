import { ICategoriaEntidade } from 'src/core/entidades/entidades/Categoria';
import { ICategoriaRepositorio as ICategoriaRepo } from 'src/core/repositorios/ICategoriaRepositorio';
import { IUseCase } from '../IUseCase';
export class BuscarCategoriaNomeUseCase implements IUseCase<void> {
  private categoriaRepo: ICategoriaRepo;

  constructor(categoriaRepo: ICategoriaRepo) {
    this.categoriaRepo = categoriaRepo;
  }

  async execute(nome: string): Promise<any> {
    if (!nome) throw new Error('Categoria não encontrada.');

    const categoriaExistente: ICategoriaEntidade =
      await this.categoriaRepo.buscaPorNome(nome);

    if (!categoriaExistente) throw new Error('Categoria não encontrada.');

    return categoriaExistente;
  }
}
