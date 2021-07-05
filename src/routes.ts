import { Router, Response, Request } from "express";
import { deleteEmpresa, getEmpresa, saveEmpresa, updateEmpresa } from "./controller/EmpresaController";
import { deleteFuncionario, getFuncionario,saveFuncionario, updateFuncionario } from "./controller/FuncionarioController";

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: "Hello World" })
});

routes.get('/funcionario',getFuncionario)
routes.post('/funcionario',saveFuncionario)
routes.put('/funcionario/:id',updateFuncionario)
routes.delete('/funcionario/:id',deleteFuncionario)

routes.get('/empresa',getEmpresa)
routes.post('/empresa',saveEmpresa)
routes.put('/empresa/:id',updateEmpresa)
routes.delete('/empresa/:id',deleteEmpresa)


export default routes ;