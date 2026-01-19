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

- `TotersSharedUiLib` - Main UI component

## Requirements

- Angular ^21.0.0
- RxJS ~7.8.0

## License

MIT
