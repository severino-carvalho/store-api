import { CategoriaDto } from 'src/core/dtos/Categorias/CategoriaDto';
import { ICategoriaEntidade } from 'src/core/entidades/entidades/Categoria';
import { mapCategoriaDTOEntidade } from 'src/core/entidades/mappers/Categoria/mapCategoriaDTOEntidade';
import { ICategoriaRepositorio as ICategoriaRepo } from 'src/core/repositorios/ICategoriaRepositorio';
import { IUseCase } from '../IUseCase';

export class CriarCategoriaUseCase implements IUseCase<void> {
  private categoriaRepo: ICategoriaRepo;
  private mapDtoEntidade: mapCategoriaDTOEntidade;

  constructor(categoriaRepo: ICategoriaRepo) {
    this.categoriaRepo = categoriaRepo;
    this.mapDtoEntidade = new mapCategoriaDTOEntidade();
  }

  async execute(categoria: CategoriaDto): Promise<any> {
    if (!categoria) throw new Error('Categoria inválido.');

    const entidade = this.mapDtoEntidade.mapFrom(categoria);
    entidade.validarCategoria();

    const categoriaExiste: ICategoriaEntidade =
      await this.categoriaRepo.buscaPorNome(categoria.nome);

    if (categoriaExiste) throw new Error('Categoria já cadastrada.');

    return await this.categoriaRepo.criar(categoria);
  }
}
