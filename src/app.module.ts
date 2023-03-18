import { Module } from '@nestjs/common';
import { CartModule } from './cart/cart.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './security/auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductsModule,
    CategoriesModule,
    CartModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
