# Abstract CLI

The Abstract CLI is a command-line tool for working with AbstractSDK apps and modules.

## Installation 

```bash
npm i -g @abstract-money/cli
```

## Usage

```sh
abstract <command> [options]
```

**Try it out:**
```sh
abstract --help
```

### Commands:
| Commands | Description | Options
| --- | --- | :--- |
| `generate` | generate code based on configuration | <pre>-c, --config <path> : path to config file<br />-r, --root <path> : root path<br />-h, --help : Display this message</pre> |
| `init` | create configuration file | |

### Options
| Option | Shorthand | Description |
| :---: | :---: | --- |
| `--help` | `-h` | Display Help |
| `--version` | `-v` | Display version number |

#### Init

```sh
abstract init
```

This will generate an `abstract.config.js` in your project root. You can configure accordingly.

```ts
import { defineConfig } from '@abstract-money/cli'
import { react, registry } from '@abstract-money/cli/plugins'

export default defineConfig({
  out: 'src/generated', // Relative path from project root of the generated output.
  plugins: [
    react(),
    registry({
      contracts: [
        {
          name: 'app-name', // Your App Name.
          namespace: 'abstract', // To claim a namespace on mainnet, please get in touch with Abstract Team.
          version: '0.1.0',
        },
      ],
    }),
  ],
})
```

You need to also install `@abstract-money/cli/plugins`:

```sh
pnpm install @abstract-money/cli/plugins
```

You can use `npm` or `yarn` as per your preference.

Once done, you're ready to generate the code:

#### Generate

```sh
abstract generate
```

You can use additional options as mentioned above.
You should get an output like:

```sh
❯ abstract generate
✔ Validating plugins
✔ Resolving contracts
✔ Validating contracts
✔ Running plugins
✔ Writing to src/generated/index.ts
```

And we should be good to now to the types generated directly into our codebase.
