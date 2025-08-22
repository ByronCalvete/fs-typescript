import patients from "../../data/patients";
import { v1 as uuid } from 'uuid';

import { PatientType, PatientTypeWithoutSsn, PatientTypeWithoutId } from "../types";

const getPatients = (): PatientType[] => {
  return patients;
};

const getPatientsWithoutSsn = (): PatientTypeWithoutSsn[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (entry: PatientTypeWithoutId): PatientType => {
  const newPatient = {
    id: uuid(),
    ...entry
  };

  patients.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getPatientsWithoutSsn,
  addPatient
};
