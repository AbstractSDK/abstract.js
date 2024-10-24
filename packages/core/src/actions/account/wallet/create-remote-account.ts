import { IbcClientTypes } from '../../../codegen/abstract'
import { WithCosmWasmSignOptions } from '../../../types/parameters'
import { executeIbcAction } from './execute-ibc-action'
import { BaseAccountWalletParameters } from './types'

export type CreateRemoteAccountParameters = Omit<
  WithCosmWasmSignOptions<
    BaseAccountWalletParameters &
      Omit<
        Extract<IbcClientTypes.ExecuteMsg, { register: unknown }>['register'],
        'host_chain' | 'install_modules'
      > & {
        hostChainName: string
        // for some reason we cannot use the `install_modules` type from the IbcClientTypes
        installModules?: IbcClientTypes.ModuleInstallConfig[]
      }
  >,
  'funds'
>

/**
 * Create a remote account.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param hostChainName
 * @param registerMsgParams
 * @param fee
 * @param memo
 */
export async function createRemoteAccount({
  accountId,
  signingCosmWasmClient,
  apiUrl,
  sender,
  fee,
  memo,
  hostChainName,
  installModules,
  namespace,
}: CreateRemoteAccountParameters) {
  const registerMsg: IbcClientTypes.ExecuteMsg = {
    register: {
      host_chain: hostChainName,
      install_modules: installModules ?? [],
      namespace,
    },
  }

  return executeIbcAction({
    accountId,
    signingCosmWasmClient,
    apiUrl,
    sender,
    msg: registerMsg,
    fee,
    memo,
  })
}
