import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List all products.' })
  findAll() {
    try {
      return this.productsService.findAll();
    } catch (error) {}
  }

  @Get(':id')
  @ApiOperation({ summary: 'List one product of id.' })
  findOne(@Param('id') id: string) {
    try {
      return this.productsService.findOne(+id);
    } catch (error) {}
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product.' })
  create(@Body() createProductDto: CreateProductDto) {
    try {
      return this.productsService.create(createProductDto);
    } catch (error) {}
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one product.' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      return this.productsService.update(+id, updateProductDto);
    } catch (error) {}
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one product.' })
  remove(@Param('id') id: string) {
    try {
      return this.productsService.remove(+id);
    } catch (error) {}
  }
}
