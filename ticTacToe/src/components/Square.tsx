import { MouseEvent } from "react";

export default function Square(props:{num:string, onSquareClick:()=>void}) {
  return (<button 
    className="square"
    onClick={()=>props.onSquareClick()}
    >
    {props.num}
  </button>);
}
