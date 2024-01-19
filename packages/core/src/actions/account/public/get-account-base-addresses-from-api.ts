import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import { VersionControlTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id'
import { getVersionControlQueryClientFromApi } from '../../public/get-version-control-query-client-from-api'

export type GetAccountBaseAddressesFromApiParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getAccountBaseAddressesFromApi({
  args: { accountId, cosmWasmClient, apiUrl },
}: GetAccountBaseAddressesFromApiParameters) {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi({
    args: {
      cosmWasmClient,
      apiUrl,
    },
  })
  const { account_base: accountBase } =
    await versionControlQueryClient.accountBase({
      accountId: accountIdToParameter(accountId),
    })
  return {
    managerAddress: accountBase.manager,
    proxyAddress: accountBase.proxy,
  }
}
