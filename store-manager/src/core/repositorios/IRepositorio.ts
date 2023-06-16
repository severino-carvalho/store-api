export type QueryPaginacao = {
  offset: number;
  limite: number;
};

export interface IRepositorio<TEntity> {
  buscarTodos(query?: QueryPaginacao): Promise<any>;
}
