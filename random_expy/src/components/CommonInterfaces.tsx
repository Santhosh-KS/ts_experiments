// type Stringify<T> = {
//   [K in keyof T]: T[K] extends number | string ? `${T[K]}` : never
// }[keyof T]

interface Rectangle {
  width:number
  height:number
}

type SvgRect = Rectangle 

interface Point {
  x:number
  y:number
}

interface ViewBox {
  center:Point
  width:number
  height:number
}

interface Circle {
  center:Point
  radius:number
}

interface Line {
  point1:Point
  point2:Point
}


interface TextTag {
  description:string
  location:Point
}


export { Rectangle, Point, SvgRect, ViewBox, Circle, Line, TextTag } 
