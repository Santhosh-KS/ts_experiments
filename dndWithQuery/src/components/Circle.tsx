import { MouseEvent, useState, WheelEvent } from "react";
import { CircleProps } from "./SvgUtils";

export default function Circle(props:CircleProps) {
 
  const [circleProps, setCircleProps] = useState<CircleProps>(props)

  function handleWheelEvent(e:WheelEvent<SVGElement>) {
    if (e.shiftKey) {
      // TODO: Keypath and case path usecases
      const p:CircleProps = { 
        id:circleProps.id,
        center:{x:circleProps.center.x, y:circleProps.center.y},
        radius:circleProps.radius,
        display:circleProps.display,
        events:circleProps.events,
        callback:circleProps.callback,
      }
       
      if (e.deltaY <= 0) {
        p.radius = Math.min(p.radius+0.1, 10)
      } else {
        p.radius = Math.max(p.radius-0.1, 2)
      }
      setCircleProps(p)
      circleProps.callback(p)
    }
  }

  function adjustCircleProps(e:MouseEvent<SVGElement>,
    downEvent:boolean):CircleProps {
      let svg  = document.querySelector('#mySvg') as SVGSVGElement
      let pt = svg.createSVGPoint()
      pt.x = e.clientX
      pt.y = e.clientY
      let t = svg.getScreenCTM() as DOMMatrix
      pt = pt.matrixTransform(t.inverse())
      // console.log(pt)
      const rt = {
        id:circleProps.id,
        center:{x:pt.x, y:pt.y},
        radius:circleProps.radius,
        events:{mouseDown:downEvent},
        display:circleProps.display,
        callback:circleProps.callback,
      };
      circleProps.callback(rt)
    return rt;
  }

  function handleMouseUp(e:MouseEvent<SVGElement>) {
    const pos = adjustCircleProps(e, false);
    pos.display.opacity = 100 
    setCircleProps(pos)
  }

  function handleMouseDown(e:MouseEvent<SVGElement>) {
    const pos = adjustCircleProps(e, true);
    pos.display.opacity = 40 
    setCircleProps(pos)
  }

  function handleMouseMove(e:MouseEvent<SVGElement>) {
    if (circleProps.events?.mouseDown) {
      handleMouseDown(e)
      const pos = adjustCircleProps(e, true);
      setCircleProps(pos)
    }
  }

  return(
    <g
      onMouseUp={(e)=>handleMouseUp(e)}
      onMouseDown={(e)=>handleMouseDown(e)}
      onMouseMove={(e)=>handleMouseMove(e)} 
      onWheel={(e)=>handleWheelEvent(e)} 
    >
    <circle 
      cx={circleProps.center.x}
      cy={circleProps.center.y}
      r={circleProps.radius.toString()+"%"}
      fill={circleProps.display.fill.color} 
      fillRule="nonzero"
      opacity={circleProps.display.opacity?.toString()+"%"}
    />
    <text 
        x={circleProps.center.x-0.01}
        y={circleProps.center.y+0.01}
        fontFamily='Vollkorn'
        fontSize={"0.03"} 
        pointerEvents="none"
        fill="#000000">
        {circleProps.id.toString()}
    </text>
    </g>
  )
}
