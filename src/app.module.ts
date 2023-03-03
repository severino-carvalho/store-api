import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CartModule } from './cart/cart.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule, CategoriesModule, CartModule, UsersModule],
})
export class AppModule {}
