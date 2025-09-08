import type { Part } from "../types";

interface ContentProps {
  courseParts: Part[]
}

const Content = (props: ContentProps) => {
  const { courseParts } = props;
  
  return (
    <>
      {courseParts.map(coursePart => (
        <p key={coursePart.name}>{coursePart.name}: {coursePart.exercisesCount}</p>
      ))}
    </>
  )
}

export default Content;
