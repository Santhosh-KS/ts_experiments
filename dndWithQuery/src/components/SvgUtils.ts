type UUID = {
  id:[number, number, number, number, number]
}

export type Geometry = {
  // type: 'cirlcle' | 'rectangle' | 'triangle'
  type: 'AND' | 'OR' | 'NOT' | "NAND" | "NOR" | "EXOR" | "EXNOR"
}


export type CircleProps = {
  id:number,
  center:PointProp,
  radius: number,
  display:DisplayProps,
  events?:MouseEventsProp,
  callback:(t:CircleProps)=>void
}

export type cp = Pick<PointProp, keyof PointProp> 

export type CallBack<T> = {
  callback:(t:T)=>void
}

export type PointProp = {
  x:number,
  y:number
}

export type ColorProp = {
  color:'red' | 'green' | 'blue' | 'lightblue' | 'gray' | 'black' | 'violet' | 'magenta' | 'cyan',
}

export type DisplayProps = {
  fill:ColorProp,
  stroke:ColorProp, 
  strokeWidth:number
  opacity?:number,
}

export type MouseEventsProp = {
  mouseDown:boolean,
}

