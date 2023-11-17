import { defineConfig } from 'tsup'

import { getConfig } from '../../scripts/tsup'
import { dependencies, peerDependencies } from './package.json'

export default defineConfig(
  getConfig({
    banner: {
      js: '"use client";',
    },
    dev: process.env.DEV === 'true',
    entry: [
      'src/internal/index.ts',
      'src/internal/account/index.ts',
      'src/internal/apps/challenge/index.ts',
      'src/internal/cw-plus/cw-20/index.ts',
      'src/internal/cw-plus/cw-20-ics/index.ts',
      'src/internal/cw-plus/cw-3-flex-multisig/index.ts',
      'src/internal/cw-plus/cw-4-group/index.ts',
      'src/internal/native/ans/index.ts',
      'src/internal/native/factory/index.ts',
      'src/internal/native/registry/index.ts',
    ],
    external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
    platform: 'browser',
  }),
)
