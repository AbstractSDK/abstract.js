import dedent from 'dedent'
import type { Plugin } from '../config'
import type { RequiredBy } from '../types'

type CosmosKitResult = RequiredBy<Plugin, 'run'>

type CosmosKitOptions = {
  lite?: boolean
}

export function cosmosKit(
  options: CosmosKitOptions = { lite: false },
): CosmosKitResult {
  return {
    name: 'CosmosKit',
    async run() {
      return {
        imports: dedent`
            import { useChain } from '@cosmos-kit/${
              options.lite ? 'react-lite' : 'react'
            }'
          `,
        content: '',
      }
    },
  }
}
