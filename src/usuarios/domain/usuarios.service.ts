import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}

  async adicionaNovoUsuario(usuario: Usuario): Promise<Usuario> {
    if(this.buscaUsuarioPorEmail(usuario.email))
      throw new Error('Email já cadastrado!')
      
    return this.usuariosRepository.save(usuario);
  }

  async buscaUsuarioPorEmail(email: string): Promise<Usuario | undefined> {
    return this.usuariosRepository.findOne({ where: { email }})
  }
}
