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

        /* onMouseUp={(e)=>handleMouseUp(e)}
        onMouseDown={(e)=>handleMouseDown(e)}
        onMouseMove={(e)=>handleMouseMove(e)} 
      viewBox="0.1 0.1 1.1 1" 
        onWheel={(e)=>handleWheelEvent(e)}  */
  const scale="scale(0.1)"
  return(
    <>
    <svg
      id="svg1"
      fill='blue'
      transform="scale(0.1) translate(0.1, 0.1)"
      xmlns="http://www.w3.org/2000/svg"
        opacity={"40%"}
    >
      <rect width={"100%"} height={"100%"} />
    </svg>

    <svg
      id="svg2"
      fill='red'
      transform={"scale(0.1) translate(1.1, 0.1)"}
      xmlns="http://www.w3.org/2000/svg"
        opacity={"40%"}
    >
      <rect width={"100%"} height={"100%"} />
    </svg>

    <svg
      id="svg2"
      fill='red'
      transform="scale(0.1) translate(0.1, 1.1)"
      xmlns="http://www.w3.org/2000/svg"
        opacity={"40%"}
    >
      <rect width={"100%"} height={"100%"} />
    </svg>
    </>
  )
}
