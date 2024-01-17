import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  VersionControlClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { SliceFirst } from '../../../types/utils'
import { getVersionControlClientFromApi } from '../../wallet/get-version-control-client-from-api'
import { getNamespace } from '../public/get-namespace'

export async function removeNamespace(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
  ...rest: SliceFirst<
    Parameters<typeof VersionControlClient.prototype.removeNamespaces>
  >
) {
  const versionControlClient = await getVersionControlClientFromApi(
    signingCosmWasmClient,
    apiUrl,
    sender,
  )
  const namespace = await getNamespace(accountId, signingCosmWasmClient, apiUrl)
  if (!namespace) throw new Error('Namespace not found')

  return versionControlClient.removeNamespaces(
    { namespaces: [namespace] },
    ...rest,
  )
}
