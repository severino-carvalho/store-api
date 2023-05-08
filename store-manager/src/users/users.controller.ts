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

  @UseGuards(JwtGuard)
  @Get()
  @ApiOperation({ summary: 'List all users.' })
  async findAll() {
    return await this.usersService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  @ApiOperation({ summary: 'List one user of id.' })
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user.' })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update one user.' })
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Remove one user.' })
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(+id);
  }
}
