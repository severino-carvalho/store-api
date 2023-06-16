import { CategoriaDto } from 'src/core/dtos/Categorias/CategoriaDto';
import {
  CategoriaEntidade,
  ICategoriaEntidade,
} from '../../entidades/Categoria';
import { Mapper } from '../Mapper';

export class mapCategoriaDTOEntidade
  implements Mapper<CategoriaDto, ICategoriaEntidade>
{
  public mapFrom(data: CategoriaDto): CategoriaEntidade {
    const categoria = new CategoriaEntidade();

    categoria.nome = data.nome;

    return categoria;
  }

  public mapTo(data: ICategoriaEntidade): CategoriaDto {
    const categoriaDto = new CategoriaDto();

    categoriaDto.id = data.id;
    categoriaDto.nome = data.nome;

    return categoriaDto;
  }
}
