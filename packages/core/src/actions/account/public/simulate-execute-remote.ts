import { cosmosWasmExecuteMsg, jsonToBinary } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { MaybeArray } from 'src/types/utils'
import {
  AccountTypes,
  ManagerExecuteMsgBuilder,
  ProxyExecuteMsgBuilder,
  ProxyTypes,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { CosmosMsgForEmpty } from '../../../codegen/abstract/cosmwasm-codegen/Proxy.types'
import { rawQuery } from '../../../utils'
import { abstractModuleId } from '../../../utils/modules/abstract-module-id'
import {
  encodeModuleMsg,
  executeOnModuleMsg,
  executeOnProxyMsg,
} from '../../../utils/modules/encode-module-msg'
import { getCosmWasmClientFromApi } from '../../get-cosmwasm-client-from-api'
import { CommonModuleNames } from '../../public/types'
import { simulateRemoteMsg } from '../../simulate-remote-msg'
import { getRemoteAccountProxies } from './get-remote-account-proxies'
import { simulateExecuteRemoteManager } from './simulate-execute-remote-manager'

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
  return simulateExecuteRemoteManager({
    apiUrl,
    accountId,
    cosmWasmClient,
    hostChainName,
    managerMsg: executeOnProxyMsg(msgs),
  })
}
