import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getVersionControlQueryClientFromApi } from 'src/actions/public/version-control/get-version-control-query-client-from-api'
import { VersionControlTypes } from 'src/codegen/abstract'
import { accountIdToParameter } from 'src/utils/account-id'

export async function getNamespace(
  accountId: VersionControlTypes.AccountId,
  cosmWasmClient: CosmWasmClient,
  apiUrl: string,
): Promise<string | null> {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi(
    cosmWasmClient,
    apiUrl,
  )
  const namespace = await versionControlQueryClient
    .namespaces({ accounts: [accountIdToParameter(accountId)] })
    .then((x) => x.namespaces[0]?.[0])

  return namespace ?? null
}
