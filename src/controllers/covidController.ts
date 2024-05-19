import { Request, Response } from 'express';
import { getDepartamentosService } from '../services/departamentoService';

export const getDepartamentos = async (req: Request, res: Response) => {
  try {
    const { departamento } = req.query;
    const data = await getDepartamentosService(departamento?.toString());
    res.status(200).json(data);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    res.status(500).send('Error al obtener los datos.');
  }
};