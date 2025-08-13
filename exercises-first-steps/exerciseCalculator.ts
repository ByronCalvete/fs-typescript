import { isNotNumber } from "./utils";

interface resultValues {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface CorrectValues {
  values: number[];
}

const parseArguments = (args: string[]): CorrectValues => {
  if (args.length < 4) throw new Error('not enough arguments');

  const myArgs: number[] = [];
  const mySliced = args.slice(2)

  for (let i = 0; i < mySliced.length; i++) {
    if(!isNotNumber(mySliced[i])) {
      myArgs.push(Number(mySliced[i]))
    } else {
      throw new Error('Provided values were not numbers!')
    }
  }

  return {
    values: myArgs
  }
}

const calculateExercises = (dailyHours: number[], targetHours: number): resultValues => {
  const numberOfDays = dailyHours.length;
  const totalHours = dailyHours.reduce((accu, num) => accu + num, 0);
  const trainingDays = dailyHours.filter(day => day !== 0);
  const average = totalHours / numberOfDays;
  const ratingHours = dailyHours.map(day => day >= 2 ? 3 : 1);
  const rating = (ratingHours.reduce((accu, num) => accu + num, 0)) / numberOfDays;

  return {
    periodLength: numberOfDays,
    trainingDays: trainingDays.length,
    success: average > targetHours,
    rating: rating,
    ratingDescription: rating >= targetHours ? 'Yeah you are the best' : 'Please, you can do better',
    target: targetHours,
    average: average
  }
}

try {
  const { values } = parseArguments(process.argv);
  const dailyHours: number[] = values.slice(1)
  const targetHours: number = values[0]
  console.log(calculateExercises(dailyHours, targetHours))
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage)
}
