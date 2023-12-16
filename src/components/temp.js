import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const App = () => {
  const [plays, setPlays] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(plays[stepNumber]);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = plays.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    // Using ... to copy an array
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;
    setPlays([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const restart = () => {
    setStepNumber(0);
    setXisNext('X');
  };

  return (
    <>
      <h1>Tic Tac Toe - You vs Computer</h1>
      <Board squares={plays[stepNumber]} onClick={handleClick} />
      <div className="info-wrapper">
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        <button onClick={() => restart()}>Restart</button>
      </div>
    </>
  );
};

export default App;
