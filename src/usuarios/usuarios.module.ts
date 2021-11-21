import { Module } from '@nestjs/common';
import { UsuariosApplicationService } from './application/usuarios-application.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  controllers: [UsuariosController],
  providers: [ UsuariosApplicationService]
})
export class UsuariosModule {}
