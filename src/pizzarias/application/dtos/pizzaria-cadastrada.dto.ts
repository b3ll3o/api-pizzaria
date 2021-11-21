import { IsNotEmpty, isNotEmpty } from "class-validator";
import { NovaPizzariaDto } from ".";

export class PizzariaCadastradaDto extends NovaPizzariaDto {
  @IsNotEmpty()
  id: number
}