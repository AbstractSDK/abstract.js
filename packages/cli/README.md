# Abstract CLI

The Abstract CLI is a command-line tool for working with AbstractSDK apps and modules.

## Installation 

```bash
npm i -g @abstract-money/cli
```

## Usage

### Create `abstract.config.ts` in the root of your project

```typescript
import { defineConfig } from '@abstract-money/cli'
import { react, registry } from '@abstract-money/cli/plugins'

export default defineConfig({
  // Where to output the generated files
  out: 'src/generated',
  plugins: [
    // Add plugins here
    react(),
    registry({
      contracts: [
        // Add contracts and versions here
        {
          name: 'carrot-app',
          namespace: 'abstract',
          version: '0.1.0',
        },
      ],
    }),
  ],
})
```

### Generate 

Generate the files

```bash
abstract generate
```
