import { Injectable } from "@nestjs/common";
import { Usuario } from "./entities/usuario.entity";

@Injectable()
export class UsuariosService {

  async adicionaNovoUsuario(usuario: Usuario): Promise<Usuario> {
    return Promise.resolve(new Usuario())
  }
}