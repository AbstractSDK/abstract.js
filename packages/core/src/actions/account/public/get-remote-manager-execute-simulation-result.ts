import { jsonToBinary, jsonToUtf8 } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { connectComet } from '@cosmjs/tendermint-rpc'
import {
  ManagerTypes,
  ProxyTypes,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { CosmosMsgForEmpty } from '../../../codegen/abstract/cosmwasm-codegen/Proxy.types'
import { MaybeArray } from '../../../types/utils'
import { simulateWasmCosmosMsgs } from '../../../utils/cosmos'
import { rawQuery } from '../../../utils/cosmwasm/raw-query'
import { getChainRpcUrlFromApi } from '../../get-chain-rpc-from-api'
import { getCosmWasmClientFromApi } from '../../get-cosmwasm-client-from-api'
import { getRemoteSimulationResultFromApi } from '../../get-remote-simulation-result-from-api'
import { getVersionControlAddressFromApi } from '../../get-version-control-address-from-api'
import { getIbcHostAddressFromVersionControl } from '../../public/get-ibc-host-address-from-version-control'
import { getProxyQueryClient } from '../../public/get-proxy-query-client'
import { getRemoteAccountProxies } from './get-remote-account-proxies'

export type GetRemoteSimulationResultParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  remoteChainName: string
  managerMsg: ManagerTypes.ExecuteMsg
}

type ChainName = string
type MaybeProxyAddress = string | null

/**
 * Simulate messages to be executed on a remote account on a remote chain. This should be run before calling `{@link AccountPublicClient#executeRemote}`
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 * @param remoteChainName
 * @param msgs
 */
export async function getRemoteManagerExecuteSimulationResult({
  accountId,
  cosmWasmClient,
  apiUrl,
  remoteChainName,
  managerMsg,
}: GetRemoteSimulationResultParameters) {
  const remoteProxies = await getRemoteAccountProxies({
    accountId,
    cosmWasmClient,
    apiUrl,
  })

  const remoteProxy = remoteProxies[remoteChainName]
  if (!remoteProxy) {
    throw new Error(`No remote proxy found for chain ${remoteChainName}`)
  }

  const remoteCwClient = await getCosmWasmClientFromApi({
    apiUrl,
    chainName: remoteChainName,
  })

  const remoteManager = await rawQuery<string>({
    cosmWasmClient: remoteCwClient,
    address: remoteProxy,
    key: 'admin',
  })

  const cosmosManagerMsg: CosmosMsgForEmpty = {
    wasm: {
      execute: {
        contract_addr: remoteManager,
        funds: [],
        msg: jsonToBinary(managerMsg),
      },
    },
  }

  return getRemoteSimulationResultFromApi({
    apiUrl,
    remoteChainName,
    msgs: cosmosManagerMsg,
  })
}
