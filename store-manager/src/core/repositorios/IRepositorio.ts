type QueryPaginacao = {
  skip: number;
  take: number;
};

export interface IRepositorio<TEntity> {
  buscarTodos(query?: QueryPaginacao, empresa_id?: number): Promise<any>;
}
