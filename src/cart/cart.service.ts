import { Injectable } from '@nestjs/common';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaClient } from '@prisma/client';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaClient) {}

  async findCart(user_id: number) {
    return '';
  }

  async addOrRemoveToCart(user_id: number, updateCartDto: UpdateCartDto) {
    return ``;
  }

  async deleteFromCart(user_id: number, updateCartDto: UpdateCartDto) {
    return ``;
  }
}
