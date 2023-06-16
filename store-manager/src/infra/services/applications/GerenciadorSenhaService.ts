import { Injectable } from '@nestjs/common';
import { compareSync, hashSync } from 'bcrypt';
import { IGerenciadorSenhaService } from 'src/core/ports/IGerenciadorSenhaService';

@Injectable()
export class GerenciadorSenhaService implements IGerenciadorSenhaService {
  compararSync(senha: string, hash: string): boolean {
    return compareSync(senha, hash);
  }

  hashSync(senha: string, salt: number): string {
    return hashSync(senha, salt);
  }
}
