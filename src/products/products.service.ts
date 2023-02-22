import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    return await this.prisma.product.findMany({
      include: { categories: true },
    });
  }

  async findOne(id: number): Promise<Product> {
    if (!(await this.verifyProductExist(id)))
      throw new NotFoundException('Resource not found.');

    const product = await this.prisma.product.findUnique({
      where: { id },
      include: { categories: true },
    });

    return product;
  }

  async create({
    name,
    price,
    description,
    image,
    categories,
  }: CreateProductDto): Promise<Product> {
    await this.verifyCategoriesExist(categories);

    return this.prisma.product.create({
      data: {
        name,
        price,
        description,
        image,
        categories: categories && {
          createMany: {
            data: categories.map((id) => ({ category_id: id })),
            skipDuplicates: true,
          },
        },
      },
      include: { categories: true },
    });
  }

  async update(
    id: number,
    { name, price, description, categories, image }: UpdateProductDto,
  ): Promise<Product> {
    await this.verifyCategoriesExist(categories);

    if (!(await this.verifyProductExist(id)))
      throw new NotFoundException('Resource not found.');

    return await this.prisma.product.update({
      where: { id },
      data: {
        name,
        price,
        description,
        image,
        categories: categories && {
          deleteMany: {},
          createMany: {
            data: categories.map((id) => ({ category_id: id })),
          },
        },
      },
      include: { categories: true },
    });
  }

  async remove(id: number): Promise<Product> {
    if (!(await this.verifyProductExist(id)))
      throw new NotFoundException('Resource not found.');

    return await this.prisma.product.delete({ where: { id } });
  }

  private async verifyProductExist(id: number): Promise<boolean> {
    const categoryExist = await this.prisma.product.findUnique({
      where: { id },
    });

    return !!categoryExist;
  }

  private async verifyCategoriesExist(categories: number[]): Promise<void> {
    const categoryResult = await Promise.all(
      categories.map(async (id) => {
        return await this.prisma.category.findUnique({ where: { id } });
      }),
    );

    categoryResult.forEach((category) => {
      if (!category) {
        throw new NotFoundException('Category not found.');
      }
    });
  }
}
