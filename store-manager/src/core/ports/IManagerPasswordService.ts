export interface IGerenciadorSenhaService {
  compareSync(senha: string, hash: string): boolean;

  hashSync(senha: string, salt: number): string;
}
