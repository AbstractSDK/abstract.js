import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { peerDependencies } from './package.json'

export default defineConfig(
  getConfig({
    experimentalDts: false,
    outDir: 'dist',
    //dev: process.env.DEV === 'true',
    entry: ['src/index.ts'],
    external: [...Object.keys(peerDependencies)],
  }),
)
