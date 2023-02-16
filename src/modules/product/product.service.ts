import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const product: Product = await this.productRepository.findOne({
      where: { id },
    });

    if (!product) throw new NotFoundException('Resource not found.');

    return product;
  }

  async create({
    name,
    price,
    brand,
    description,
  }: CreateProductDto): Promise<Product> {
    const product: Product = this.productRepository.create({
      name,
      price,
      brand,
      description,
    });

    return await this.productRepository.save(product);
  }

  async update(
    id: number,
    { name, price, brand, description }: UpdateProductDto,
  ): Promise<Product> {
    const product: Product = await this.productRepository.preload({
      id,
      name,
      price,
      brand,
    });

    if (!product) throw new NotFoundException('Resource not found.');

    return await this.productRepository.save(product);
  }

  async remove(id: number): Promise<Product> {
    const product: Product = await this.productRepository.findOne({
      where: { id },
    });

    if (!product) throw new NotFoundException('Resource not found.');

    return await this.productRepository.remove(product);
  }
}
