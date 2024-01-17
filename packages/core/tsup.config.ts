import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { dependencies } from './package.json'

export default defineConfig(
  getConfig({
    outDir: 'dist',
    //dev: process.env.DEV === 'true',
    entry: ['src/index.ts', 'src/clients/index.ts', 'src/utils/index.ts'],
    external: [...Object.keys(dependencies)],
  }),
)
