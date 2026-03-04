# Copilot Instructions

## Repository Overview

This is a JavaScript portfolio website template built with **React 18** and **Parcel** bundler. It is designed as a GitHub Codespaces teaching template that lets users quickly spin up a personal portfolio site.

- **Language/Framework**: JavaScript (JSX), React 18
- **Bundler**: Parcel v2
- **Linting/Formatting**: ESLint (with `eslint-plugin-react`, `eslint-plugin-jsx-a11y`, `eslint-plugin-prettier`) and Prettier
- **Deployment**: Azure Static Web Apps (via GitHub Actions) or GitHub Pages

## Project Layout

```
/
├── src/
│   ├── index.html          # HTML entry point
│   ├── index.js            # JS entry point (renders React app)
│   ├── App.jsx             # Root React component; contains siteProps config
│   ├── styles.css          # Global styles
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   └── Footer.jsx
│   └── images/             # Static image assets
├── .devcontainer/
│   └── devcontainer.json   # Codespaces configuration (Node universal image, port 1234)
├── .github/
│   ├── workflows/
│   │   ├── azure-static-web-apps-witty-flower-008e06610.yml  # CI/CD to Azure
│   │   └── close-pull-requests.yml
│   └── copilot-instructions.md
├── .eslintrc               # ESLint configuration
├── .prettierrc             # Prettier configuration
└── package.json
```

**Key file**: `src/App.jsx` contains the `siteProps` object — this is the single place to update personal information (name, title, email, social links) and the `primaryColor`/`secondaryColor` theme values.

## Setup & Development

Always run `npm install` before building or starting the dev server.

```bash
npm install          # Install dependencies (required before any other command)
npm start            # Start Parcel dev server at http://localhost:1234
npm run build        # Production build (output in dist/)
npm run build-gh     # Build for GitHub Pages deployment
npm run deploy       # Deploy to GitHub Pages (runs build-gh first)
```

The dev server runs on **port 1234** (configured in `.devcontainer/devcontainer.json` `forwardPorts`).

## Linting

ESLint is configured in `.eslintrc` with React, Prettier, and jsx-a11y plugins.

```bash
npx eslint src/           # Lint all source files
npx eslint src/ --fix     # Auto-fix lint issues
```

Prettier is configured in `.prettierrc`. ESLint enforces Prettier formatting via `eslint-plugin-prettier` (violations are reported as warnings).

## CI/CD

- **Azure Static Web Apps**: The workflow `.github/workflows/azure-static-web-apps-witty-flower-008e06610.yml` runs on pushes to `main` and pull requests targeting `main`. It builds and deploys the app automatically. Note: the workflow's `output_location` is set to `.next`, but Parcel outputs to `dist/` by default — this is a known discrepancy in the existing workflow configuration; do not change it without verifying the Azure Static Web Apps deployment still works.
- There are no automated test scripts in this repository.

## Key Conventions

- Personal/site data is centralized in the `siteProps` object in `src/App.jsx`. Do not scatter personal details across multiple components.
- Components live in `src/Components/` and are functional React components using JSX.
- Styles are in `src/styles.css` (global). Component-level styling uses inline styles or the global stylesheet.
- Accessibility: jsx-a11y ESLint plugin is enabled; keep accessibility attributes correct on interactive elements.
