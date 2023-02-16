import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  async findAll() {
    return `This action returns all category`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  async remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
