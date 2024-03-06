import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  IbcClientQueryClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { WithArgs } from '../../../types/with-args'
import { CommonModuleNames } from '../../public/get-abstract-module-address-from-version-control'
import { getIbcClientQueryClient } from '../../public/get-ibc-client-query-client'
import { getModuleAddress } from './get-module-address'

export type GetModuleAddressParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

/**
 * Retrieve the {@link IbcClientQueryClient} from the manager account.
 * @throws if the IBC-client module is not installed
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 */
export async function getIbcClientQueryClientFromManager({
  args: { accountId, cosmWasmClient, apiUrl },
}: GetModuleAddressParameters) {
  const ibcClientAddress = await getModuleAddress({
    args: {
      accountId,
      cosmWasmClient,
      apiUrl,
      id: CommonModuleNames.IBC_CLIENT,
    },
  })

  if (!ibcClientAddress) {
    throw new Error('IBC-client module not installed')
  }

  return getIbcClientQueryClient({
    args: { cosmWasmClient, ibcClientAddress },
  })
}
