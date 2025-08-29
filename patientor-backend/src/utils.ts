import { z } from 'zod';
import { NewPatientEntry, Gender } from "./types";

export const newPatientEntrySchema = z.object({
  name: z.string(),
  dateOfBirth: z.iso.date(),
  ssn: z.string(),
  gender: z.enum(Gender),
  occupation: z.string()
});

export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  return newPatientEntrySchema.parse(object);
};
