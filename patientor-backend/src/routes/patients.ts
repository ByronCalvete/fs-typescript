import express, { Response } from 'express';
import patientService from '../services/patientService';
import { PatientsTypeWithoutSsn } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<PatientsTypeWithoutSsn[]>) => {
  res.send(patientService.getPatientsWithoutSsn());
});

export default router;
