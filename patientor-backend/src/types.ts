import { z } from 'zod';
import { newPatientEntrySchema } from './utils';

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export interface DiagnosesType {
  code: string;
  name: string;
  latin?: string;
}
export interface PatientType {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type PatientTypeWithoutSsn = Omit<PatientType, 'ssn'>;
export type NewPatientEntry = z.infer<typeof newPatientEntrySchema>;
