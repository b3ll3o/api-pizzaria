import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { NoJwtGuard } from '../auth/no-jwt-guard/no-jwt-guard.strategy';
import { NovoUsuarioDto, UsuarioCadastradoDto } from './application/dtos';
import { UsuariosApplicationService } from './application/usuarios-application.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(
    private readonly usuariosApplicationService: UsuariosApplicationService,
  ) {}

  @NoJwtGuard()
  @Post()
  async adicionaNovoUsuario(
    @Body() novoUsuarioDto: NovoUsuarioDto,
  ): Promise<UsuarioCadastradoDto | BadRequestException> {
    try {
      return await this.usuariosApplicationService.adicionaNovoUsuario(
        novoUsuarioDto,
      );
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
