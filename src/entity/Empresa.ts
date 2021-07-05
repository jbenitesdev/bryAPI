import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, ManyToMany, JoinTable } from "typeorm";
import { Funcionario } from "./Funcionario";

@Entity({ name: 'empresa' })
export class Empresa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    nome: string;

    @Column({ nullable: false })
    cnpj: string;

    @Column({ nullable: false })
    endereco: string;

   
    
    @ManyToMany(() => Funcionario, (funcionario: Funcionario) => funcionario.empresa)
    @JoinTable()
    funcionario: Funcionario[];


}
