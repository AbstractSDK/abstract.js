import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  VersionControlClient,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { SliceFirst } from '../../../types/utils'
import { accountIdToParameter } from '../../../utils/account-id'
import { getVersionControlClientFromApi } from '../../wallet/get-version-control-client-from-api'

export async function claimNamespace(
  accountId: VersionControlTypes.AccountId,
  signingCosmWasmClient: SigningCosmWasmClient,
  apiUrl: string,
  sender: string,
  namespace: string,
  ...rest: SliceFirst<
    Parameters<typeof VersionControlClient.prototype.claimNamespace>
  >
) {
  const versionControlClient = await getVersionControlClientFromApi(
    signingCosmWasmClient,
    apiUrl,
    sender,
  )
  return versionControlClient.claimNamespace(
    { accountId: accountIdToParameter(accountId), namespace },
    ...rest,
  )
}
