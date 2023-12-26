import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { dependencies } from './package.json'

export default defineConfig(
  getConfig({
    outDir: 'dist',
    //dev: process.env.DEV === 'true',
    entry: [
      'src/index.ts',
      'src/account/index.ts',
      'src/api/index.ts',
      'src/chain-registry/index.ts',
      'src/clients/index.ts',
      'src/cw-plus/index.ts',
      'src/modules/index.ts',
      'src/native/index.ts',
      'src/tools/index.ts',
    ],
    external: [...Object.keys(dependencies)],
  }),
)
