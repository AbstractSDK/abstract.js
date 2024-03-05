import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { VersionControlTypes } from '../../../codegen/abstract'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { getVersionControlClientFromApi } from '../../wallet/get-version-control-client-from-api'
import { getNamespace } from '../public/get-namespace'
import { BaseWalletParameters } from './types'

export type RevokeNamespaceParameters =
  WithArgsAndCosmWasmSignOptions<BaseWalletParameters>

export async function revokeNamespace({
  args: { accountId, signingCosmWasmClient, apiUrl, sender },
  fee,
  memo,
  funds,
}: RevokeNamespaceParameters) {
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
