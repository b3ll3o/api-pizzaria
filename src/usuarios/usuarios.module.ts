import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosApplicationService } from './application/usuarios-application.service';
import { Usuario } from './domain/entities/usuario.entity';
import { UsuariosService } from './domain/usuarios.service';
import { UsuariosController } from './usuarios.controller';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosApplicationService, UsuariosService],
  imports: [TypeOrmModule.forFeature([Usuario])],
  exports: [UsuariosApplicationService],
})
export class UsuariosModule {}
