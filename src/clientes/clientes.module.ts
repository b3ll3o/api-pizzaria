import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesApplicationService } from './application/dtos/clientes-application.service';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './domain/clientes.service';
import { Cliente } from './domain/entities/cliente.entity';

@Module({
  controllers: [ClientesController],
  providers: [ClientesApplicationService, ClientesService],
  imports: [TypeOrmModule.forFeature([Cliente])]
})
export class ClientesModule {}
