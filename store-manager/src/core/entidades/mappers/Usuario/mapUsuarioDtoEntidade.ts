import { UsuarioDto } from '../../../dtos/Usuarios/UsuarioDto';
import { IUsuarioEntidade, UsuarioEntidade } from '../../entidades/Usuario';
import { Mapper } from '../Mapper';

export class mapUsuarioDTOUsuarioEntidade
  implements Mapper<UsuarioDto, IUsuarioEntidade>
{
  public mapFrom(data: UsuarioDto): UsuarioEntidade {
    const usuario = new UsuarioEntidade();

    usuario.nome = data.nome;
    usuario.email = data.email;
    usuario.senha = data.senha;

    return usuario;
  }

  public mapTo(data: IUsuarioEntidade): UsuarioDto {
    const usuario = new UsuarioDto();

    usuario.id = data.id;
    usuario.nome = data.nome;
    usuario.email = data.email;
    usuario.senha = data.senha;

    return usuario;
  }
}
