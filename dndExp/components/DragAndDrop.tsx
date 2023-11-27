import { useState, WheelEvent} from 'react'
import Circle from '../components/Circle'
import Grid from '../components/Grid'

type WindowProp = {
  width:number,
  height:number,
}

export default function DragAndDrop() {
   const [windowSize, setWindowSize] = useState<WindowProp>({width:100, height:0})
 
  function handleWheelEvent(e:WheelEvent<SVGSVGElement>) {
    if (e.ctrlKey) {
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
    }
  }

  return (
    <svg id="mySvg"
        width={(windowSize.width).toString()+"%"}
        height={windowSize.height.toString()+"%"}
        viewBox="-1 -1 2 2" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      onWheel={(e)=>handleWheelEvent(e)}
        >
      <Grid name="left" width={1} height={1} stroke={{color:'gray', width:0.08, opacity:10}} angle={45} /> 
      <Grid name="right" width={1} height={1} stroke={{color:'gray', width:0.08, opacity:10}} angle={-45} /> 
      <Grid name="small" width={1} height={1} stroke={{color:'green', width:0.08, opacity:20}} angle={0} /> 
      <Grid name="big" width={4} height={4} stroke={{color:'green', width:0.1, opacity:30}} angle={0}/> 
      <circle id="origin" r="0.5%" fill='lightblue' stroke='violet' strokeWidth="0.1%" opacity="30%"/>
      <Circle r={5}  color={'red'}  />
      <Circle r={3}  color={'green'} />
      <Circle x={0.5} y={0.1} r={3}  color={'violet'} />
    </svg>
  )
}

          /* <pattern id="leftDiagonalGrid" fill="lightblue" width="1%" height="1%" patternUnits="userSpaceOnUse">
            <path d="M-1 -1 L 1 1" fill='none' strokeWidth="0.08%" stroke={'gray'} strokeLinecap='round' strokeOpacity="30%"/>
          </pattern>
          <rect x="-1" y="-1" width="100%" height="100%" fill="url(#leftDiagonalGrid)"/>

        <pattern id="bigGrid" width="4%" height="4%" patternUnits="userSpaceOnUse">
          <path d="M-1 0 L 1 0" fill='none' strokeWidth="0.08%" stroke={strokeColor} strokeLinecap='round'/>
          <path d="M0 1 L 0 -1" fill='none' strokeWidth="0.08%" stroke={strokeColor} strokeLinecap='round'/>
        </pattern>
        <rect x="-1" y="-1" width="100%" height="100%" fill="url(#bigGrid)"/> */
