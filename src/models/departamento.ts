import { Schema, model } from 'mongoose';

const departamentoSchema = new Schema({
  fecha_aplicacion: String,
  año: String,
  cod_territorio: String,
  nom_territorio: String,
  cantidad_dosis_aplicadas: String,
  fecha_corte: String,
}, { timestamps: true });

export const Departamento = model('Departamento', departamentoSchema);