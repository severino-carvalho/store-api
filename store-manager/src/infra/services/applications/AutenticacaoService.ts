import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IAutenticacaoService } from 'src/core/ports/IAutenticacaoService';

@Injectable()
export class AutenticacaoService implements IAutenticacaoService {
  constructor(private readonly jwtService: JwtService) {}

  gerarToken(payload: any, secret: string, expiresIn: string): string {
    const token = this.jwtService.sign(payload, {
      secret: secret,
      expiresIn: expiresIn,
    });

    return token;
  }

  verificarToken(token: string, secret: string): boolean {
    try {
      const retorno = this.jwtService.verify(token, {
        algorithms: ['HS256'],
        ignoreExpiration: false,
        secret,
      });

      if (retorno) return true;
    } catch (error) {
      return false;
    }
  }

  decodificar(token: string, options?: any): string | any {
    return this.jwtService.decode(token, options);
  }
}
