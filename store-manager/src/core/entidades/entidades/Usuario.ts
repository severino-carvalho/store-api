import { Entidade, IEntidade } from '../Entidade';

export interface IUsuarioEntidade extends IEntidade {
  nome: string;
  email: string;
  senha: string;
  permissoes: string[];
}

export class Usuario extends Entidade implements IUsuarioEntidade {
  nome: string;
  email: string;
  senha: string;
  permissoes: string[];

  public validarUsuario() {
    if (
      this.email === '' ||
      this.email == null ||
      this.senha === '' ||
      this.senha == null
    ) {
      throw new Error('Email e/ou senha inválidos');
    }

    if (this.nome === '' || this.nome == null) {
      throw new Error('Existem campos a serem preenchidos.');
    }
  }
}
