import React from 'react';
import Square from './Square';

/**
 * Board component renders a 3x3 grid of Square buttons.
 * Props:
 * - squares: array of 9 values (null | 'X' | 'O')
 * - onSquareClick: function(index) => void
 * - winningLine: number[] | null
 */
const Board = ({ squares, onSquareClick, winningLine }) => {
  const renderSquare = (index) => {
    const row = Math.floor(index / 3) + 1;
    const col = (index % 3) + 1;
    const isWinning = Array.isArray(winningLine) && winningLine.includes(index);

    return (
      <Square
        key={index}
        value={squares[index]}
        onClick={() => onSquareClick(index)}
        row={row}
        col={col}
        isWinning={isWinning}
      />
    );
  };

  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe grid">
      {Array.from({ length: 9 }, (_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;
