import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class DeleteCartDto {
  @IsInt()
  @ApiProperty()
  product_id: number;
}
