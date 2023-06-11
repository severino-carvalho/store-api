import { UsuarioDto } from '../../../dtos/Usuarios/UsuarioDTO';
import { IUsuarioEntidade, Usuario } from '../../entidades/Usuario';
import { Mapper } from '../Mapper';

export class mapUsuarioDTOUsuarioEntidade
  implements Mapper<UsuarioDto, IUsuarioEntidade>
{
  public mapFrom(data: UsuarioDto): Usuario {
    const usuario = new Usuario();

    usuario.email = data.email;
    usuario.senha = data.senha;

    return usuario;
  }

  public mapTo(data: IUsuarioEntidade): UsuarioDto {
    const usuario = new UsuarioDto();

    usuario.id = data.id;
    usuario.email = data.email;
    usuario.senha = data.senha;

    return usuario;
  }
}
