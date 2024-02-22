import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { getAnsHostAddressAndVersionFromVersionControl } from '../public/get-ans-host-address-and-version-from-version-control'
import { getAnsHostClient } from './get-ans-host-client'

export type GetAnsHostClientFromVersionControlParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  versionControlAddress: string
  version?: string
}>

export async function getAnsHostClientFromVersionControl({
  args: { signingCosmWasmClient, sender, versionControlAddress, version },
}: GetAnsHostClientFromVersionControlParameters) {
  const { address: ansHostAddress } =
    await getAnsHostAddressAndVersionFromVersionControl({
      args: {
        cosmWasmClient: signingCosmWasmClient,
        versionControlAddress,
        version,
      },
    })

  return getAnsHostClient({
    args: { signingCosmWasmClient, sender, ansHostAddress },
  })
}
