import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalGuard } from '../guards';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalGuard)
  @Post('login')
  @ApiBody({ type: AuthLoginDTO })
  @ApiOperation({ summary: 'Route for login.' })
  async login(@Req() req: any) {
    return await this.authService.login(req.user);
  }
}
