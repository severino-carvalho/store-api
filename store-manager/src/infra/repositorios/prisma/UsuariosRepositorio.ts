/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { UsuarioDto } from 'src/core/dtos/Usuarios/UsuarioDto';
import { IUsuarioEntidade } from 'src/core/entidades/entidades/Usuario';
import { IUsuarioRepositorio } from 'src/core/repositorios/IUsuarioRepositorio';
import { PrismaService } from './prisma.service';
import { QueryPaginacao } from 'src/core/repositorios/IRepositorio';

@Injectable()
export class UsuarioPrismaRepo implements IUsuarioRepositorio {
  constructor(private readonly prisma: PrismaService) {}

  async buscarTodos(query: QueryPaginacao): Promise<any> {
    const users = await this.prisma.usuario.findMany({
      skip: Number(query.offset),
      take: Number(query.limite),
      include: {
        carrinho: true,
      },
    });

    const quantidade = await this.prisma.usuario.count();

    return { data: users, quantidade };
  }

  async buscaPorId(id: number): Promise<any> {
    return await this.prisma.usuario.findFirst({
      where: {
        id,
      },
    });
  }

  async buscaPorEmail(email: string): Promise<any> {
    return await this.prisma.usuario.findFirst({
      where: {
        email,
      },
    });
  }

  async criar({ nome, email, senha }: UsuarioDto): Promise<any> {
    const user = await this.prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
        permissoes: ['LER'],
        carrinho: {
          create: {},
        },
      },
      include: {
        carrinho: true,
      },
    });

    return user;
  }

  async atualizar(usuario: UsuarioDto, id: number): Promise<IUsuarioEntidade> {
    throw new Error('Method not implemented.');
  }

  async deletar(id: number): Promise<IUsuarioEntidade> {
    throw new Error('Method not implemented.');
  }
}
