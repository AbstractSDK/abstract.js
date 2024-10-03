import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id'
import { getVersionControlQueryClientFromApi } from '../../public/get-version-control-query-client-from-api'

export type GetAccountAddressFromApiParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getAccountAddressFromApi({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetAccountAddressFromApiParameters) {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })
  const { account } = await versionControlQueryClient.account({
    accountId: accountIdToParameter(accountId),
  })
  return {
    account,
  }
}
