import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlQueryClient } from '../../codegen/abstract'

export async function getVersionControlQueryClient(
  cosmWasmClient: CosmWasmClient,
  versionControlAddress: string,
) {
  return new VersionControlQueryClient(cosmWasmClient, versionControlAddress)
}
