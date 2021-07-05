import { Connection, getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Funcionario } from "../entity/Funcionario";
import { Empresa } from "../entity/Empresa";


export const getFuncionario = async (request: Request, response: Response) => {
    let funcionario = await getRepository(Funcionario).find({ relations: ['empresa'] });
    return response.json(funcionario);
}

export const saveFuncionario = async (request: Request, response: Response) => {
    let funcionario: Funcionario[] = request.body
    const empresaRepo = await getRepository(Empresa)
    const funcionarioRepo = await getRepository(Funcionario)

    funcionario.map(async funcionario => {
        const empresasSalvas = await empresaRepo.save(funcionario.empresa)
    })

    const funcionarioSalvo = await funcionarioRepo.save(funcionario)
    

    return response.json(funcionarioSalvo);
}

export const updateFuncionario = async (request: Request, response: Response) => {
    let { id } = request.params
    let funcionario = request.body

    const updateFunc = await getRepository(Funcionario).update(id, funcionario);

    if (updateFunc.affected === 1) {
        const funcUpdate = await getRepository(Funcionario).findOne(id);
        return response.json(funcUpdate);
    }

    return response.status(404).json({ message: 'Funcionário não alterado' });
}

export const deleteFuncionario = async (request: Request, response: Response) => {
    let { id } = request.params

    const deletefunc = await getRepository(Funcionario).delete(id);

    if (deletefunc.affected === 1) {
        return response.json({ message: 'Funcionário removido' });
    }

    return response.status(404).json({ message: 'Id não esxite ' });
}