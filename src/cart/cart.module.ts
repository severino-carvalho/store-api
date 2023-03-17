import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsService } from 'src/products/products.service';

import { CartController } from './cart.controller';
import { CartService } from './cart.service';

@Module({
  controllers: [CartController],
  providers: [CartService, PrismaService, ProductsService],
})
export class CartModule {}
