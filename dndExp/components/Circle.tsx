import { MouseEvent, useState, WheelEvent } from "react";

type CircleProps = {
    x?: number,
    y?: number,
    r: number,
    mouseDown?:boolean,
    color:'red' | 'green' | 'blue' | 'lightblue' | 'gray' | 'black' | 'violet' | 'magenta' | 'cyan',
    opacity?:number
}

export default function Circle(props:CircleProps={ x:0, y:0, r:5, mouseDown:false, color:'red', opacity:100 }) {
   const [position, setCircleProps] = useState<CircleProps>(props)

  function handleWheelEvent(e:WheelEvent<SVGElement>) {
    if (e.shiftKey) {
      // TODO: Keypath and case path usecases
      const p:CircleProps = {x:position.x, 
        y:position.y, r:position.r, 
        mouseDown:position.mouseDown, 
        color:position.color, opacity:position.opacity} 
      if (e.deltaY <= 0) {
        p.r = Math.min(p.r+0.1, 10)
      } else {
        p.r = Math.max(p.r-0.1, 2)
      }
      setCircleProps(p)
    }
  }
  function adjustCircleProps(e:MouseEvent<SVGElement>, 
    downEvent:boolean,
    opacity=100):CircleProps  {
      let svg  = document.querySelector('#mySvg') as SVGSVGElement
      let pt = svg.createSVGPoint()
      pt.x = e.clientX
      pt.y = e.clientY
      let t = svg.getScreenCTM() as DOMMatrix
      pt = pt.matrixTransform(t.inverse())
      console.log(pt)
      return {
        x:pt.x,
        y:pt.y,
        r: position.r,
        mouseDown:downEvent,
        color:position.color,
        opacity:opacity
      };
  }

  function handleMouseUp(e:MouseEvent<SVGElement>) {
    const pos = adjustCircleProps(e, false, 100);
    setCircleProps(pos)
  }

  function handleMouseDown(e:MouseEvent<SVGElement>) {
    const pos = adjustCircleProps(e, true, 50);
    setCircleProps(pos)
  }

  function handleMouseMove(e:MouseEvent<SVGElement>) {
    if (position.mouseDown) {
      handleMouseDown(e)
      const pos = adjustCircleProps(e, true, 40);
      setCircleProps(pos)
    }
  }

  return(
    <circle 
      cx={position.x}
      cy={position.y}
      onMouseUp={(e)=>handleMouseUp(e)}
      onMouseDown={(e)=>handleMouseDown(e)}
      onMouseMove={(e)=>handleMouseMove(e)}
      onWheel={(e)=>handleWheelEvent(e)}
      r={position.r.toString()+"%"}
      fill={position.color} 
      opacity={position.opacity?.toString()+"%"}
    />
  )
}
