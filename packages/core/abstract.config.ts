import { defineConfig } from '@abstract-money/cli'
import { registry, vanilla } from '@abstract-money/cli/plugins'

const contractsConfig = [
  {
    name: 'account',
    version: '0.24.0-rc.1',
  },
  {
    name: 'version-control',
    version: '0.24.0-rc.1',
  },
  {
    name: 'ans-host',
    version: '0.24.0-rc.1',
  },
  {
    name: 'ibc-client',
    version: '0.24.0-rc.1',
  },
]

export default defineConfig({
  out: 'src/codegen/abstract',
  plugins: [
    vanilla(),
    registry({
      contracts: [
        ...contractsConfig.map(
          (contractConfig) =>
            ({ namespace: 'abstract', ...contractConfig }) as const,
        ),
        ...[{ namespace: 'cw-plus', name: 'cw20-base', version: '1.0.1' }],
      ],
    }),
  ],
})
