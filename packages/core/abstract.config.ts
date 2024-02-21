import { defineConfig } from '@abstract-money/cli'
import { registry, vanilla } from '@abstract-money/cli/plugins'

const contractsConfig = [
  {
    name: 'manager',
    version: '0.21.0',
  },
  {
    name: 'proxy',
    version: '0.21.0',
  },
  {
    name: 'module-factory',
    version: '0.21.0',
  },
  {
    name: 'version-control',
    version: '0.21.0',
  },
  {
    name: 'ans-host',
    version: '0.21.0',
  },
  {
    name: 'account-factory',
    version: '0.21.0',
  },
  {
    name: 'ibc-client',
    version: '0.21.0',
  },
]

export default defineConfig({
  out: 'src/codegen/abstract',
  plugins: [
    vanilla(),
    registry({
      contracts: contractsConfig.map(
        (contractConfig) =>
          ({ namespace: 'abstract', ...contractConfig }) as const,
      ),
    }),
  ],
})
