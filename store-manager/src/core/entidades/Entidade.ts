export interface IEntidade {
  id: number;
  created_at: string;
  updated_at: string;
}

export class Entidade implements IEntidade {
  public id: number;
  public created_at: string;
  public updated_at: string;
}
