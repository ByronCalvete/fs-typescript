interface resultValues {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
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
    ratingDescription: rating > targetHours ? 'Yeah you are the best' : 'Please, you can do better',
    target: targetHours,
    average: average
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
