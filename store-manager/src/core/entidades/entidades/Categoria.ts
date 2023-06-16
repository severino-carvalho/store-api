import { Entidade, IEntidade } from '../Entidade';

export interface ICategoriaEntidade extends IEntidade {
  nome: string;
}

export class CategoriaEntidade extends Entidade implements ICategoriaEntidade {
  nome: string;

  public validarCategoria() {
    if (this.nome == '' || this.nome == null)
      throw new Error('Existem campos a serem preenchidos.');
  }
}
