import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
