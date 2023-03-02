import { Controller, Get, Body, Param, Delete, Put } from '@nestjs/common';

import { CartService } from './cart.service';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':id')
  async findCart(@Param('id') user_id: string) {
    return await this.cartService.findCart(+user_id);
  }

  @Put(':id')
  async addOrRemoveToCart(
    @Param('id') user_id: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return await this.cartService.addOrRemoveToCart(+user_id, updateCartDto);
  }

  @Delete(':id')
  async deleteFromCart(
    @Param('id') user_id: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return await this.cartService.deleteFromCart(+user_id, updateCartDto);
  }
}
