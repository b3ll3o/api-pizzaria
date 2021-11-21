import { Injectable } from '@nestjs/common';
import { UsuariosApplicationService } from '../usuarios/application/usuarios-application.service';

@Injectable()
export class AuthService {
  constructor(private usuariosApplicationService: UsuariosApplicationService) {}

  async validateUser(email: string, senha: string): Promise<any> {
    const usuario = await this.usuariosApplicationService.buscaPorEmail(email);
    if (usuario && usuario.senha === senha) {
      usuario.senha = undefined;
      return usuario;
    }
    return null;
  }
}
