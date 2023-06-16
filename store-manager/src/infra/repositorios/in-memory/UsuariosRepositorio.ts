import { Injectable } from '@nestjs/common';
import { UsuarioDto } from '../../../core/dtos/Usuarios/UsuarioDto';
import { IUsuarioEntidade } from '../../../core/entidades/entidades/Usuario';
import { IUsuarioRepositorio } from '../../../core/repositorios/IUsuarioRepositorio';
import { QueryPaginacao } from 'src/core/repositorios/IRepositorio';

@Injectable()
export class UsuarioMemoriaRepo implements IUsuarioRepositorio {
  private usuarios = [
    {
      id: 1,
      nome: 'Joca Junior',
      email: 'rootawdawd@gmail.com',
      senha: '$2b$10$jsjz4VWzVJBcxiKxiM8NMOlx1uJa9VkwFt3CEhXy5URfU2SK9KVWi',
      permissoes: ['ler'],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    } as IUsuarioEntidade,
    {
      id: 2,
      nome: 'Neto',
      email: 'root@gmail.com',
      senha: '$2b$10$jsjz4VWzVJBcxiKxiM8NMOlx1uJa9VkwFt3CEhXy5URfU2SK9KVWi',
      permissoes: ['ler', 'criar', 'atualizar', 'deletar'],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    } as IUsuarioEntidade,
    {
      id: 3,
      nome: 'Souza',
      email: 'usuario@gmail.com',
      senha: '$2b$10$jsjz4VWzVJBcxiKxiM8NMOlx1uJa9VkwFt3CEhXy5URfU2SK9KVWi',
      permissoes: ['login'],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    } as IUsuarioEntidade,
    {
      id: 4,
      nome: '',
      email: 'roota@gmail.com',
      senha: '$2b$10$jsjz4VWzVJBcxiKxiM8NMOlx1uJa9VkwFt3CEhXy5URfU2SK9KVWi',
      permissoes: ['login'],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    } as IUsuarioEntidade,
    {
      id: 5,
      nome: '',
      email: 'roote@gmail.com',
      senha: '$2b$10$jsjz4VWzVJBcxiKxiM8NMOlx1uJa9VkwFt3CEhXy5URfU2SK9KVWi',
      permissoes: ['login'],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    } as IUsuarioEntidade,
  ];

  buscarTodos(query: QueryPaginacao) {
    const usuarios = this.usuarios.slice(
      query.offset,
      query.offset + query.limite,
    );

    return Promise.resolve({
      data: usuarios,
      quantidade: this.usuarios.length,
    });
  }

  buscaPorId(id: number): Promise<IUsuarioEntidade> {
    return Promise.resolve(this.usuarios.find((u) => u.id == id));
  }

  buscaPorEmail(email: string): Promise<IUsuarioEntidade> {
    return Promise.resolve(this.usuarios.find((u) => u.email == email));
  }

  criar(usuario: UsuarioDto): Promise<IUsuarioEntidade> {
    usuario.id = Math.round(Math.random() * 100);
    this.usuarios.push(usuario as unknown as IUsuarioEntidade);
    this.usuarios[this.usuarios.length - 1].permissoes = ['login'];
    this.usuarios[this.usuarios.length - 1].created_at =
      new Date().toISOString();
    this.usuarios[this.usuarios.length - 1].updated_at =
      new Date().toISOString();

    return Promise.resolve(
      this.usuarios[this.usuarios.length - 1] as IUsuarioEntidade,
    );
  }

  atualizar(usuario: UsuarioDto, id: number): Promise<IUsuarioEntidade> {
    const user = this.usuarios.find((u) => u.id == id);
    const index = this.usuarios.indexOf(user);

    user.nome = usuario.nome;
    user.email = usuario.email;
    user.senha = usuario.senha;
    user.updated_at = new Date().toISOString();

    this.usuarios[index] = user;

    return Promise.resolve(user);
  }

  deletar(id: number): Promise<IUsuarioEntidade> {
    const user = this.usuarios.find((u) => u.id == id);
    user.nome = '' + Math.random();

    return Promise.resolve(user);
  }
}
