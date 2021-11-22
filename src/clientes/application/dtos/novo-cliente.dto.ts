import { IsNotEmpty } from "class-validator";

export class NovoClienteDto {
  @IsNotEmpty()
  nome: string
  @IsNotEmpty()
  endereco: string
}