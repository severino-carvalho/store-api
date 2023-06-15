import { ICarrinhoRepositorio } from '../../../core/repositorios/ICarrinhoRepositorio';
import { IUseCase } from '../IUseCase';

export class BuscarCarrinhoUseCase implements IUseCase<void> {
  private carrinhosRepo: ICarrinhoRepositorio;

  constructor(carrinhosRepo: ICarrinhoRepositorio) {
    this.carrinhosRepo = carrinhosRepo;
  }

  async execute(usuario_id: number): Promise<any> {
    const carrinho = await this.carrinhosRepo.buscaPorIdUsuario(usuario_id);
    if (!carrinho) throw new Error('Carrinho não encontrado.');

    return carrinho;
  }
}
