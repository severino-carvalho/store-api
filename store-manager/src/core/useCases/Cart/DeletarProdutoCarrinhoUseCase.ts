import { ICarrinhoRepositorio } from '../../repositorios/ICarrinhoRepositorio';
import { IUseCase } from '../IUseCase';
import { CarrinhoDto } from '../../dtos/Carrinho/CarrinhoDto';

export class DeletarProdutoCarrinhoUseCase implements IUseCase<void> {
  private carrinhosRepo: ICarrinhoRepositorio;

  constructor(carrinhosRepo: ICarrinhoRepositorio) {
    this.carrinhosRepo = carrinhosRepo;
  }

  async execute(carrinho: CarrinhoDto): Promise<any> {
    const carrinhoExiste = await this.carrinhosRepo.buscaPorProdutoCarrinho(
      carrinho.usuario_id,
      carrinho.produto_id,
    );
    if (!carrinhoExiste) throw new Error('Produto não existe no carrinho.');

    await this.carrinhosRepo.deletar(carrinho.usuario_id, carrinho.produto_id);
  }
}
