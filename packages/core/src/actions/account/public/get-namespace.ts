import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryTypes } from '../../../codegen/abstract'
import { accountIdToParameter } from '../../../utils/account-id'
import { getRegistryQueryClientFromApi } from '../../public/get-registry-query-client-from-api'

export type GetNamespaceParameters = {
  accountId: RegistryTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
}

export async function getNamespace({
  accountId,
  cosmWasmClient,
  apiUrl,
}: GetNamespaceParameters): Promise<string | null> {
  const registryQueryClient = await getRegistryQueryClientFromApi({
    cosmWasmClient,
    apiUrl,
  })
  const namespace = await registryQueryClient
    .namespaces({ accounts: [accountIdToParameter(accountId)] })
    .then((x) => x.namespaces[0]?.[0])

  return namespace ?? null
}
