import dedent from 'dedent'
import type { Plugin } from '../config'
import type { RequiredBy } from '../types'

type GrazResult = RequiredBy<Plugin, 'run'>

export function graz(): GrazResult {
  return {
    name: 'Graz',
    async run() {
      return {
        imports: dedent`
            import { useAccount, useCosmWasmClient, useCosmWasmSigningClient } from 'graz'
          `,
        content: '',
      }
    },
  }
}
