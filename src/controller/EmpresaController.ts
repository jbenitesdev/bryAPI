import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Empresa } from "../entity/Empresa";
import { Funcionario } from "../entity/Funcionario";


export const getEmpresa = async (request: Request, response: Response) => {
    let empresa = await getRepository(Empresa).find({ relations: ['funcionario'] });
    return response.json(empresa);
}

export const saveEmpresa = async (request: Request, response: Response) => {
    let empresa = request.body
    const empresaRepo = await getRepository(Empresa)
    const funcionarioRepo = await getRepository(Funcionario)

    empresa.map(async empresa => {
        const funcionarioSalvas = await funcionarioRepo.save(empresa.funcionario)
    })

    const empresaSalva = await empresaRepo.save(empresa)

    return response.json(empresaSalva);
}

export const updateEmpresa = async (request: Request, response: Response) => {
    let { id } = request.params
    let empresa = request.body

    const updateEmp = await getRepository(Empresa).update(id, empresa);

    if (updateEmp.affected === 1) {
        const empresaUpdate = await getRepository(Empresa).findOne(id);
        return response.json(empresaUpdate);
    }

    return response.status(404).json({ message: 'Empresa não alterada' });
}

export const deleteEmpresa = async (request: Request, response: Response) => {
    let { id } = request.params

    const deleteEmp = await getRepository(Empresa).delete(id);

    if (deleteEmp.affected === 1) {
        return response.json({ message: 'Empresa removida' });
    }

    return response.status(404).json({ message: 'Empresa não removida' });
}