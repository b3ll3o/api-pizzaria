import { Injectable } from "@nestjs/common";
import { Cliente } from "src/clientes/domain/entities/cliente.entity";
import { ClienteCadastradoDto, NovoClienteDto } from ".";
import { ClientesService } from "../../domain/clientes.service";

@Injectable()
export class ClientesApplicationService {

  constructor(private readonly clientesService: ClientesService) { }

  async adicionaNovoClientePizzaria(novoClienteDto: NovoClienteDto): Promise<ClienteCadastradoDto> {
    const cliente = new Cliente()
    cliente.nome = novoClienteDto.nome
    cliente.endereco = novoClienteDto.endereco

    const clienteCadastrado = await this.clientesService.adicionaNovoCliente(cliente)

    const clienteCadastradoDto = new ClienteCadastradoDto()
    clienteCadastradoDto.id = clienteCadastrado.id
    clienteCadastradoDto.nome = clienteCadastrado.nome
    clienteCadastradoDto.endereco = clienteCadastrado.endereco

    return Promise.resolve(clienteCadastradoDto)
  }
}