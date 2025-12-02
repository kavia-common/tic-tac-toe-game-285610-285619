import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders title and reset button and 9 squares', () => {
  render(<App />);
  // Title
  expect(screen.getByRole('heading', { name: /tic tac toe/i })).toBeInTheDocument();
  // Reset button
  expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  // 9 squares
  const squares = screen.getAllByRole('gridcell');
  expect(squares).toHaveLength(9);
});

test('clicking alternates X and O and status updates', () => {
  render(<App />);
  const squares = screen.getAllByRole('gridcell');

  fireEvent.click(squares[0]); // X
  expect(squares[0]).toHaveTextContent('X');
  expect(screen.getByRole('status')).toHaveTextContent(/next player: o/i);

  fireEvent.click(squares[1]); // O
  expect(squares[1]).toHaveTextContent('O');
  expect(screen.getByRole('status')).toHaveTextContent(/next player: x/i);
});

test('detects winner and prevents further moves', () => {
  render(<App />);
  const squares = screen.getAllByRole('gridcell');
  // X makes a winning row: 0,1,2
  fireEvent.click(squares[0]); // X
  fireEvent.click(squares[3]); // O
  fireEvent.click(squares[1]); // X
  fireEvent.click(squares[4]); // O
  fireEvent.click(squares[2]); // X wins

  expect(screen.getByRole('status')).toHaveTextContent(/winner: x/i);

  // Try to click after winner
  fireEvent.click(squares[5]);
  expect(squares[5]).toHaveTextContent(''); // still empty
});

test('reset clears the board', () => {
  render(<App />);
  const squares = screen.getAllByRole('gridcell');
  fireEvent.click(squares[0]); // X
  expect(squares[0]).toHaveTextContent('X');

  fireEvent.click(screen.getByRole('button', { name: /reset/i }));
  const squaresAfter = screen.getAllByRole('gridcell');
  squaresAfter.forEach((sq) => {
    expect(sq).toHaveTextContent('');
  });
  expect(screen.getByRole('status')).toHaveTextContent(/next player: x/i);
});
