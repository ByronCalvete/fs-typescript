/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import express from 'express';
const app = express();
app.use(express.json());

import { isNotNumber } from './utils';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

app.get('/hello', (_req, res) => {
  res.send('<h1>Hello Full Stack!</h1>');
});

app.get('/bmi', (req, res) => {
  const { weight, height } = req.query;

  const validParameters: boolean = !isNotNumber(weight) && !isNotNumber(height);

  if (!weight || !height || !validParameters) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

  const bmi = calculateBmi(Number(height), Number(weight));

  const bmiData = {
    weight,
    height,
    bmi
  };

  res.status(200).json(bmiData);
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if(!daily_exercises || !target) {
    return res.status(400).send({ error: 'parameters missing' });
  }

  const validTarget: boolean = !isNotNumber(target);

  if (!validTarget) {
    return res.status(400).send({ error: 'malformatted parameters' });
  }

  for (let i = 0; i < daily_exercises.length; i++) {
    if (isNotNumber(daily_exercises[i])) {
      return res.status(400).send({ error: 'malformatted parameters' });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercises(daily_exercises, Number(target));
  return res.status(200).send({ result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
