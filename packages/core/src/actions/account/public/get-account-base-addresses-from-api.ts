import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id'
import { getVersionControlQueryClientFromApi } from '../../public/get-version-control-query-client-from-api'

export type GetAccountBaseAddressesFromApiParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getAccountBaseAddressesFromApi({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetAccountBaseAddressesFromApiParameters) {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })
  const { account: accountBase } = await versionControlQueryClient.accountBase({
    accountId: accountIdToParameter(accountId),
  })
  return {
    managerAddress: accountBase.manager,
    proxyAddress: accountBase.proxy,
  }
}
