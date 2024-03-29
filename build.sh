#!/bin/bash

# Build TypeScript and Vite
npm run build

# Format files
npm run format

# Lint files
npm run lint

# Prepare for publishing
npm run prepare

# Ensure linting before versioning
npm run preversion

# Bump version, format files, add changes, push changes, and push tags
npm run version
