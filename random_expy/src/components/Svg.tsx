import Circle from "./Circle"
import {  SvgRect, ViewBox, Point, stringify } from "./CommonInterfaces"


function getViewbox(p:SvgRect): ViewBox {
  let c:Point = { x:-1*p.width/2, y: -1*p.height/2}
  return {center: c, width: p.width, height: p.height}
}

function viewBoxString(v:ViewBox):string {
  return `${v.center.x} ${v.center.y} ${v.width} ${v.height}`
}

export default function Svg(p:SvgRect) {
  const w = stringify(p.width)
  const h = stringify(p.height)
  const vb = viewBoxString(getViewbox(p))
  return (
  <svg width={w} height={h} viewBox={vb}>
      <Circle />
  </svg>
   )
}
