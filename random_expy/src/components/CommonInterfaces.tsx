
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

function stringify<T>(value:T) { return JSON.stringify(value)}

export { Rectangle, Point, SvgRect, ViewBox, Circle, stringify} 
