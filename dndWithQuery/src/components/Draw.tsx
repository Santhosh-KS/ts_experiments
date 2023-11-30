import { useState } from 'react'
import Grid from '../components/Grid'

type WindowProp = {
  width:number,
  height:number,
}

export default function Draw() {

  const [windowSize, setWindowSize] = useState<WindowProp>({width:150, height:100})

        /* width={windowSize.width.toString()+"%"}
        height={windowSize.height.toString()+"%"} */
  return (
    <svg id="mySvg"
      alignmentBaseline="middle"
        viewBox="-1 -1 2 2" 
        xmlns="http://www.w3.org/2000/svg"
        >
      <Grid name="left" width={1} height={1} stroke={{color:'gray', width:0.08, opacity:10}} angle={45} /> 
      <Grid name="right" width={1} height={1} stroke={{color:'gray', width:0.08, opacity:10}} angle={-45} /> 
      <Grid name="small" width={1} height={1} stroke={{color:'green', width:0.08, opacity:20}} angle={0} /> 
      <Grid name="big" width={5} height={5} stroke={{color:'green', width:0.1, opacity:30}} angle={0}/> 
      <circle r="0.5%" opacity="30%"/>
      <g>
      <path d="M 0 0, h .2, q .2 .1, .2 .5 h -0.2 "
        stroke="black" strokeWidth="0.01" strokeLinecap="butt" strokeLinejoin="round"
        fill="none"
        vectorEffect="fixed-position"
        transform='scale(0.25)'
      />
      </g>
    </svg>
  )
}


      /* <path d="M 0 0, H .2, Q .4 .25, .2 .5 h -0.2z "
        stroke="black" strokeWidth="0.01" strokeLinecap="round"
        fill="none"
      /> */
