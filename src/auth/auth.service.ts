import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosApplicationService } from '../usuarios/application/usuarios-application.service';

@Injectable()
export class AuthService {
  constructor(
    private usuariosApplicationService: UsuariosApplicationService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.usuariosApplicationService.buscaPorEmail(email);
    if (usuario && usuario.senha === senha) {
      usuario.senha = undefined;
      return usuario;
    }
    return null;
  }

  async login(usuario: any) {
    const payload = { email: usuario.email, sub: usuario.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
