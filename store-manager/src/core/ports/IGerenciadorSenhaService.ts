export interface IGerenciadorSenhaService {
  compararSync(senha: string, hash: string): boolean;

  hashSync(senha: string, salt: number): string;
}
