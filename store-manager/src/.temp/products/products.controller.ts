import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ProductsService } from './products.service';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  @ApiOperation({ summary: 'List all products.' })
  async findAll() {
    try {
      return await this.productsService.findAll();
    } catch (error) { }
  }

  @Get(':id')
  @ApiOperation({ summary: 'List one product of id.' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.productsService.findOne(+id);
    } catch (error) { }
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product.' })
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      return await this.productsService.create(createProductDto);
    } catch (error) { }
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one product.' })
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    try {
      return await this.productsService.update(+id, updateProductDto);
    } catch (error) { }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one product.' })
  async remove(@Param('id') id: string) {
    try {
      return await this.productsService.remove(+id);
    } catch (error) { }
  }
}
