import { defineConfig } from '@abstract-money/cli'
import { graz, react, registry } from '@abstract-money/cli/plugins'

export default defineConfig({
  out: 'src/_generated',
  plugins: [
    graz(),
    react(),
    registry({
      contracts: [{ namespace: 'abstract', name: 'betting', version: '0.0.2' }],
    }),
  ],
})
