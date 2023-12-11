import { defineConfig } from '@abstract-money/cli'
import { react, registry } from '@abstract-money/cli/plugins'

export default defineConfig({
  out: 'src/generated.ts',
  plugins: [
    react(),
    registry({
      contracts: [{ namespace: 'abstract', name: 'betting', version: '0.1.0' }],
    }),
  ],
})
