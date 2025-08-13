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

console.log(calculateBmi(180, 74))
