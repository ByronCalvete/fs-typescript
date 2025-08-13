import { isNotNumber } from "./utils";

interface CorrectValues {
  height: number;
  weight: number;
}

const parseArguments = (args: string[]): CorrectValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNotNumber(args[2]) && !isNotNumber(args[3])) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!')
  }
}

const calculateBmi = (height: number, weight: number): string => {
  const bmi = (weight) / ((height/100) ** 2)
  console.log(`The BMI are ${bmi}`)

  if (bmi < 25) {
    return 'Normal range'
  } else if (bmi < 30) {
    return 'Overweight range'
  } else if (bmi >= 30) {
    return 'Obese range'
  }
}

try {
  const { height, weight } = parseArguments(process.argv);
  console.log(calculateBmi(height, weight))
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage)
}
