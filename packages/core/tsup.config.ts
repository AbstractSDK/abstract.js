import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { dependencies } from './package.json'

export default defineConfig(
  getConfig({
    outDir: 'dist',
    //dev: process.env.DEV === 'true',
    entry: [
      'src/index.ts',
      'src/api/index.ts',
      'src/chain-registry/index.ts',
      'src/clients/index.ts',
      'src/tools/index.ts',
      'src/utils/index.ts',
      'src/codegen/abstract/index.ts',
    ],
    external: [...Object.keys(dependencies)],
  }),
)
