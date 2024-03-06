import { IbcClientTypes, ProxyTypes } from '../../../codegen/abstract'
import { CallbackInfo } from '../../../codegen/abstract/cosmwasm-codegen/IbcClient.types'
import { ModuleType } from '../../../codegen/gql/graphql'
import { MaybeArray } from '../../../types/utils'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { CommonModuleNames } from '../../public/get-abstract-module-address-from-version-control'
import { getModuleAddress } from '../public/get-module-address'
import { executeOnModule } from './execute-on-module'
import { BaseWalletParameters } from './types'

export type ExecuteIbcActionParameters = Omit<
  WithArgsAndCosmWasmSignOptions<
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
  args: { accountId, signingCosmWasmClient, apiUrl, sender, msgs },
  fee,
  memo,
}: ExecuteIbcActionParameters) {
  const ibcClientAddress = getModuleAddress({
    args: {
      accountId,
      cosmWasmClient: signingCosmWasmClient,
      apiUrl,
      id: CommonModuleNames.IBC_CLIENT,
    },
  })

  if (!ibcClientAddress) {
    throw new Error('abstract:ibc-client is not installed')
  }

  const proxyMsg: ProxyTypes.ExecuteMsg = {
    ibc_action: {
      msgs: Array.isArray(msgs) ? msgs : [msgs],
    },
  }

  return executeOnModule({
    args: {
      accountId,
      signingCosmWasmClient,
      apiUrl,
      sender,
      moduleId: 'abstract:proxy',
      moduleType: ModuleType.AccountBase,
      moduleMsg: proxyMsg,
    },
    fee,
    memo,
  })
}
