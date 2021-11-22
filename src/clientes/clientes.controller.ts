import { Body, Controller, Post } from '@nestjs/common';
import { ClienteCadastradoDto, NovoClienteDto } from './application/dtos';
import { ClientesApplicationService } from './application/dtos/clientes-application.service';

@Controller('clientes')
export class ClientesController {

  constructor(private readonly clientesApplicationService: ClientesApplicationService) { }
  @Post()
  async adicionaNovoCliente(@Body() cliente: NovoClienteDto): Promise<ClienteCadastradoDto> {
    return this.clientesApplicationService.adicionaNovoClientePizzaria(cliente)
  }
}
