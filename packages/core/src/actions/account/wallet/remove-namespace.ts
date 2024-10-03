import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getVersionControlClientFromApi } from '../../wallet/get-version-control-client-from-api'
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
  const versionControlClient = await getVersionControlClientFromApi({
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

  return versionControlClient.forgoNamespace(
    { namespaces: [namespace] },
    fee,
    memo,
    funds,
  )
}
