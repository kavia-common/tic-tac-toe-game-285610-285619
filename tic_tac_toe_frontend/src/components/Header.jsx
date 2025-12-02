import React from 'react';

/**
 * Header component renders the app title and optional environment badge.
 * Props:
 * - title: string
 * - showEnvBadge: boolean
 * - envText: string
 */
const Header = ({ title, showEnvBadge = false, envText = '' }) => {
  return (
    <header className="header">
      <div className="header-inner">
        <h1 className="header-title" aria-label="App Title">
          {title}
          {showEnvBadge && <span className="env-badge" aria-label="Environment">{envText}</span>}
        </h1>
        {/* Placeholder for future toggles if needed */}
        <div aria-hidden="true" />
      </div>
    </header>
  );
};

export default Header;
