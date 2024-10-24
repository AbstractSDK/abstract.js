import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { dependencies } from './package.json'

export default defineConfig(
  getConfig({
    experimentalDts: false,
    outDir: 'dist',
    //dev: process.env.DEV === 'true',
    entry: ['src/index.ts', 'src/client/index.ts', 'src/query/index.ts'],
    external: [...Object.keys(dependencies)],
    format: ['esm'],
  }),
)
