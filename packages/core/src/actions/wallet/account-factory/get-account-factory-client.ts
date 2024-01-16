import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AccountFactoryClient } from '../../../codegen/abstract'
import { getAccountFactoryAddress } from '../../public/account-factory/get-account-factory-address'

export async function getAccountFactoryClient(
  cosmWasmClient: SigningCosmWasmClient,
  sender: string,
  versionControlAddress: string,
  version?: string,
) {
  const factoryAddress = await getAccountFactoryAddress(
    cosmWasmClient,
    versionControlAddress,
    version,
  )

  return new AccountFactoryClient(cosmWasmClient, sender, factoryAddress)
}
