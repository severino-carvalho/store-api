import { IProdutoRepositorio } from 'src/core/repositorios/IProdutoRepositorio';
import { CarrinhoDto } from '../../../core/dtos/Carrinho/CarrinhoDto';
import { ICarrinhoRepositorio } from '../../../core/repositorios/ICarrinhoRepositorio';
import { IUseCase } from '../IUseCase';

export class AtualizarUsuarioUseCase implements IUseCase<void> {
  private carrinhosRepo: ICarrinhoRepositorio;
  private produtosRepo: IProdutoRepositorio;

  constructor(
    carrinhosRepo: ICarrinhoRepositorio,
    produtosRepo: IProdutoRepositorio,
  ) {
    this.carrinhosRepo = carrinhosRepo;
    this.produtosRepo = produtosRepo;
  }

  async execute(carrinho: CarrinhoDto): Promise<any> {
    const carrinhoExiste = await this.carrinhosRepo.buscaPorProdutoCarrinho(
      carrinho.usuario_id,
      carrinho.produto_id,
    );
    if (!carrinhoExiste) throw new Error('Produto não existe no carrinho.');

    await this.carrinhosRepo.atualizar(carrinho, carrinho.produto_id);
  }
}
