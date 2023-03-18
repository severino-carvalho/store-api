import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy, LocalStrategy } from './strategies/';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      privateKey: process.env.JWT_SECRETE_KEY,
      signOptions: { expiresIn: '45s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, PrismaService, JwtStrategy],
})
export class AuthModule {}
