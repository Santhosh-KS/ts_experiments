import { useState, MouseEvent} from 'react'

type Position = {
    x: number,
    y: number,
    mouseDown:boolean,
    color?:string,
}

export default function DragAndDrop() {
   const [position, setPosition] = useState<Position>({ x:0, y:0, mouseDown:false, color:'red' })
   function adjustPosition(e:MouseEvent<SVGElement>, downEvent:boolean, color='yellow'):Position  {
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
        mouseDown:downEvent,
        color:color
      };
   }

  function handleMouseUp(e:MouseEvent<SVGElement>) {
    const pos = adjustPosition(e, false, 'red');
    setPosition(pos)
    // printEvent(e)
  }

  function handleMouseDown(e:MouseEvent<SVGElement>) {
    const pos = adjustPosition(e, true);
    setPosition(pos)
    // console.log(position)
    // printEvent(e)
  }

  function handleMouseMove(e:MouseEvent<SVGElement>) {
    if (position.mouseDown) {
      handleMouseDown(e)
      const pos = adjustPosition(e, true);
      setPosition(pos)
      // console.log(position)
    }
  }

  return (
    <svg id="mySvg"
        viewBox="-1 -1 2 2" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{background: "indigo"}}>
          <circle 
          cx={position.x}
          cy={position.y}
          onMouseUp={(e)=>handleMouseUp(e)}
          onMouseDown={(e)=>handleMouseDown(e)}
          onMouseMove={(e)=>handleMouseMove(e)}
          r="10%" 
          fill={position.color} />
    </svg>
  )
}

function printEvent(e:React.MouseEvent<SVGElement>) {
  // const p = e.currentTarget.tagName
  let svg  = document.querySelector('#mySvg') as SVGSVGElement
  let pt = svg.createSVGPoint()
  pt.y = e.clientY
  pt.x = e.clientX
  let t = svg.getScreenCTM() as DOMMatrix
  pt = pt.matrixTransform(t.inverse())
  console.log(pt)
}


          /* <circle 
          cx={position.x + 0.7}
          cy={position.y + 0.7}
          onMouseUp={(e)=>handleMouseUp(e)}
          onMouseDown={(e)=>handleMouseDown(e)}
          onMouseMove={(e)=>handleMouseMove(e)}
          r="8%" 
          fill="blue" /> */
