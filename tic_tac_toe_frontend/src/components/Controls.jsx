import React from 'react';

/**
 * Controls component renders action buttons like Reset.
 * Props:
 * - onReset: () => void
 */
const Controls = ({ onReset }) => {
  return (
    <div className="controls">
      <button
        type="button"
        className="btn btn-primary"
        onClick={onReset}
        aria-label="Reset game"
      >
        Reset
      </button>
    </div>
  );
};

export default Controls;
