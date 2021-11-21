import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PizzariasApplicationService } from './application/pizzarias-application.service';
import { Pizzaria } from './domain/entities/pizzaria.entity';
import { PizzariasService } from './domain/pizzarias.service';
import { PizzariasController } from './pizzarias.controller';

@Module({
  controllers: [PizzariasController],
  providers: [PizzariasApplicationService, PizzariasService],
  imports: [TypeOrmModule.forFeature([Pizzaria])],
})
export class PizzariasModule {}
