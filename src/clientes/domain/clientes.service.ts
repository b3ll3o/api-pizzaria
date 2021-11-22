import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clientesRepository: Repository<Cliente>,
  ) {}

  async adicionaNovoCliente(cliente: Cliente): Promise<Cliente> {
    return this.clientesRepository.save(cliente);
  }
}
