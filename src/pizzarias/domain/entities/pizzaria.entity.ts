import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pizzaria {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  endereco: string;
  @Column()
  nome: string;
}
