import express, { Response } from 'express';
import diagnosesService from '../services/diagnosesService';
import { DiagnosesType } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<DiagnosesType[]>) => {
  return res.send(diagnosesService.getDiagnoses());
});

export default router;
