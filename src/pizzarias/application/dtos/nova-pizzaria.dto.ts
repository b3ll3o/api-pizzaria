import { IsNotEmpty } from 'class-validator';

export class NovaPizzariaDto {
  @IsNotEmpty({ message: 'Endereço não pode ser vazio!' })
  endereco: string;
  @IsNotEmpty({ message: 'Nome não pode ser vazio!' })
  nome: string;
}
