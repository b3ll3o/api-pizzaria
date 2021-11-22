import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pizzaria } from './entities/pizzaria.entity';

@Injectable()
export class PizzariasService {
  constructor(
    @InjectRepository(Pizzaria)
    private readonly pizzariaRepository: Repository<Pizzaria>,
  ) {}

  async adicionaNovaPizzaria(pizzaria: Pizzaria): Promise<Pizzaria> {
    return this.pizzariaRepository.save(pizzaria);
  }
}
