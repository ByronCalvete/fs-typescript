import express from 'express';
const app = express();

import { isNotNumber } from './utils';
import { calculateBmi } from './bmiCalculator';

app.get('/hello', (_req, res) => {
  res.send('<h1>Hello Full Stack!</h1>');
});

app.get('/bmi', (req, res) => {
  const { weight, height } = req.query

  const validParameters: boolean = !isNotNumber(weight) && !isNotNumber(height)

  if (!weight || !height || !validParameters) {
    res.status(400).send({ error: 'malformatted parameters' })
  }

  const bmi = calculateBmi(Number(height), Number(weight))

  const bmiData = {
    weight,
    height,
    bmi
  }

  res.status(200).json(bmiData)
})

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
