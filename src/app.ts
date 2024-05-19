import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());

app.use(cors({
  methods: ['GET'],
}));
const PORT = process.env.PORT || 3000;
const DB = process.env.DB || 'mongodb://localhost:27017/covid'

mongoose.connect(DB).then(
  () => { },
).catch((err: Error) => {
  console.log('Mala conexión con Mongo ' + err)
  process.exit();
})

app.use(express.json());

import covidRoutes from './routes/covidRoutes';
app.use('/api', covidRoutes);

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
});