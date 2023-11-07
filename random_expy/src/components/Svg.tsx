import Circle from "./Circle"
import Line from "./Line"
import Text from "./Text"
import {  SvgRect, ViewBox, Point} from "./CommonInterfaces"
import { pipe, compose} from "./Utils"

import {useState, useRef, useEffect } from "react"

function getViewbox(p:SvgRect): ViewBox {
  let c:Point = { x:-1*p.width/2, y: -1*p.height/2}
  return {center: c, width: p.width, height: p.height}
}

function viewBoxString(v:ViewBox):string {
  return `${v.center.x} ${v.center.y} ${v.width} ${v.height}`
}

function getTime(date:Date):[number,number,number] {
  const [second, setSecond] = useState(date.getSeconds()+date.getMilliseconds())
  const [min, setMin] = useState(date.getMinutes())
  const [hour, setHour] = useState(date.getHours())
  let requestRef = useRef<number>();
  let previousTimeRef = useRef<number>();

  const animate = (time:number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      setSecond(prevCount => (prevCount + deltaTime * 0.001) % 60);
      setMin(prevCount => (prevCount + deltaTime * (0.001/60) % 60));
      setHour(prevCount => (prevCount + deltaTime * (0.001/(60*12)) % 12));
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, []); // Make sure the effect runs only once
  return [hour, min, second]
}

export default function Svg(p:SvgRect) {
  const vb =  pipe(p, 
              compose(getViewbox, viewBoxString))
  const [date, _] = useState(new Date())
  const  [hour, min, sec]= getTime(date)
  const rsec = `rotate(${(360/60)*sec})`
  const rmin= `rotate(${(360/60)*min})`
  const rhour= `rotate(${(360/12)*hour})`
  const dsec = Math.round(sec)
  const dmin = Math.round(min)
  const dhr= Math.round(hour)
  const disp= `${dhr}:${dmin}:${dsec}`
  
  return (
  <svg width={p.width} height={p.height} viewBox={vb}>
      <Text name="debug" location={{x:0, y:45}} description={disp}/>
      <Circle name="minute_marker" radius={90}/>
      <Circle name="hour_marker" radius={90}/>
      <g id="hour_hand" transform={rhour}>
        <Line name="hand" point1={{x:0, y:0}} point2={{x:0, y:-50}} />
        <Line name="hand hand--thick" point1={{x:0, y:-12}} point2={{x:0, y:-50}} />
     </g>

      <g id="minute_hand" transform={rmin}>
        <Line name="hand" point1={{x:0, y:0}} point2={{x:0, y:-80}} />
        <Line name="hand hand--thick" point1={{x:0, y:-12}} point2={{x:0, y:-80}} />
     </g>

      
      <g id="second_hand" transform={rsec}>
        <Line name="hand hand--second" point1={{x:0, y:12}} point2={{x:0, y:-80}} />
     </g>
      <Circle name="center" radius={3}/>
  </svg>
  )
}
      // <Text name="debug" location={{x:45, y:45}} description={`min : ${Math.round(min)}`}/>
      // <Text name="debug" location={{x:45, y:65}} description={`hour: ${Math.round(hour)}`}/>
      // <text className="debug" x="45" y="25">sec: {sec.toFixed(2)} </text>
      // <text className="debug" x="45" y="45">min: {min.toFixed(2)} </text>
      // <text className="debug" x="45" y="65">hr : {hour.toFixed(2)} </text>
