import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local/local.strategy';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, LocalStrategy],
  imports: [UsuariosModule, PassportModule],
  controllers: [AuthController],
})
export class AuthModule {}
