import React from 'react';

/**
 * StatusBar component shows current game status.
 * Props:
 * - text: string
 * - state: 'in-progress' | 'winner' | 'draw'
 */
const StatusBar = ({ text, state = 'in-progress' }) => {
  return (
    <div
      className={`status ${state}`}
      role="status"
      aria-live="polite"
    >
      {text}
    </div>
  );
};

export default StatusBar;
