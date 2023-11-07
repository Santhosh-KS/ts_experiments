import {TextTag as textTag} from "./CommonInterfaces"

type NamedLine = textTag & {
  name:string
}

export default function Text ( {
  name="default",
  description="some default text",
  location={x:0, y:0}
}:NamedLine) {
  return (
      <text x={location.x} y={location.y} className={name}>
      {description}
    </text>
  )
}
