import diagnoses from "../../data/diagnoses";

import { DiagnosesType } from "../types";

const getDiagnoses = (): DiagnosesType[] => {
  return diagnoses;
};

export default { getDiagnoses };
