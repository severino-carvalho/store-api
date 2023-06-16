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
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/security/guards';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'List all users.' })
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'List one user of id.' })
  async findOne(@Param('id') id: string) {
    try {
      return await this.usersService.findOne(+id);
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user.' })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one user.' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove one user.' })
  async remove(@Param('id') id: string) {
    try {
      return await this.usersService.remove(+id);
    } catch (error) {
      return { error: error.message };
    }
  }
}
