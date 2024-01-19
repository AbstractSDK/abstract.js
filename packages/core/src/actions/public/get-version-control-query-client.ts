import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from 'src/types/with-args'
import { VersionControlQueryClient } from '../../codegen/abstract'

export type GetVersionControlQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
}>

export function getVersionControlQueryClient({
  args: { cosmWasmClient, versionControlAddress },
}: GetVersionControlQueryClientParameters) {
  return new VersionControlQueryClient(cosmWasmClient, versionControlAddress)
}
