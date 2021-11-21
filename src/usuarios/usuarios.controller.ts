import { Body, Controller, Post } from '@nestjs/common';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';
import { UsuariosApplicationService } from './application/usuarios-application.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosApplicationService: UsuariosApplicationService,
  ) {}

  @Post()
  async adicionaNovoUsuario(
    @Body() novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto> {
    return this.usuariosApplicationService.adicionaNovoUsuario(novoUsuarioDto);
  }
}
