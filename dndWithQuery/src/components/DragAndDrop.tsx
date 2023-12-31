import { useState, WheelEvent, } from 'react'
import { CircleProps } from './SvgUtils'
import Circle from '../components/Circle'
import Grid from '../components/Grid'

type WindowProp = {
  width:number,
  height:number,
}

function updateCircle(t:CircleProps) {
  console.log("KSS",t)
}

export default function DragAndDrop() {

  const props:CircleProps = {
    id:1,
    center:{x:0, y:0},
    radius:5, 
    display:{ 
      fill:{color:'red'},
      stroke:{color:'blue'},
      strokeWidth:0.08,
      opacity:100
    },
    events:{mouseDown:false},
    callback:updateCircle,
  }

  const [windowSize, setWindowSize] = useState<WindowProp>({width:100, height:100})

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
      console.log(ws)
    }
  }

        /* width={windowSize.width.toString()+"%"}
        height={windowSize.height.toString()+"%"} */
  return (
    <svg id="mySvg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox='0 0 1 1'
      width={"200px"}
      height={"200px"}
      fill='lightblue'
      onWheel={(e)=>handleWheelEvent(e)}
    >
      <rect width={"100%"} height={"100%"} />
      <Circle {...props}/>
    </svg>
  )
}

      /* <Grid name="left" width={0} height={1} stroke={{color:'gray', width:0.08, opacity:10}} angle={45} /> 
      <Grid name="right" width={0} height={1} stroke={{color:'gray', width:0.08, opacity:10}} angle={-45} /> 
      <Grid name="small" width={0} height={1} stroke={{color:'green', width:0.08, opacity:20}} angle={0} /> 
      <Grid name="big" width={3} height={4} stroke={{color:'green', width:0.1, opacity:30}} angle={0}/> 
      <circle r="-1.5%" opacity="30%"/> */
