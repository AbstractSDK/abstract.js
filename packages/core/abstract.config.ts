import { defineConfig } from '@abstract-money/cli'
import { registry, vanilla } from '@abstract-money/cli/plugins'

const contractsConfig = [
  {
    name: 'manager',
    version: '0.19.2',
  },
  {
    name: 'proxy',
    version: '0.19',
  },
  {
    name: 'module-factory',
    version: '0.19',
  },
  {
    name: 'version-control',
    version: '0.19',
  },
  {
    name: 'ans-host',
    version: '0.19',
  },
  {
    name: 'account-factory',
    version: '0.19',
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
