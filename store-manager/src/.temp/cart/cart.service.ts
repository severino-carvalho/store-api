import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductsOnCarts } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsService } from 'src/products/products.service';
import { DeleteCartDto } from './dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Injectable()
export class CartService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductsService,
  ) {}

  async findCart(user_id: number) {
    const cart = await this.prisma.cart.findUnique({
      where: { user_id },
      include: { products: true },
    });

    if (!cart) throw new NotFoundException('User cart not found.');

    return cart;
  }

  async addOrRemoveToCart(
    user_id: number,
    { product_id, quantity }: UpdateCartDto,
  ) {
    const cart = await this.ifProductExistsInCart(user_id, product_id);

    if (cart) {
      return await this.prisma.cart.update({
        where: { user_id },
        data: {
          products: {
            update: {
              where: { product_id_cart_id: { cart_id: cart.id, product_id } },
              data: { quantity },
            },
          },
        },
        include: { products: true },
      });
    }

    if (!this.ifProductExists)
      throw new NotFoundException('Product not exists.');

    return await this.prisma.cart.update({
      where: { user_id },
      data: { products: { create: { product_id, quantity } } },
      include: { products: true },
    });
  }

  async deleteFromCart(user_id: number, { product_id }: DeleteCartDto) {
    const cart = await this.ifProductExistsInCart(user_id, product_id);

    if (!cart) {
      throw new NotFoundException('Product not found in cart');
    }

    return await this.prisma.cart.update({
      where: { user_id },
      data: {
        products: {
          delete: {
            product_id_cart_id: { cart_id: cart.id, product_id: product_id },
          },
        },
      },
      include: { products: true },
    });
  }

  private async ifProductExistsInCart(user_id: number, product_id: number) {
    return await this.prisma.cart.findFirst({
      where: {
        user_id,
        products: { some: { product_id } },
      },
      include: { products: true },
    });
  }

  private async ifProductExists(product_id: number) {
    const productExists = await this.productService.findOne(product_id);

    return !!productExists;
  }

  private async getProductQuantity(
    product_id: number,
    products: ProductsOnCarts[],
  ) {
    return products.find((p) => p.product_id === product_id).quantity;
  }
}
