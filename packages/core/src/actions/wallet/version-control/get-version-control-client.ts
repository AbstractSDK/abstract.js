import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { VersionControlClient } from '../../../codegen/abstract'

export async function getVersionControlClient(
  cosmWasmClient: SigningCosmWasmClient,
  sender: string,
  versionControlAddress: string,
) {
  return new VersionControlClient(cosmWasmClient, sender, versionControlAddress)
}
