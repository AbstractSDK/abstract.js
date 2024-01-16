import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getVersionControlQueryClientFromApi } from 'src/actions/public/version-control/get-version-control-query-client-from-api'
import { VersionControlTypes } from 'src/codegen/abstract'
import { accountIdToParameter } from 'src/utils/account-id'

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
