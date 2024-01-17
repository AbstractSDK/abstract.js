import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id'
import { getVersionControlQueryClientFromApi } from '../../public/get-version-control-query-client-from-api'

export async function getAccountBaseAddressesFromApi(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
) {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi(
    cosmWasmClient,
    apiUrl,
  )
  const { account_base: accountBase } =
    await versionControlQueryClient.accountBase({
      accountId: accountIdToParameter(accountId),
    })
  return {
    managerAddress: accountBase.manager,
    proxyAddress: accountBase.proxy,
  }
}
