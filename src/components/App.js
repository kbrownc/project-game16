import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const App = () => {
  const [plays, setPlays] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(plays);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const squares = [...plays];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setPlays(squares);
    setXisNext(!xIsNext);
  };

  const restart = () => {
    setXisNext('X');
    setPlays(Array(9).fill(null));
  };

  return (
    <>
      <h1>Tic Tac Toe - You vs Computer</h1>
      <Board squares={plays} onClick={handleClick} />
      <div className="info-wrapper">
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        <button onClick={() => restart()}>Restart</button>
      </div>
    </>
  );
};

export default App;
