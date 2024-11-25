import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'

import { AdapterQueryMsgBuilder } from '@abstract-money/core'
import { RegistryTypes } from '../../../codegen/abstract'
import { getAccountAddressFromApi } from './get-account-address-from-api'

export type GetAdapterAuthorizedAddresses = {
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  accountId: RegistryTypes.AccountId
  adapterAddress: string
}

export async function getAdapterAuthorizedAddresses({
  cosmWasmClient,
  accountId,
  adapterAddress,
  apiUrl,
}: GetAdapterAuthorizedAddresses) {
  const account = await getAccountAddressFromApi({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  return await cosmWasmClient.queryContractSmart(
    adapterAddress,
    AdapterQueryMsgBuilder.authorizedAddresses(account),
  )
}
