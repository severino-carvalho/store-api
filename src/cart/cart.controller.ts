import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { DeleteCartDto } from './dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('carts')
@ApiBearerAuth()
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
