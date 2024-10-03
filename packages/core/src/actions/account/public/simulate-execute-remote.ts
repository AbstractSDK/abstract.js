import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { MaybeArray } from 'src/types/utils'
import { VersionControlTypes } from '../../../codegen/abstract'
import { CosmosMsgForEmpty } from '../../../codegen/abstract/cosmwasm-codegen/Account.types'
import { executeOnProxyMsg } from '../../../utils/modules/encode-module-msg'
import { simulateExecuteRemoteAccount } from './simulate-execute-remote-account'

export type SimulateExecuteRemoteParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  hostChainName: string
  msgs: MaybeArray<CosmosMsgForEmpty>
}

/**
 * Simulate messages to be executed on a remote proxy on a remote chain. This should be run before calling `{@link AccountPublicClient#executeRemote}`
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 * @param remoteChainName
 * @experimental
 */
export async function simulateExecuteRemote({
  accountId,
  cosmWasmClient,
  apiUrl,
  hostChainName,
  msgs,
}: SimulateExecuteRemoteParameters) {
  return simulateExecuteRemoteAccount({
    apiUrl,
    accountId,
    cosmWasmClient,
    hostChainName,
    accountMsg: executeOnProxyMsg(msgs),
  })
}
