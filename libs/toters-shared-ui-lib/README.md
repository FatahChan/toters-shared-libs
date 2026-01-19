# @toters/shared-ui

A publishable Angular UI component library built with Nx.

## Installation

```bash
npm install @toters/shared-ui
```

## Usage

Import components in your Angular application:

```typescript
import { TotersSharedUiLib } from '@toters/shared-ui';

@Component({
  selector: 'app-root',
  imports: [TotersSharedUiLib],
  template: '<lib-toters-shared-ui-lib></lib-toters-shared-ui-lib>'
})
export class AppComponent {}
```

## Development

### Building

```bash
nx build toters-shared-ui-lib
```

The build artifacts will be stored in the `dist/libs/toters-shared-ui-lib` directory.

### Testing

```bash
nx test toters-shared-ui-lib
```

### Linting

```bash
nx lint toters-shared-ui-lib
```

## Publishing

After building, you can publish to npm:

```bash
cd dist/libs/toters-shared-ui-lib
npm publish
```

## Components

- `ButtonComponent` - Reusable button component

## Adding a New Component

To add a new component to this library:

### 1. Generate the component using Nx

```bash
nx generate @nx/angular:component components/your-component --project=toters-shared-ui-lib --export
```

Or manually create the component files in `libs/toters-shared-ui-lib/src/components/`.

### 2. Create component files

Create a new folder for your component:

```
libs/toters-shared-ui-lib/src/components/your-component/
  ├── your-component.component.ts
  ├── your-component.component.html
  ├── your-component.component.css
  └── your-component.component.spec.ts
```

### 3. Export the component

Add your component to `libs/toters-shared-ui-lib/src/index.ts`:

```typescript
export * from './components/your-component/your-component.component';
```

### 4. Build and test

```bash
# Build the library
nx build toters-shared-ui-lib

# Test the component
nx test toters-shared-ui-lib

# Lint the code
nx lint toters-shared-ui-lib
```

### 5. Use in the showcase app

Test your component in the showcase app at `apps/showcase`:

```typescript
import { YourComponent } from '@toters/shared-ui';

@Component({
  imports: [YourComponent],
  template: '<lib-your-component></lib-your-component>'
})
```

## Requirements

- Angular ^21.0.0
- RxJS ~7.8.0

## License

MIT
