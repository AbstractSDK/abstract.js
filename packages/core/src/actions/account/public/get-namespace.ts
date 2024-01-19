import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgs } from 'src/types/with-args'
import { VersionControlTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id'
import { getVersionControlQueryClientFromApi } from '../../public/get-version-control-query-client-from-api'

export type GetNamespaceParameters = WithArgs<{
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}>

export async function getNamespace({
  args: { accountId, cosmWasmClient, apiUrl },
}: GetNamespaceParameters): Promise<string | null> {
  const versionControlQueryClient = await getVersionControlQueryClientFromApi({
    args: {
      cosmWasmClient,
      apiUrl,
    },
  })
  const namespace = await versionControlQueryClient
    .namespaces({ accounts: [accountIdToParameter(accountId)] })
    .then((x) => x.namespaces[0]?.[0])

  return namespace ?? null
}
