import path from 'path'
import { defineWorkspace } from 'vitest/config'

const alias = {
  '@abstract-money/core': path.resolve(
    __dirname,
    './packages/core/src/exports',
  ),
}

export default defineWorkspace([
  {
    test: {
      name: '@abstract-money/core',
      include: ['./packages/core/src/**/*.test.ts'],
      environment: 'happy-dom',
      testTimeout: 10_000,
    },
    resolve: { alias },
  },
])
