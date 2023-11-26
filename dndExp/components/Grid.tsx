export type RectProps = {
  /* parentId:string,
  id:string */
  width:number,
  height:number,
}

export type GridProps = {
  name:string
  width:number,
  height:number,
  angle?:number
  stroke:{
    width:number,
    color:'red' | 'green' | 'blue' | 'lightblue' | 'gray' | 'black' | 'violet' | 'magenta' | 'cyan',
    opacity:number
  },
}

export default function Grid(props:GridProps) {
  return (
    <>
      <pattern id={props.name}
        width={props.width.toString()+"%"} 
        height={props.height.toString()+"%"}
        patternUnits="userSpaceOnUse"
      >
        <path d="M-1 0 L 1 0" 
          fill='none' 
          strokeWidth={props.stroke.width.toString()+"%"}
          stroke={props.stroke.color}
          strokeLinecap='round' 
          strokeOpacity={props.stroke.opacity.toString()+"%"}/>
        <path d="M0 1 L 0 -1" 
          fill='none' 
          strokeWidth={props.stroke.width.toString()+"%"}
          stroke={props.stroke.color}
          strokeLinecap='round' 
          strokeOpacity={props.stroke.opacity.toString()+"%"}/>
      </pattern>
      <rect x="-1.5" y="-1.5"
        width="150%" height="150%"
        fill={`url(#${props.name})`} 
        transform={`rotate(${props.angle})`} />
    </>
  )
}
