import type { CoursePart } from "../types";

interface PartProps {
  part: CoursePart;
}

const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`)
}

const Part = (props: PartProps) => {
  const { part } = props;
  switch (part.kind) {
    case 'basic':
      return (
        <div className='container'>
          <strong>{part.name} {part.exerciseCount}</strong>
          <br/>
          <em>{part.description}</em>
        </div>
      );
    case 'group':
      return (
        <div className='container'>
          <strong>{part.name} {part.exerciseCount}</strong>
          <br/>
          <em>project exercises {part.groupProjectCount}</em>
        </div>
      );
    case 'background':
      return (
        <div className='container'>
          <strong>{part.name} {part.exerciseCount}</strong>
          <br/>
          <em>{part.description}</em>
          <br/>
          submit to {part.backgroundMaterial}
        </div>
      )
    case 'special':
      return (
        <div className='container'>
          <strong>{part.name} {part.exerciseCount}</strong>
          <br/>
          <em>{part.description}</em>
          <br/>
          required skills: {part.requirements.join(', ')}
        </div>
      )
    default:
      return assertNever(part);
  }
}

export default Part;
