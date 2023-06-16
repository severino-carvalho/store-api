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
    if (!this.verifyCategoryExist(id))
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
    if (!this.verifyCategoryExist(id))
      throw new NotFoundException('Resource not found.');

    return await this.prisma.category.update({
      data: { name },
      where: { id },
    });
  }

  async remove(id: number) {
    if (!this.verifyCategoryExist(id))
      throw new NotFoundException('Resource not found.');

    const products = await this.prisma.product.findMany({
      where: { categories: { some: { category: { id } } } },
      include: {
        categories: true,
      },
    });

    products.map(
      async ({ name, price, description, image, categories, ...product }) => {
        await this.prisma.categoriesOnProducts.delete({
          where: {
            category_id_product_id: {
              category_id: id,
              product_id: product.id,
            },
          },
        });

        await this.prisma.product.update({
          where: { id: product.id },
          data: {
            name,
            price,
            description,
            image,
            categories: categories && {
              deleteMany: {
                category_id: id,
              },
            },
          },
        });
      },
    );

    return await this.prisma.category.delete({ where: { id } });
  }

  private async verifyCategoryExist(id: number) {
    const categoryExist = await this.prisma.category.findUnique({
      where: { id },
    });

    return !!categoryExist;
  }
}
