import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class UpdateCartDto {
  @IsInt()
  @ApiProperty()
  product_id: number;

  @IsInt()
  @ApiProperty()
  quantity: number;
}
