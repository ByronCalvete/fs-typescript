import type { CoursePart } from "../types";

interface ContentProps {
  courseParts: CoursePart[]
}

const assertNever = (value: never): never => {
  throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`)
}

const Content = (props: ContentProps) => {
  const { courseParts } = props;
  
  return (
    <>
      {/* {courseParts.map(part => (
        <p key={part.name}>{part.name}: {part.exerciseCount}</p>
      ))} */}
      {courseParts.forEach(part => {
        switch (part.kind) {
          case 'basic':
            console.log(part.name, part.description, part.exerciseCount);
            break;
          case 'group':
            console.log(part.name, part.exerciseCount, part.groupProjectCount);
            break;
          case 'background':
            console.log(part.name, part.exerciseCount, part.description, part.backgroundMaterial);
            break;
          default:
            return assertNever(part);
        }
      })}
    </>
  )
}

export default Content;
