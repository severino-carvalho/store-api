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
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/security/guards';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
@ApiBearerAuth()
@ApiTags('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: 'List all categories.' })
  findAll() {
    try {
      return this.categoriesService.findAll();
    } catch (error) {}
  }

  @Get(':id')
  @ApiOperation({ summary: 'List one category by id.' })
  findOne(@Param('id') id: string) {
    try {
      return this.categoriesService.findOne(+id);
    } catch (error) {}
  }

  @Post()
  @ApiOperation({ summary: 'Create a new category.' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      return this.categoriesService.create(createCategoryDto);
    } catch (error) {}
  }

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

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one category.' })
  remove(@Param('id') id: string) {
    try {
      return this.categoriesService.remove(+id);
    } catch (error) {}
  }
}
