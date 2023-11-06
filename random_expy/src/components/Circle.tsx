import { Circle as circle } from "./CommonInterfaces"
import {stringify} from "./Utils"

type NamedCircle = circle & {
  name:string
  pathLength:number
}

export default function Circle (
  { name="default", 
    radius=10,
    center={x:0, y:0},
    pathLength=60
  }:NamedCircle) {
  // let r = stringify(radius)
  let pl = stringify(pathLength)
    return (
    <circle 
      r={radius} 
      cx={center.x} 
      cy={center.y} 
      className={name} 
      pathLength={pl}
    />);
}
