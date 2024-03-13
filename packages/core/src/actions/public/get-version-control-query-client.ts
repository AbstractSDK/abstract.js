import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlQueryClient } from '../../codegen/abstract'

export type GetVersionControlQueryClientParameters = {
  cosmWasmClient: CosmWasmClient
  versionControlAddress: string
}

export function getVersionControlQueryClient({
  cosmWasmClient,
  versionControlAddress,
}: GetVersionControlQueryClientParameters) {
  return new VersionControlQueryClient(cosmWasmClient, versionControlAddress)
}
