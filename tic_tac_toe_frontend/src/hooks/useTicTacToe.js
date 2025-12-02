import { useCallback, useMemo, useState } from 'react';
import { calculateWinner } from '../utils/game';

// PUBLIC_INTERFACE
export function useTicTacToe() {
  /**
   * This hook encapsulates state and actions for the Tic Tac Toe game.
   * State:
   * - squares: Array(9).fill(null)
   * - xIsNext: boolean
   * - moveCount: number
   * - winnerInfo: { winner: 'X' | 'O' | null, line: number[] | null }
   * - isDraw: boolean
   *
   * Actions:
   * - handleSquareClick(index): ignores clicks if occupied or game over
   * - resetGame(): resets to initial state
   *
   * Derived:
   * - currentPlayer: 'X' | 'O'
   * - statusText: Next player, Winner, or Draw message
   */
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [moveCount, setMoveCount] = useState(0);

  const winnerInfo = useMemo(() => calculateWinner(squares), [squares]);
  const isDraw = useMemo(
    () => winnerInfo.winner === null && moveCount === 9,
    [winnerInfo, moveCount]
  );

  const currentPlayer = xIsNext ? 'X' : 'O';

  const statusText = useMemo(() => {
    if (winnerInfo.winner) return `Winner: ${winnerInfo.winner}`;
    if (isDraw) return 'Draw';
    return `Next Player: ${currentPlayer}`;
  }, [winnerInfo, isDraw, currentPlayer]);

  const handleSquareClick = useCallback((index) => {
    // If square occupied or game finished, ignore
    if (squares[index] || winnerInfo.winner || isDraw) return;

    setSquares((prev) => {
      const next = prev.slice();
      next[index] = currentPlayer;
      return next;
    });
    setXIsNext((prev) => !prev);
    setMoveCount((prev) => prev + 1);
  }, [squares, winnerInfo, isDraw, currentPlayer]);

  const resetGame = useCallback(() => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setMoveCount(0);
  }, []);

  return {
    squares,
    xIsNext,
    currentPlayer,
    statusText,
    winnerInfo,
    isDraw,
    handleSquareClick,
    resetGame
  };
}
