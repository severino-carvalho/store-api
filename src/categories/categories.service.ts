import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Category[]> {
    return await this.prisma.category.findMany();
  }

  async findOne(id: number): Promise<Category> {
    if (!this.verifyCategoryExists(id))
      throw new NotFoundException('Resource not found.');

    return await this.prisma.category.findUnique({
      where: { id },
    });
  }

  async create({ name }: CreateCategoryDto) {
    return await this.prisma.category.create({
      data: { name },
    });
  }

  async update(id: number, { name }: UpdateCategoryDto) {
    if (!this.verifyCategoryExists(id))
      throw new NotFoundException('Resource not found.');

    return await this.prisma.category.update({
      where: { id },
      data: { name },
    });
  }

  async remove(id: number) {
    if (!this.verifyCategoryExists(id))
      throw new NotFoundException('Resource not found.');

    return await this.prisma.category.delete({ where: { id } });
  }

  private async verifyCategoryExists(id: number) {
    const categoryExist = await this.prisma.category.findUnique({
      where: { id },
    });

    return !!categoryExist;
  }
}
