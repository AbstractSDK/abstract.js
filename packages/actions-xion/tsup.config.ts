import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { dependencies, peerDependencies } from './package.json'

export default defineConfig(
  getConfig({
    experimentalDts: false,
    outDir: 'dist',
    //dev: process.env.DEV === 'true',
    entry: ['src/index.ts', 'src/actions/index.ts', 'src/decorators/index.ts'],
    // external: [...Object.keys(dependencies)],
    external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
    format: ['esm', 'cjs'],
  }),
)
