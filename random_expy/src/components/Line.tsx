import {Line as line} from "./CommonInterfaces"

type NamedLine = line & {
  name:string
  pathLength:number
}

export default function Line( {
  name="default",
  point1,
  point2,
}:NamedLine) {
  return (
   <line 
      x1={point1.x}
      y1={point1.y}
      x2={point2.x}
      y2={point2.y}
      className={name}
   /> )
}
