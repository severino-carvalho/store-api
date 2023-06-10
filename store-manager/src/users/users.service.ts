import { Injectable, NotFoundException } from '@nestjs/common';

import { hashSync } from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findFirst({ where: { id } });

    if (!user) throw new NotFoundException('User not found.');

    return user;
  }

  async create({ name, email, password }: CreateUserDto) {
    await this.validateUser(email);

    password = this.hashSync(password, 10);

    return await this.prisma.user.create({
      data: {
        name,
        email,
        password,
        cart: {
          create: {},
        },
      },
      include: { cart: true },
    });
  }

  async update(id: number, { name, email, password }: UpdateUserDto) {
    await this.validateUser(email, id);

    password = this.hashSync(password, 10);

    return await this.prisma.user.update({
      where: { id },
      data: {
        name,
        email,
        password,
      },
      include: { cart: true },
    });
  }

  async remove(id: number) {
    const userExists = await this.prisma.user.findFirst({
      where: { id },
      include: { cart: true },
    });

    if (!userExists) throw new NotFoundException('User not exists.');

    await this.prisma.cart.delete({ where: { id: userExists.cart.id } });
    return await this.prisma.user.delete({ where: { id } });
  }

  private async validateUser(email: string, id?: number) {
    const userEmailExists = await this.prisma.user.findUnique({
      where: { email },
    });

    if (userEmailExists && id !== userEmailExists.id)
      throw new NotFoundException('Email address already exists.');

    if (id) {
      const userExists = await this.prisma.user.findFirst({ where: { id } });

      if (!userExists) throw new NotFoundException('User not exists.');
    }
  }

  private hashSync(password: string, salt: number) {
    return hashSync(password, salt);
  }
}
