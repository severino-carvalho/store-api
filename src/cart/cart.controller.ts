import { Controller, Get, Body, Param, Delete, Put } from '@nestjs/common';

import { CartService } from './cart.service';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteCartDto } from './dto';

@Controller('carts')
@ApiTags('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Find cart by id' })
  async findCart(@Param('id') user_id: string) {
    return await this.cartService.findCart(+user_id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update one product of cart by id' })
  async addOrRemoveToCart(
    @Param('id') user_id: string,
    @Body() updateCartDto: UpdateCartDto,
  ) {
    return await this.cartService.addOrRemoveToCart(+user_id, updateCartDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one product of cart by id' })
  async deleteFromCart(
    @Param('id') user_id: string,
    @Body() deleteCartDto: DeleteCartDto,
  ) {
    return await this.cartService.deleteFromCart(+user_id, deleteCartDto);
  }
}
