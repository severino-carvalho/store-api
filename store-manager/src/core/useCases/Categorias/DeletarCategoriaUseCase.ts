import { ICategoriaEntidade } from 'src/core/entidades/entidades/Categoria';
import { ICategoriaRepositorio as ICategoriaRepo } from 'src/core/repositorios/ICategoriaRepositorio';
import { IUseCase } from '../IUseCase';

export class DeletarCategoriaUseCase implements IUseCase<void> {
  private categoriaRepo: ICategoriaRepo;

  constructor(categoriaRepo: ICategoriaRepo) {
    this.categoriaRepo = categoriaRepo;
  }

  async execute(id: string): Promise<any> {
    if (!id) throw new Error('Categoria não encontrada.');

    const categoria: ICategoriaEntidade = await this.categoriaRepo.buscaPorId(
      Number(id),
    );
    if (!categoria) throw new Error('Categoria não encontrada.');

    return await this.categoriaRepo.deletar(categoria.id);
  }
}
