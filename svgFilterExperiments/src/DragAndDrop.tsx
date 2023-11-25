import { useState, MouseEvent, WheelEvent} from 'react'

type Position = {
    x: number,
    y: number,
    mouseDown:boolean,
    color?:string,
    opacity?:string
}
type WindowProp = {
  width:number,
  height:number,
}

export default function DragAndDrop() {
   const [position, setPosition] = useState<Position>({ x:0, y:0, mouseDown:false, color:'red', opacity:"100%" })
   const [windowSize, setWindowSize] = useState<WindowProp>({width:25, height:25})
   function adjustPosition(e:MouseEvent<SVGElement>, downEvent:boolean, color='blue', opacity="100%"):Position  {
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
        color:color,
        opacity:opacity
      };
   }
 

  function handleMouseUp(e:MouseEvent<SVGElement>) {
    const pos = adjustPosition(e, false, 'red', '100%');
    setPosition(pos)
    // printEvent(e)
  }

  function handleMouseDown(e:MouseEvent<SVGElement>) {
    const pos = adjustPosition(e, true,'red', '50%');
    setPosition(pos)
    // console.log(position)
    // printEvent(e)
  }

  function handleMouseMove(e:MouseEvent<SVGElement>) {
    if (position.mouseDown) {
      handleMouseDown(e)
      const pos = adjustPosition(e, true, 'blue', '40%');
      setPosition(pos)
      // console.log(position)
    }
  }

  function handleWheelEvent(e:WheelEvent<SVGSVGElement>) {
    /* const zoomIn = 10
    if e.deltaY >= 0 {
      windowSize.delta.x + 10  
    } else {

    } */
    const ws: WindowProp = {width:windowSize.width, height:windowSize.height}
    // console.log(e.deltaY)
    if (e.deltaY <= 0) {
      ws.width = Math.min(ws.width + 10, 200)
      ws.height = Math.min(ws.height+10, 200)
    } else {
      ws.width = Math.max(ws.width - 10, 50)
      ws.height = Math.max(ws.height - 10, 50)
    }
    setWindowSize(ws)
    // console.log(ws)
  }

        // style={{background: "indigo"}}>

            /* <pattern id="grid" width="2%" height="2%" >
              <rect width="100" height="100" fill="url(#smallGrid)"/>
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="lightblue" stroke-width="1"/>
        style={{background: "lightgray"}}>
          <path d="M-1 0 L 1 0" fill='none' strokeWidth="0.05%" stroke='green' strokeLinecap='round'/>
        <rect x="-1" y="-1" width="100%" height="100%" fill="url(#smallGrid)"/>
            </pattern> */

  const strokeColor = 'green'
  return (
    <svg id="mySvg"
        width={windowSize.width.toString()+"%"}
        height={windowSize.height.toString()+"%"}
        viewBox="-1 -1 2 2" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      onWheel={(e)=>handleWheelEvent(e)}
        >

          <pattern id="leftDiagonalGrid" fill="lightblue" width="1%" height="1%" patternUnits="userSpaceOnUse">
            <path d="M-1 -1 L 1 1" fill='none' strokeWidth="0.08%" stroke={'gray'} strokeLinecap='round' strokeOpacity="30%"/>
          </pattern>
          <rect x="-1" y="-1" width="100%" height="100%" fill="url(#leftDiagonalGrid)"/>

        <pattern id="smallGrid" width="1%" height="1%" patternUnits="userSpaceOnUse">
          <path d="M-1 0 L 1 0" fill='none' strokeWidth="0.05%" stroke={strokeColor} strokeLinecap='round' strokeOpacity="80%"/>
          <path d="M0 1 L 0 -1" fill='none' strokeWidth="0.05%" stroke={strokeColor} strokeLinecap='round' strokeOpacity="80%"/>
        </pattern>
        <pattern id="bigGrid" width="4%" height="4%" patternUnits="userSpaceOnUse">
          <path d="M-1 0 L 1 0" fill='none' strokeWidth="0.08%" stroke={strokeColor} strokeLinecap='round'/>
          <path d="M0 1 L 0 -1" fill='none' strokeWidth="0.08%" stroke={strokeColor} strokeLinecap='round'/>
        </pattern>
        <rect x="-1" y="-1" width="100%" height="100%" fill="url(#smallGrid)"/>
        <rect x="-1" y="-1" width="100%" height="100%" fill="url(#bigGrid)"/>
        <circle id="origin" r="0.5%" fill='black' stroke='yellow' strokeWidth="0.1%" opacity="30%"/>
          <circle 
            cx={position.x}
            cy={position.y}
            onMouseUp={(e)=>handleMouseUp(e)}
            onMouseDown={(e)=>handleMouseDown(e)}
            onMouseMove={(e)=>handleMouseMove(e)}
            r="5%" 
            fill={position.color} 
            opacity={position.opacity}
          />

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
/* <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightblue" stroke-width="0.5"/>
    </pattern>
    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#smallGrid)"/>
      <path d="M 100 0 L 0 0 0 100" fill="none" stroke="lightblue" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#grid)" />
</svg><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="lightblue" stroke-width="0.5"/>
    </pattern>
    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
      <rect width="100" height="100" fill="url(#smallGrid)"/>
      <path d="M 100 0 L 0 0 0 100" fill="none" stroke="lightblue" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#grid)" />
</svg> */

          /* <circle 
          cx={position.x + 0.7}
          cy={position.y + 0.7}
          onMouseUp={(e)=>handleMouseUp(e)}
          onMouseDown={(e)=>handleMouseDown(e)}
          onMouseMove={(e)=>handleMouseMove(e)}
          r="8%" 
          fill="blue" /> */
