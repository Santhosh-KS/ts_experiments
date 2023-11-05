import Circle from "./Circle"
import Line from "./Line"
import {  SvgRect, ViewBox, Point} from "./CommonInterfaces"


function getViewbox(p:SvgRect): ViewBox {
  let c:Point = { x:-1*p.width/2, y: -1*p.height/2}
  return {center: c, width: p.width, height: p.height}
}

function viewBoxString(v:ViewBox):string {
  return `${v.center.x} ${v.center.y} ${v.width} ${v.height}`
}

export default function Svg(p:SvgRect) {
  // const w = stringify(p.width)
  // const h = stringify(p.height)
  const vb = viewBoxString(getViewbox(p))
  return (
  <svg width={p.width} height={p.height} viewBox={vb}>
      <Circle name="minute_marker" radius={90}/>
      <Circle name="hour_marker" radius={90}/>
      <g id="hour_hand">
        <Line name="hand" point1={{x:0, y:0}} point2={{x:0, y:-50}} />
        <Line name="hand hand--thick" point1={{x:0, y:-12}} point2={{x:0, y:-50}} />
     </g>
  </svg>
   )
}
