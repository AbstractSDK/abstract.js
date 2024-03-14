import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { getVersionControlClientFromApi } from '../../wallet/get-version-control-client-from-api'
import { getNamespace } from '../public/get-namespace'

export type RevokeNamespaceParameters = WithCosmWasmSignOptions<{
  accountId: VersionControlTypes.AccountId
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}>

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

  return versionControlClient.removeNamespaces(
    { namespaces: [namespace] },
    fee,
    memo,
    funds,
  )
}
