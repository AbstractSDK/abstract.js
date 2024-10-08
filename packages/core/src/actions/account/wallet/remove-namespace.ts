import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getRegistryClientFromApi } from '../../wallet/get-registry-client-from-api'
import { getNamespace } from '../public/get-namespace'
import { BaseAccountWalletParameters } from './types'

export type RevokeNamespaceParameters =
  WithCosmWasmSignOptions<BaseAccountWalletParameters>

export async function revokeNamespace({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  funds,
}: RevokeNamespaceParameters) {
  const registryClient = await getRegistryClientFromApi({
    signingCosmWasmClient,
    apiUrl,
    sender,
  })
  const namespace = await getNamespace({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
  })
  if (!namespace) throw new Error('Namespace not found')

  return registryClient.forgoNamespace(
    { namespaces: [namespace] },
    fee,
    memo,
    funds,
  )
}
