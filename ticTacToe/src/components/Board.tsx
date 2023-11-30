import { useState } from "react";

import Square from "./Square";

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [sqrs, setSqrs] = useState(Array<string>(9).fill(""))

  const winner = calculateWinner(sqrs);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i:number) {
    console.log(sqrs[i].length)
    if (sqrs[i].length !== 0 ||  calculateWinner(sqrs)) { return }
    const nextSquares = sqrs.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSqrs(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
     <div className="status">{status}</div>
     <div className="board-row">
        <Square num={sqrs[0]} onSquareClick={()=>handleClick(0)}/>
        <Square num={sqrs[1]} onSquareClick={()=>handleClick(1)}/>
        <Square num={sqrs[2]} onSquareClick={()=>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square num={sqrs[3]} onSquareClick={()=>handleClick(3)}/>
        <Square num={sqrs[4]} onSquareClick={()=>handleClick(4)}/>
        <Square num={sqrs[5]} onSquareClick={()=>handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square num={sqrs[6]} onSquareClick={()=>handleClick(6)}/>
        <Square num={sqrs[7]} onSquareClick={()=>handleClick(7)}/>
        <Square num={sqrs[8]} onSquareClick={()=>handleClick(8)}/>
      </div>
    </>
  )
  // return <button className="square">X</button>;
}

function calculateWinner(squares:string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
