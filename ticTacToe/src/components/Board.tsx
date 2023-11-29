import { useState, MouseEvent } from "react";

import Square from "./Square";

export default function Board() {
  const [sqrs, setSqrs] = useState(Array<string>(9).fill(""))
  function handleClick(e:MouseEvent) {
    console.log("clicked", e.type)
    const nextSquares = sqrs.slice();
    nextSquares[0] = "X";
    setSqrs(nextSquares);
  }

  return (
    <>
     <div className="board-row">
        <Square num={sqrs[0]} onSquareClick={handleClick}/>
        <Square num={sqrs[1]} onSquareClick={handleClick}/>
        <Square num={sqrs[2]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square num={sqrs[3]} onSquareClick={handleClick}/>
        <Square num={sqrs[4]} onSquareClick={handleClick}/>
        <Square num={sqrs[5]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Square num={sqrs[6]} onSquareClick={handleClick}/>
        <Square num={sqrs[7]} onSquareClick={handleClick}/>
        <Square num={sqrs[8]} onSquareClick={handleClick}/>
      </div>
    </>
  )
  // return <button className="square">X</button>;
}
