import { cosmosWasmExecuteMsg, jsonToBinary } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { ManagerTypes, VersionControlTypes } from '../../../codegen/abstract'
import { CosmosMsgForEmpty } from '../../../codegen/abstract/cosmwasm-codegen/Proxy.types'
import { rawQuery } from '../../../utils'
import { getCosmWasmClientFromApi } from '../../get-cosmwasm-client-from-api'
import { simulateRemoteMsg } from '../../simulate-remote-msg'
import { getRemoteAccountProxies } from './get-remote-account-proxies'

export type SimulateExecuteRemoteManagerParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  hostChainName: string
  managerMsg: ManagerTypes.ExecuteMsg
}

/**
 * Simulate messages to be executed on a remote account on a remote chain. This should be run before calling `{@link AccountPublicClient#executeRemote}`
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 * @param hostChainName
 * @param managerMsg
 * @experimental
 */
export async function simulateExecuteRemoteManager({
  accountId,
  cosmWasmClient,
  apiUrl,
  hostChainName,
  managerMsg,
}: SimulateExecuteRemoteManagerParameters) {
  const remoteProxies = await getRemoteAccountProxies({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  const remoteProxy = remoteProxies[hostChainName]
  if (!remoteProxy) {
    throw new Error(`No remote proxy found for chain ${hostChainName}`)
  }

  const remoteCwClient = await getCosmWasmClientFromApi({
    apiUrl,
    chainName: hostChainName,
  })

  const remoteManager = await rawQuery<string>({
    cosmWasmClient: remoteCwClient,
    address: remoteProxy,
    key: 'admin',
  })

  const cosmosManagerMsg: CosmosMsgForEmpty = cosmosWasmExecuteMsg(
    remoteManager,
    managerMsg,
    [],
  )

  return simulateRemoteMsg({
    apiUrl,
    hostChainName,
    msgs: cosmosManagerMsg,
  })
}
