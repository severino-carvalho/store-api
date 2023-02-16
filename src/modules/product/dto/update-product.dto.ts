import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsString()
  name: string;
  @IsNumber()
  price: number;
  @IsString()
  brand: string;
  @IsString()
  description: string;
}
