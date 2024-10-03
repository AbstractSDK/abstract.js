import semver from 'semver/preload'
import {
  AccountClient,
  AccountMsgComposer,
  AccountTypes,
  IbcClientTypes,
} from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { MaybeArray } from '../../../types/utils'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { encodeModuleMsg } from '../../../utils/modules/encode-module-msg'
import { CommonModuleNames } from '../../public/types'
import { getModuleAddress } from '../public/get-module-address'
import { getModuleVersion } from '../public/get-module-version'
import { executeOnModule } from './execute-on-module'
import { getAccountClientFromApi } from './get-account-client-from-api'
import { BaseAccountWalletParameters } from './types'

export type ExecuteIbcActionParameters = Omit<
  WithCosmWasmSignOptions<
    BaseAccountWalletParameters & {
      msg: IbcClientTypes.ExecuteMsg
    }
  >,
  'funds'
>

/**
 * Execute an IBC action directly as the Account. Must be called by the owner.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param managerMsg
 * @param fee
 * @param memo
 */
export async function executeIbcAction({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  msg,
  fee,
  memo,
}: ExecuteIbcActionParameters) {
  const ibcClientAddress = getModuleAddress({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
    id: abstractModuleId(CommonModuleNames.IBC_CLIENT),
  })

  if (!ibcClientAddress) {
    throw new Error(
      `${abstractModuleId(CommonModuleNames.IBC_CLIENT)} is not installed`,
    )
  }

  const accountClient = await getAccountClientFromApi({
    accountId,
    signingCosmWasmClient,
    sender,
    apiUrl,
  })
  return accountClient.ibcAction({ msg }, fee, memo)
}
