import { CategoriaDto } from 'src/core/dtos/Categorias/CategoriaDto';
import { ICategoriaEntidade } from 'src/core/entidades/entidades/Categoria';
import { ICategoriaRepositorio as ICategoriaRepo } from 'src/core/repositorios/ICategoriaRepositorio';
import { IUseCase } from '../IUseCase';

export class AtualizarCategoriaUseCase implements IUseCase<void> {
  private categoriaRepo: ICategoriaRepo;

  constructor(categoriaRepo: ICategoriaRepo) {
    this.categoriaRepo = categoriaRepo;
  }

  async execute(caregoria: CategoriaDto, id: number): Promise<any> {
    if (!id) throw new Error('Categoria não encontrada.');

    const categoria_id: ICategoriaEntidade =
      await this.categoriaRepo.buscaPorId(Number(id));
    if (!categoria_id) throw new Error('Usuário não encontrado');

    const categoria_nome: ICategoriaEntidade =
      await this.categoriaRepo.buscaPorNome(caregoria.nome);
    if (categoria_nome && categoria_nome.id != id)
      throw new Error('Categoria já utilizados.');

    return await this.categoriaRepo.atualizar(caregoria, id);
  }
}
