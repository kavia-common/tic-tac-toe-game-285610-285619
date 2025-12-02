# Tic Tac Toe (Ocean Professional)

A lightweight React Tic Tac Toe with accessible controls and an Ocean Professional theme.

## Scripts
- npm start
- npm test
- npm run build

## Env-based config
- REACT_APP_LOG_LEVEL=debug             # shows env badge
- REACT_APP_FEATURE_FLAGS='{"showEnvBadge": true}'  # also shows env badge
- REACT_APP_NODE_ENV=development|staging|production

## Accessibility
- Squares are buttons with aria-label "Square row r column c" and aria-pressed
- Status has role="status" and aria-live="polite"
