import { Injectable } from '@nestjs/common';
import { Pizzaria } from '../domain/entities/pizzaria.entity';
import { PizzariasService } from '../domain/pizzarias.service';
import { NovaPizzariaDto } from './dtos';
import { PizzariaCadastradaDto } from './dtos/pizzaria-cadastrada.dto';

@Injectable()
export class PizzariasApplicationService {
  constructor(private readonly pizzariasService: PizzariasService) {}

  async adicionaNovaPizzaria(
    novaPizzariaDto: NovaPizzariaDto,
  ): Promise<PizzariaCadastradaDto> {
    const pizzaria = new Pizzaria();
    pizzaria.endereco = novaPizzariaDto.endereco;
    pizzaria.nome = novaPizzariaDto.nome;
    const pizzariaCadastrada = await this.pizzariasService.adicionaNovaPizzaria(
      pizzaria,
    );
    const pizzariacadastradaDto = new PizzariaCadastradaDto();
    pizzariacadastradaDto.id = pizzariaCadastrada.id;
    pizzariacadastradaDto.endereco = pizzariaCadastrada.endereco;
    pizzariacadastradaDto.nome = pizzariaCadastrada.nome;
    return Promise.resolve(pizzariacadastradaDto);
  }
}
