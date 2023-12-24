import React, { useState } from "react";
import { calculateWinner } from "../helper";
import { calculateAlmostWinner } from "../helper1";
import { calculateBlock } from "../helper2";
import Board from "./Board";

const App = () => {
  const [plays, setPlays] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(plays);
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    let squares = [...plays];
    if (winner || squares[i]) return;
    squares[i] = xO;
    if (!calculateWinner(squares)) {squares = calculateOturn(squares) }
    setPlays(squares);
  };

  const restart = () => {
    setXisNext('X');
    setPlays(Array(9).fill(null));
  };

  const calculateOturn = (board) => {
    // 1 - check if there is a winning move
    const almostWinner = calculateAlmostWinner(board);
    if (almostWinner) {
      board[almostWinner] = 'O'
      return board}
    // 2 - check if there is a move to block opponent from winning
    const blockOpponent = calculateBlock(board);
    if (blockOpponent) {
      board[blockOpponent] = 'O'
      return board}
    // 3 - take middle square if available
    if (!board[4]) {
      board[4] = 'O'
      return board}
    // 3 - take a corner square if available (choose randomly if more than 1)
    if (!board[0]) {
      board[0] = 'O'
      return board}
    if (!board[2]) {
      board[2] = 'O'
      return board}
    if (!board[6]) {
      board[6] = 'O'
      return board}
    if (!board[8]) {
      board[8] = 'O'
      return board}
    // 3 - take a side square if available (choose randomly if more than 1)
    if (!board[1]) {
      board[1] = 'O'
      return board}
    if (!board[3]) {
      board[3] = 'O'
      return board}
    if (!board[5]) {
      board[5] = 'O'
      return board}
    if (!board[7]) {
      board[7] = 'O'
      return board}
    return board;
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
