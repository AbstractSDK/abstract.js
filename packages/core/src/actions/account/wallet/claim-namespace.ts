import { ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { RegistryClient } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { accountIdToParameter } from '../../../utils/account-id'
import { getRegistryClientFromApi } from '../../wallet/get-registry-client-from-api'

export type ClaimNamespaceParameters = WithCosmWasmSignOptions<
  {
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    namespace: string
  } & Parameters<typeof RegistryClient.prototype.claimNamespace>[0]
>

export async function claimNamespace({
  signingCosmWasmClient,
  apiUrl,
  namespace,
  sender,
  accountId,
  fee,
  funds,
  memo,
}: ClaimNamespaceParameters): Promise<ExecuteResult> {
  const registryClient = await getRegistryClientFromApi({
    signingCosmWasmClient,
    apiUrl,
    sender,
  })
  return registryClient.claimNamespace(
    { accountId: accountIdToParameter(accountId), namespace },
    fee,
    memo,
    funds,
  )
}
