import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getAccountBaseAddressesFromApi } from 'src/actions/account/public/get-account-base-addresses-from-api.js'
import { VersionControlTypes } from 'src/codegen/abstract/index.js'
import { SliceFirst, SliceFirstThree } from '../../types/utils.js'
import { Client } from '../create-client.js'

export type AccountPublicActions = {
  getAccountBaseAddresses(
    ...args: SliceFirstThree<Parameters<typeof getAccountBaseAddressesFromApi>>
  ): ReturnType<typeof getAccountBaseAddressesFromApi>
}

export function accountPublicActions(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  { apiUrl }: Client,
): AccountPublicActions {
  return {
    getAccountBaseAddresses: () =>
      getAccountBaseAddressesFromApi(accountId, cosmWasmClient, apiUrl),
  }
}
