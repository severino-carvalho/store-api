import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  price: number;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  description?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  image?: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional()
  categories?: number[];
}
