import { Entidade, IEntidade } from '../Entidade';

export interface IProdutoEntidade extends IEntidade {
  nome: string;
  preco: number;
  description: string;
  image: string;
  categories: string[];
}

export class Produto extends Entidade implements IProdutoEntidade {
  nome: string;
  preco: number;
  description: string;
  image: string;
  categories: string[];

  public validarProduto() {
    if (this.nome === '' || this.nome == null || this.preco == null) {
      throw new Error('Existem campos a serem preenchidos.');
    }
  }
}
