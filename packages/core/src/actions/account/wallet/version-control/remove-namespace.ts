import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getVersionControlClientFromApi } from 'src/actions/wallet/version-control/get-version-control-client-from-api'
import { VersionControlClient, VersionControlTypes } from 'src/codegen/abstract'
import { SliceFirst } from 'src/types/utils'
import { getNamespace } from '../../public/version-control/get-namespace'

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
