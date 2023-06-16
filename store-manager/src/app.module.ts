import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsuariosController } from './infra/api/controllers/UsuariosController';
import { AutenticacaoService } from './infra/services/applications/AutenticacaoService';
import { GerenciadorSenhaService } from './infra/services/applications/GerenciadorSenhaService';
import { CriarProdutoUseCase } from './core/useCases/Produtos/CriarProdutoUseCase';
import { CriarUsuarioUseCase } from './core/useCases/Usuarios/CriarUsuarioUseCase';
import { CriarCategoriaUseCase } from './core/useCases/Categorias/CriarCategoriaUseCase';
import { BuscarUsuarioIdUseCase } from './core/useCases/Usuarios/BuscarUsuarioIdUseCase';
import { BuscarCarrinhoUseCase } from './core/useCases/Cart/BuscarCarrinhoUseCase';
import { BuscarCategoriaNomeUseCase } from './core/useCases/Categorias/BuscarCategoriaNomeUseCase';
import { BuscarProdutoIdUseCase } from './core/useCases/Produtos/BuscarProdutoIdUseCase';
import { BuscarUsuarioEmailUseCase } from './core/useCases/Usuarios/BuscarUsuarioEmailUseCase';
import { BuscarProdutoEmailUseCase } from './core/useCases/Produtos/BuscarProdutoCategoriasUseCase';
import { ListarUsuariosUseCase } from './core/useCases/Usuarios/ListarUsuariosUseCase';
import { ListarProdutosUseCase } from './core/useCases/Produtos/ListarProdutoUseCase';
import { BuscarCategoriaIdUseCase } from './core/useCases/Categorias/BuscarCategoriaIdUseCase';
import { ListarCategoriasUseCase } from './core/useCases/Categorias/ListarCategoriasUseCase';
import { AtualizarUsuarioUseCase } from './core/useCases/Usuarios/AtualizarUsuarioUseCase';
import { AtualizarProdutoUseCase } from './core/useCases/Produtos/AtualizarProdutoUseCase';
import { AtualizarCategoriaUseCase } from './core/useCases/Categorias/AtualizarCaregoriaUseCase';
import { DeletarUsuarioUseCase } from './core/useCases/Usuarios/DeletarUsuarioUseCase';
import { DeletarProdutoUseCase } from './core/useCases/Produtos/DeletarProdutoUseCase';
import { DeletarCategoriaUseCase } from './core/useCases/Categorias/DeletarCategoriaUseCase';
import { DeletarProdutoCarrinhoUseCase } from './core/useCases/Cart/DeletarProdutoCarrinhoUseCase';
import { UsuarioPrismaRepo } from './infra/repositorios/prisma/UsuariosRepositorio';
import { PrismaService } from './infra/repositorios/prisma/prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), PassportModule, JwtModule.register({})],
  controllers: [UsuariosController],
  providers: [
    AutenticacaoService,
    JwtService,
    GerenciadorSenhaService,

    CriarUsuarioUseCase,
    // CriarProdutoUseCase,
    // CriarCategoriaUseCase,

    BuscarUsuarioIdUseCase,
    BuscarUsuarioEmailUseCase,
    ListarUsuariosUseCase,

    // BuscarProdutoIdUseCase,
    // BuscarProdutoEmailUseCase,
    // ListarProdutosUseCase,

    // BuscarCategoriaIdUseCase,
    // BuscarCategoriaNomeUseCase,
    // ListarCategoriasUseCase,

    // BuscarCarrinhoUseCase,

    // AtualizarUsuarioUseCase,
    // AtualizarProdutoUseCase,
    // AtualizarCategoriaUseCase,

    // DeletarUsuarioUseCase,
    // DeletarProdutoUseCase,
    // DeletarCategoriaUseCase,
    // DeletarProdutoCarrinhoUseCase,

    PrismaService,
    UsuarioPrismaRepo,
  ],
})
export class AppModule {
  static port: string;
  constructor(configService: ConfigService) {
    AppModule.port = configService.get('PORT');
  }
}
