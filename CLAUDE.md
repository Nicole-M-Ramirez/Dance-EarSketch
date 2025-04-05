# EarSketch Development Guide

## Build/Run Commands
- Build app: `npm run build`
- Dev server: `npm run serve`
- Compile CSS: `npm run build-css`

## Test Commands
- All tests: `npm run test`
- Jest tests: `npm run test-jest`
- Single Jest test: `npx jest -t "test name" path/to/test.js`
- E2E tests: `npm run test-cypress` or `npm run test-cypress-gui`

## Lint & Format
- Run linter: `npm run lint`
- Generate lint report: `npm run lint:report`

## Code Style
- TypeScript with strict checks (noImplicitAny, strictNullChecks)
- 4 spaces indentation, Unix line endings
- Double quotes for strings
- Named functions without space before parentheses
- Use functional React components with hooks
- Internationalize all user-facing text with i18next

## Architecture
- React/Redux/TypeScript stack
- WebAudio API for audio processing
- File a test for each new feature/bugfix
- Always maintain a11y compliance
- Avoid unnecessary third-party dependencies