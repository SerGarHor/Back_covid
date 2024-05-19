import { Router } from 'express';
import { getDepartamentos } from '../controllers/covidController';

const router = Router();

router.get('/covid-data', getDepartamentos);

export default router;
