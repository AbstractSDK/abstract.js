import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { dependencies } from './package.json'

export default defineConfig(
  getConfig({
    experimentalDts: false,
    //dev: process.env.DEV === 'true',
    entry: [
      'src/index.ts',
      'src/cli.ts',
      'src/cosmjs.ts',
      'src/config.ts',
      'src/plugins/index.ts',
    ],
    external: [...Object.keys(dependencies)],
    noExport: ['src/cli.ts'],
  }),
)
