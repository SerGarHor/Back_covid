import { Departamento as DepartamentoModel } from '../models/departamento';

export const findDepartamentos = async (departamento?: string): Promise<any[]> => {
  const query = departamento ? { nom_territorio: { $regex: `^${departamento}`, $options: 'i' } } : {};
  return await DepartamentoModel.find(query);
};