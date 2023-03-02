import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';

@Module({
  controllers: [CartController],
  providers: [CartService, PrismaService],
})
export class CartModule {}
