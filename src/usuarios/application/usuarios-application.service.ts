import { Injectable } from "@nestjs/common";
import { NovoUsuarioDto, UsuarioCadastradoDto } from "./dtos";

@Injectable()
export class UsuariosApplicationService {

  async adicionaNovoUsuario(novoUsuarioDto: NovoUsuarioDto): Promise<UsuarioCadastradoDto> {
    const usuarioCadastradoDto = new UsuarioCadastradoDto()
    usuarioCadastradoDto.id = 1
    usuarioCadastradoDto.email = novoUsuarioDto.email
    usuarioCadastradoDto.senha = novoUsuarioDto.senha
    return Promise.resolve(usuarioCadastradoDto)
  }
}