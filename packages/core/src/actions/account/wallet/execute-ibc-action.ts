import { IbcClientTypes, ProxyTypes } from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { MaybeArray } from '../../../types/utils'
import { CommonModuleNames } from '../../public/types'
import { getModuleAddress } from '../public/get-module-address'
import { executeOnModule } from './execute-on-module'
import { BaseWalletParameters } from './types'

export type ExecuteIbcActionParameters = Omit<
  WithCosmWasmSignOptions<
    BaseWalletParameters & {
      msgs: MaybeArray<IbcClientTypes.ExecuteMsg>
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
  msgs,
  fee,
  memo,
}: ExecuteIbcActionParameters) {
  const ibcClientAddress = getModuleAddress({
    accountId,
    cosmWasmClient: signingCosmWasmClient,
    apiUrl,
    id: CommonModuleNames.IBC_CLIENT,
  })

  if (!ibcClientAddress) {
    throw new Error(`${CommonModuleNames.IBC_CLIENT} is not installed`)
  }

  const proxyMsg: ProxyTypes.ExecuteMsg = {
    ibc_action: {
      msgs: Array.isArray(msgs) ? msgs : [msgs],
    },
  }

  return executeOnModule({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    moduleId: 'abstract:proxy',
    moduleType: ModuleType.AccountBase,
    moduleMsg: proxyMsg,
    fee,
    memo,
  })
}
