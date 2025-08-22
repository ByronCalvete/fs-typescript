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
  gender: string;
  occupation: string;
}

export type PatientTypeWithoutSsn = Omit<PatientType, 'ssn'>;
export type PatientTypeWithoutId = Omit<PatientType, 'id'>;
