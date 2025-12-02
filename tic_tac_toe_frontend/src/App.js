import React from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import StatusBar from './components/StatusBar';
import Board from './components/Board';
import Controls from './components/Controls';
import { useTicTacToe } from './hooks/useTicTacToe';
import { config } from './utils/config';

// PUBLIC_INTERFACE
function App() {
  /**
   * App entry rendering the Tic Tac Toe game with Ocean Professional theme.
   * Uses useTicTacToe hook for state and actions. Displays optional env badge based
   * on logLevel or feature flags. Provides accessible UI with status region.
   */
  const {
    squares,
    xIsNext,
    currentPlayer,
    statusText,
    winnerInfo,
    isDraw,
    handleSquareClick,
    resetGame
  } = useTicTacToe();

  const showEnvBadge =
    config.logLevel === 'debug' || (config.featureFlags && config.featureFlags.showEnvBadge === true);

  return (
    <div className="app-root">
      <Header
        title="Tic Tac Toe"
        showEnvBadge={showEnvBadge}
        envText={(config.nodeEnv || 'development').toUpperCase()}
      />

      <main className="game-container" aria-label="Tic Tac Toe Game">
        <StatusBar
          text={statusText}
          state={
            winnerInfo?.winner
              ? 'winner'
              : isDraw
              ? 'draw'
              : 'in-progress'
          }
        />

        <section className="board-card" aria-label="Game Board">
          <Board
            squares={squares}
            onSquareClick={handleSquareClick}
            winningLine={winnerInfo?.line || null}
          />
        </section>

        <Controls onReset={resetGame} />
      </main>

      <footer className="footer-note" aria-label="Footer">
        <span className="muted">Built with the Ocean Professional theme.</span>
      </footer>
    </div>
  );
}

export default App;
