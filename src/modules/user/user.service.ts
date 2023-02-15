import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user: User = await this.userRepository.findOne({ where: { id } });

    if (!user) throw new NotFoundException('Resource not found.');

    return user;
  }

  async create({ email, name, password }: CreateUserDto): Promise<void> {
    const userAlready = await this.userRepository.findOne({ where: { email } });

    if (userAlready) throw new BadRequestException('Email already exists.');

    const user: User = this.userRepository.create({ email, name, password });

    await this.userRepository.save(user);
  }

  async update(
    id: number,
    { email, name, password }: UpdateUserDto,
  ): Promise<User> {
    const userAlready = await this.userRepository.findOne({ where: { email } });

    if (id !== userAlready.id)
      throw new BadRequestException('Email already exists.');

    const user: User = await this.userRepository.preload({
      id,
      email,
      name,
      password,
    });

    if (!user) throw new NotFoundException('Resource not found.');

    return await this.userRepository.save(user);
  }

  async remove(id: number): Promise<void> {
    const user: User = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) throw new NotFoundException('Resource not found.');

    await this.userRepository.remove(user);
  }
}
