import { Circle as circle, stringify } from "./CommonInterfaces"

export default function Circle ({radius=50, center={x:0, y:0}}:circle) {
  let r = stringify(radius)
    return (<circle r={r} cx={center.x} cy={center.y} fill="red" className="minute_marker" pathLength="60" />);
}
