import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiOperation({ summary: 'List all categories.' })
  findAll() {
    try {
      return this.categoriesService.findAll();
    } catch (error) {}
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  @ApiOperation({ summary: 'List one category by id.' })
  findOne(@Param('id') id: string) {
    try {
      return this.categoriesService.findOne(+id);
    } catch (error) {}
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  @ApiOperation({ summary: 'Create a new category.' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return this.categoriesService.create(createCategoryDto);
    } catch (error) {}
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  @ApiOperation({ summary: 'Update one category.' })
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    try {
      return this.categoriesService.update(+id, updateCategoryDto);
    } catch (error) {}
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiOperation({ summary: 'Delete one category.' })
  remove(@Param('id') id: string) {
    try {
      return this.categoriesService.remove(+id);
    } catch (error) {}
  }
}
