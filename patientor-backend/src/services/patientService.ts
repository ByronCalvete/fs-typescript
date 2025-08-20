import patients from "../../data/patients";

import { PatientType, PatientsTypeWithoutSsn } from "../types";

const getPatients = (): PatientType[] => {
  return patients;
};

const getPatientsWithoutSsn = (): PatientsTypeWithoutSsn[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

export default {
  getPatients,
  getPatientsWithoutSsn
};
