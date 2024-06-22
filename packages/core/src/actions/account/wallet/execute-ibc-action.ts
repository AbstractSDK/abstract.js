import semver from 'semver/preload'
import { IbcClientTypes, ProxyTypes } from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { MaybeArray } from '../../../types/utils'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import { CommonModuleNames } from '../../public/types'
import { getModuleAddress } from '../public/get-module-address'
import { getModuleVersion } from '../public/get-module-version'
import { executeOnModule } from './execute-on-module'
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

  const proxyVersion = await getModuleVersion({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
    id: abstractModuleId(CommonModuleNames.PROXY),
  })

  const isNewerThanV022 = proxyVersion
    ? semver.minor(proxyVersion.version) >= 22
    : true

  let proxyMsg
  if (isNewerThanV022) {
    proxyMsg = {
      ibc_action: {
        msg,
      },
    } satisfies ProxyTypes.ExecuteMsg
  } else {
    // older versions accept an array
    proxyMsg = {
      ibc_action: {
        msgs: [msg],
      },
    }
  }

  console.log('proxyMsg', proxyMsg)

  return executeOnModule({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    moduleId: abstractModuleId(CommonModuleNames.PROXY),
    moduleType: ModuleType.AccountBase,
    moduleMsg: proxyMsg,
    fee,
    memo,
  })
}
