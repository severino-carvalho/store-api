export interface IUseCase<T> {
  execute(...args): T | Promise<T> | T[] | Promise<T[]>;
}
