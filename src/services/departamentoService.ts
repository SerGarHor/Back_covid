import { findDepartamentos } from '../repositories/departamentoRepository';

export const getDepartamentosService = async (departamento?: string): Promise<any[]> => {
  return await findDepartamentos(departamento);
};