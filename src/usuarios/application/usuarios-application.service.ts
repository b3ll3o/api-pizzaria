import { Injectable } from '@nestjs/common';
import { Usuario } from '../domain/entities/usuario.entity';
import { UsuariosService } from '../domain/usuarios.service';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './dtos';

@Injectable()
export class UsuariosApplicationService {
  constructor(private readonly usuariosService: UsuariosService) {}

  async adicionaNovoUsuario(
    novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto> {
    const usuario = new Usuario();
    usuario.email = novoUsuarioDto.email;
    usuario.senha = novoUsuarioDto.senha;

    const usuarioCadastrado = await this.usuariosService.adicionaNovoUsuario(
      usuario,
    );

    const usuarioCadastradoDto = new UsuarioCadastradoDto();
    usuarioCadastradoDto.id = usuarioCadastrado.id;
    usuarioCadastradoDto.email = usuarioCadastrado.email;
    usuarioCadastradoDto.senha = usuarioCadastrado.senha;

    return Promise.resolve(usuarioCadastradoDto);
  }
}
