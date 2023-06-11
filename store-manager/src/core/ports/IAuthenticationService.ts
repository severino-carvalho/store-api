export interface IAuthenticationService {
  generateToken(payload: any, secret: string, expiresIn: string): string;

  verifyToken(token: string, secret: string): boolean;

  decoded(token: string, options?: any): string | any;
}
