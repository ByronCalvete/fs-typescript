interface TotalProps {
  totalExercises: number;
}

const Total = (props: TotalProps) => {
  const { totalExercises } = props;

  return (
    <p>Number of exercises: {totalExercises}</p>
  )
}

export default Total;
