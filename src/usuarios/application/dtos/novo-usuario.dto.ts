import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class NovoUsuarioDto {
  @IsNotEmpty({ message: 'Email inválido!' })
  @IsEmail(undefined, { message: 'Email inválido!' })
  email: string;

  @IsNotEmpty()
  @MinLength(5, { message: 'A senha deve ter pelo menos 5 caracteres!' })
  senha: string;
}
