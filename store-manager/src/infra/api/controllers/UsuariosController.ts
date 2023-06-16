import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsuarioDto } from '../../../core/dtos/Usuarios/UsuarioDto';
import { IOpcoesPaginacao } from '../../../core/useCases/IOpcoesPaginacao';
import { AtualizarUsuarioUseCase } from '../../../core/useCases/Usuarios/AtualizarUsuarioUseCase';
import { BuscarUsuarioEmailUseCase } from '../../../core/useCases/Usuarios/BuscarUsuarioEmailUseCase';
import { BuscarUsuarioIdUseCase } from '../../../core/useCases/Usuarios/BuscarUsuarioIdUseCase';
import { CriarUsuarioUseCase } from '../../../core/useCases/Usuarios/CriarUsuarioUseCase';
import { DeletarUsuarioUseCase } from '../../../core/useCases/Usuarios/DeletarUsuarioUseCase';
import { ListarUsuariosUseCase } from '../../../core/useCases/Usuarios/ListarUsuariosUseCase';
import { UsuarioPrismaRepo } from '../../../infra/repositorios/prisma/UsuariosRepositorio';
import { GerenciadorSenhaService } from '../../../infra/services/applications/GerenciadorSenhaService';
import { GetUser } from '../decorators/get-user.decorator';

@Controller('usuarios')
export class UsuariosController {
  private criarUsuarioUseCase: CriarUsuarioUseCase;
  private burcarUsuarioIdUseCase: BuscarUsuarioIdUseCase;
  private buscarUsuarioEmailUseCase: BuscarUsuarioEmailUseCase;
  private listarUsuariosUseCase: ListarUsuariosUseCase;
  private atualizarUsuarioUseCase: AtualizarUsuarioUseCase;
  private deletarUsuarioUseCase: DeletarUsuarioUseCase;

  constructor(
    private readonly usersRepo: UsuarioPrismaRepo,
    private readonly gerenciadorSenhaService: GerenciadorSenhaService,
  ) {
    this.criarUsuarioUseCase = new CriarUsuarioUseCase(
      this.usersRepo,
      this.gerenciadorSenhaService,
    );

    this.burcarUsuarioIdUseCase = new BuscarUsuarioIdUseCase(this.usersRepo);
    this.buscarUsuarioEmailUseCase = new BuscarUsuarioEmailUseCase(
      this.usersRepo,
    );
    this.listarUsuariosUseCase = new ListarUsuariosUseCase(this.usersRepo);

    this.atualizarUsuarioUseCase = new AtualizarUsuarioUseCase(
      this.usersRepo,
      this.gerenciadorSenhaService,
    );

    this.deletarUsuarioUseCase = new DeletarUsuarioUseCase(this.usersRepo);
  }

  @Get()
  async buscarTodosUsuarios(@Query() query: IOpcoesPaginacao) {
    try {
      return await this.listarUsuariosUseCase.execute(query);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Get(':id')
  async buescarUsuarioId(@Param('id') id: string) {
    try {
      return await this.burcarUsuarioIdUseCase.execute(Number(id));
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Get()
  async buescarUsuariosEmail(@Query() query: any) {
    try {
      return await this.buscarUsuarioEmailUseCase.execute(query.email);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Post()
  async criarUsuario(@Body() body: UsuarioDto) {
    try {
      return await this.criarUsuarioUseCase.execute(body);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Patch(':id')
  async atualizarUsuario(
    @GetUser() user,
    @Body() body: UsuarioDto,
    @Param('id') id: number,
  ) {
    try {
      await this.atualizarUsuarioUseCase.execute(body, +id);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  @Delete(':id')
  async deletarUsuario(@Param('id') id: string) {
    try {
      return await this.deletarUsuarioUseCase.execute(id);
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
