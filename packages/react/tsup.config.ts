import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { dependencies, peerDependencies } from './package.json'

export default defineConfig(
  getConfig({
    //dev: process.env.DEV === 'true',
    experimentalDts: false,
    entry: ['src/index.ts', 'src/utils/index.ts'],
    external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
    platform: 'browser',
    banner: {
      js: '"use client";',
    },
  }),
)
