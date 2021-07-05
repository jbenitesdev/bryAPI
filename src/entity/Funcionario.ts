import { Entity, PrimaryGeneratedColumn, Column, JoinTable, ManyToMany, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Empresa } from "./Empresa";

@Entity({ name: 'funcionario' })
export class Funcionario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false })
    email: string;

    @Column({ nullable: false })
    cpf: string;

    @Column({ nullable: false })
    endereco: string;

    @ManyToMany('Empresa', (empresa: Empresa) => empresa.funcionario, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
    empresa: Empresa[];

 
}
