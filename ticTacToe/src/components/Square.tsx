import { MouseEvent } from "react";

export default function Square(props:{num:string, onSquareClick:(e:MouseEvent)=>void}) {
  return (<button 
    className="square"
    onClick={(e)=>props.onSquareClick(e)}
    >
    {props.num}
  </button>);
}
