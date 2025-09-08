import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const courseName = 'Half Stack application development';
  const courseParts = [
    {
      name: 'Fundamentals',
      exercisesCount: 10
    },
    {
      name: 'Using props to pass data',
      exercisesCount: 7
    },
    {
      name: 'Deeper type usage',
      exercisesCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exercisesCount, 0);

  return (
    <div>
      <Header name={courseName} />
      <Content courseParts={courseParts} />
      <Total totalExercises={totalExercises} />
    </div>
  )
}

export default App;
