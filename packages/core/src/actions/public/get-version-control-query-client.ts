import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlQueryClient } from '../../codegen/abstract'
import { WithArgs } from '../../types/with-args'

export type GetVersionControlQueryClientParameters = WithArgs<{
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
}>

export function getVersionControlQueryClient({
  args: { cosmWasmClient, versionControlAddress },
}: GetVersionControlQueryClientParameters) {
  return new VersionControlQueryClient(cosmWasmClient, versionControlAddress)
}
