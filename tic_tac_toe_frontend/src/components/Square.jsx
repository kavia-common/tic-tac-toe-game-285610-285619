import React from 'react';

/**
 * Square component represents a single cell in the board.
 * Props:
 * - value: 'X' | 'O' | null
 * - onClick: () => void
 * - row: number
 * - col: number
 * - isWinning: boolean
 */
const Square = ({ value, onClick, row, col, isWinning }) => {
  const label = `Square row ${row} column ${col}`; // for accessibility
  const pressed = Boolean(value);

  const classNames = [
    'square',
    value === 'X' ? 'x' : '',
    value === 'O' ? 'o' : '',
    isWinning ? 'winning' : ''
  ]
    .filter(Boolean)
    .join(' ');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <button
      type="button"
      className={classNames}
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="gridcell"
    >
      {value}
    </button>
  );
};

export default Square;
