import { IsInt } from 'class-validator';

export class UpdateCartDto {
  @IsInt()
  product_id: number;

  @IsInt()
  quantity: number;
}
