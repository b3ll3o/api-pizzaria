import { IsNotEmpty } from "class-validator";
import { NovoClienteDto } from "./novo-cliente.dto";

export class ClienteCadastradoDto extends NovoClienteDto {
  @IsNotEmpty()
  id: number
}