export interface IAutenticacaoService {
  gerarToken(payload: any, secret: string, expiraEm: string): string;

  verificarToken(token: string, secret: string): boolean;

  decodificar(token: string, opcoes?: any): string | any;
}
