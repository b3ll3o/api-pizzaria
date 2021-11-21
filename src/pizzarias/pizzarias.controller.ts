import { Body, Controller, Post } from '@nestjs/common';
import { NovaPizzariaDto } from './application/dtos';
import { PizzariaCadastradaDto } from './application/dtos/pizzaria-cadastrada.dto';
import { PizzariasApplicationService } from './application/pizzarias-application.service';

@Controller('pizzarias')
export class PizzariasController {

  constructor(private readonly pizzariasApplicationService: PizzariasApplicationService) { }

  @Post()
  async adicionaNovaPizzaria(@Body() novaPizzariaDto: NovaPizzariaDto): Promise<PizzariaCadastradaDto> {
    return this.pizzariasApplicationService.adicionaNovaPizzaria(novaPizzariaDto)
  }
}
