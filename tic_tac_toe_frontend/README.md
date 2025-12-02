# Tic Tac Toe — Ocean Professional (React)

This is a lightweight React Tic Tac Toe game with an Ocean Professional visual theme. It focuses on accessibility, simple state management, and a clean modern look using vanilla CSS.

## How to Run

In this directory you can use the following commands:

### Development
- npm install
- npm start

The app runs in development mode and is available at http://localhost:3000.

### Tests
- npm test

This launches the test runner.

### Production build
- npm run build

This produces an optimized build in the build/ folder.

## Environment Variables

This app reads a small set of environment variables at build time (prefixed with REACT_APP_). The following are used directly in code or part of the container’s .env set:

- REACT_APP_NODE_ENV
  - Purpose: Indicates the environment name for display and logic.
  - Where used: src/utils/config.js (falls back to NODE_ENV) and shown in the header as a badge when enabled.
  - Example: development | staging | production

- REACT_APP_LOG_LEVEL
  - Purpose: Controls log level and, when set to debug, enables the environment badge display.
  - Where used: src/utils/config.js and read in App to decide showing the badge.
  - Example: debug | info | warn | error

- REACT_APP_FEATURE_FLAGS
  - Purpose: Enables optional UI capabilities via flags. Supports JSON string or comma-separated format.
  - Where used: src/utils/config.js (parsed by parseFeatureFlags) and read in App for showEnvBadge.
  - Examples:
    - JSON: {"showEnvBadge": true}
    - Comma-separated: showEnvBadge,!someOtherFlag

The container’s .env may also define the following, which are not read by the current UI code but are listed for completeness of the environment:
- REACT_APP_API_BASE
- REACT_APP_BACKEND_URL
- REACT_APP_FRONTEND_URL
- REACT_APP_WS_URL
- REACT_APP_NEXT_TELEMETRY_DISABLED
- REACT_APP_ENABLE_SOURCE_MAPS
- REACT_APP_PORT
- REACT_APP_TRUST_PROXY
- REACT_APP_HEALTHCHECK_PATH
- REACT_APP_EXPERIMENTS_ENABLED

Note: Only REACT_APP_NODE_ENV, REACT_APP_LOG_LEVEL, and REACT_APP_FEATURE_FLAGS are actively consumed by the current code in src/utils/config.js and App.

## Ocean Professional Theme

The theme is implemented with CSS variables and modern layout styles in src/App.css. It uses blue primary accents with warm amber highlights, subtle shadows, rounded corners, and smooth transitions to create a refined feel.

Key palette (see :root in src/App.css):
- --primary: #2563EB
- --secondary: #F59E0B
- --background: #f9fafb
- --surface: #ffffff
- --text: #111827
- --muted: #6b7280

Theme cues in the UI:
- Header uses a soft blue-to-gray gradient and may display an environment badge.
- Status bar changes color based on state: in-progress (primary), winner (secondary gradient), draw (muted).
- Squares have subtle elevation, rounded corners, and color emphasis for X (primary) and O (light blue).
- Buttons use the primary color with hover elevation and focus rings for accessibility.

## Gameplay Instructions

- The game alternates turns between X and O starting with X.
- Click or press Enter/Space on any empty square to place your mark.
- The game declares a winner when three marks align horizontally, vertically, or diagonally.
- If all nine squares are filled with no winner, the game is a draw.
- Use the Reset button to start a new round at any time.

Status and visual cues:
- The status bar announces the next player, the winner, or a draw.
- When a winner is detected, the winning line of squares is visually highlighted.

## Accessibility Considerations

The UI is designed with accessibility in mind:

- Interactive squares are rendered as buttons with role="gridcell", keyboard handlers, and an aria-label of the form “Square row r column c”. This makes navigation and activation via keyboard straightforward.
- Buttons expose aria-pressed to communicate whether a square has been taken.
- The board container has role="grid" to provide a structured semantic layout to assistive technologies.
- The game status uses role="status" with aria-live="polite" so screen readers are notified about turn changes, win conditions, and draws without being overly disruptive.
- Focus styles are clear and rely on a custom focus ring that contrasts with the theme, aiding users who navigate by keyboard.

## Project Structure

Key files:
- src/App.js — application composition, theme usage, and environment badge logic.
- src/utils/config.js — environment variable parsing including feature flags.
- src/hooks/useTicTacToe.js — encapsulates game state, moves, winner/draw logic, and reset.
- src/components/Board.jsx — renders a 3x3 grid of square buttons.
- src/components/Square.jsx — accessible square button with keyboard and ARIA support.
- src/components/StatusBar.jsx — live region for game state.
- src/App.css — Ocean Professional theme variables and component styling.

## Notes

- Environment Badge: The badge in the header is shown when either REACT_APP_LOG_LEVEL=debug or REACT_APP_FEATURE_FLAGS includes showEnvBadge=true. The text of the badge is derived from REACT_APP_NODE_ENV (or NODE_ENV) uppercased.
