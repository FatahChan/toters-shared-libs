# Toters Shared UI Library

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ A publishable Angular UI component library built with Nx ✨

## 📦 Project Overview

This repository contains a publishable Angular UI component library with a showcase application to demonstrate the components.

- **1 Library**
  - `@toters/shared-ui` - Publishable Angular UI component library

- **1 Application**
  - `showcase` - Angular application demonstrating the UI library components

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Serve the showcase application
pnpm serve:showcase
# or
nx serve showcase

# Build the publishable UI library
pnpm build:lib
# or
nx build toters-shared-ui-lib

# Build the showcase app
pnpm build:showcase
# or
nx build showcase

# Run tests
pnpm test
# or
nx run-many -t test

# Lint all projects
pnpm lint
# or
nx run-many -t lint

# Visualize the project graph
nx graph
```

## 📁 Project Structure

```
├── apps/
│   └── showcase/       - Angular showcase app
├── libs/
│   └── toters-shared-ui-lib/  - Publishable UI component library
│       └── src/
│           └── components/
│               └── button/  - Button component with variants & sizes
├── nx.json             - Nx configuration
├── tsconfig.base.json  - TypeScript configuration
└── package.json        - Dependencies and scripts
```

## 📚 Library Details

### Publishing the Library

The `@toters/shared-ui` library is configured as a publishable library using `ng-packagr`. To publish:

```bash
# Build the library
nx build toters-shared-ui-lib

# The built library will be in dist/libs/toters-shared-ui-lib

# Publish to npm (update package.json with your registry details first)
cd dist/libs/toters-shared-ui-lib
npm publish
```

### Using the Library

After publishing, you can install and use the library in any Angular application:

```bash
npm install @toters/shared-ui
```

```typescript
import { TotersSharedUiLib } from '@toters/shared-ui';

@Component({
  imports: [TotersSharedUiLib],
  // ...
})
export class MyComponent {}
```

## 🎯 Adding New Components

### Generate a new component in the library:

```bash
nx g @nx/angular:component my-component --project=toters-shared-ui-lib
```

### Generate a new Angular application:

```bash
nx g @nx/angular:app --name=my-app --directory=apps/my-app
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm build:lib` | Build the UI library |
| `pnpm serve:showcase` | Serve the showcase app in development mode |
| `pnpm build:showcase` | Build the showcase app for production |
| `pnpm test` | Run all tests |
| `pnpm lint` | Lint all projects |

## 🛠️ Nx Commands

```bash
# Project exploration
nx graph                           # Interactive dependency graph
nx list                            # List installed plugins
nx show project showcase --web     # View project details

# Development
nx serve showcase                  # Serve showcase app
nx build toters-shared-ui-lib      # Build UI library
nx test toters-shared-ui-lib       # Test library
nx lint toters-shared-ui-lib       # Lint library

# Running multiple tasks
nx run-many -t build               # Build all projects
nx run-many -t test --parallel=3   # Test in parallel
```

## 🔗 Learn More

- [Nx Documentation](https://nx.dev)
- [Publishing Angular Libraries](https://nx.dev/recipes/angular/publish-libraries)
- [ng-packagr Documentation](https://github.com/ng-packagr/ng-packagr)
- [Nx Cloud](https://nx.dev/ci/intro/why-nx-cloud)

## 💬 Community

Join the Nx community:

- [Discord](https://go.nx.dev/community)
- [X (Twitter)](https://twitter.com/nxdevtools)
- [LinkedIn](https://www.linkedin.com/company/nrwl)
- [YouTube](https://www.youtube.com/@nxdevtools)
