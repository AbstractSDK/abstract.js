import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { WithArgsAndCosmWasmSignOptions } from 'src/types/with-args'
import { VersionControlTypes } from '../../../codegen/abstract'
import { getVersionControlClientFromApi } from '../../wallet/get-version-control-client-from-api'
import { getNamespace } from '../public/get-namespace'

export type RemoveNamespaceParameters = WithArgsAndCosmWasmSignOptions<{
  accountId: VersionControlTypes.AccountId
  signingCosmWasmClient: SigningCosmWasmClient
  apiUrl: string
  sender: string
}>

export async function removeNamespace({
  args: { accountId, signingCosmWasmClient, apiUrl, sender },
  fee,
  memo,
  funds,
}: RemoveNamespaceParameters) {
  const versionControlClient = await getVersionControlClientFromApi({
    args: {
      signingCosmWasmClient,
      apiUrl,
      sender,
    },
  })
  const namespace = await getNamespace({
    args: { accountId, cosmWasmClient: signingCosmWasmClient, apiUrl },
  })
  if (!namespace) throw new Error('Namespace not found')

  return versionControlClient.removeNamespaces(
    { namespaces: [namespace] },
    fee,
    memo,
    funds,
  )
}
