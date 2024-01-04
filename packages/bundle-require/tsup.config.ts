import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { dependencies, devDependencies } from './package.json'

export default defineConfig(
  getConfig({
    experimentalDts: false,
    entry: ['src/index.ts'],
    external: [...Object.keys(dependencies), ...Object.keys(devDependencies)],
  }),
)
