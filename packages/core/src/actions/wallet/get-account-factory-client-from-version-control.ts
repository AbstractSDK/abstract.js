import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { WithArgs } from '../../types/with-args'
import { getAccountFactoryAddressAndVersionFromVersionControl } from '../public/get-account-factory-address-and-version-from-version-control'
import { getAccountFactoryClient } from './get-account-factory-client'

export type GetAccountFactoryClientFromVersionControlParameters = WithArgs<{
  signingCosmWasmClient: SigningCosmWasmClient
  sender: string
  versionControlAddress: string
  version?: string
}>

export async function getAccountFactoryClientFromVersionControl({
  args: { signingCosmWasmClient, sender, versionControlAddress, version },
}: GetAccountFactoryClientFromVersionControlParameters) {
  const { address: factoryAddress } =
    await getAccountFactoryAddressAndVersionFromVersionControl({
      args: {
        cosmWasmClient: signingCosmWasmClient,
        versionControlAddress,
        version,
      },
    })

  return getAccountFactoryClient({
    args: { signingCosmWasmClient, sender, factoryAddress },
  })
}
