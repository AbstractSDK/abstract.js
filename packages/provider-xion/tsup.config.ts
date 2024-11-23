import { defineConfig } from 'tsup'

import { polyfillNode } from 'esbuild-plugin-polyfill-node'
import { getConfig } from '../../scripts/tsup'
import { peerDependencies } from './package.json'

export default defineConfig(
  getConfig({
    experimentalDts: false,
    outDir: 'dist',
    //dev: process.env.DEV === 'true',
    platform: 'browser',
    entry: ['src/index.ts'],
    external: [...Object.keys(peerDependencies)],
    esbuildPlugins: [
      polyfillNode({
        polyfills: {
          crypto: true,
        },
      }),
    ],
  }),
)
