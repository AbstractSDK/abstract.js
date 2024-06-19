import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { connectComet } from '@cosmjs/tendermint-rpc'
import { ProxyTypes, VersionControlTypes } from '../../../codegen/abstract'
import { MaybeArray } from '../../../types/utils'
import { simulateWasmCosmosMsgs } from '../../../utils/cosmos'
import { getChainRpcUrlFromApi } from '../../get-chain-rpc-from-api'
import { getVersionControlAddressFromApi } from '../../get-version-control-address-from-api'
import { getIbcHostAddressFromVersionControl } from '../../public/get-ibc-host-address-from-version-control'
import { getRemoteAccountProxies } from './get-remote-account-proxies'

export type GetRemoteSimulationResultParameters = {
  accountId: VersionControlTypes.AccountId
  cosmWasmClient: CosmWasmClient
  apiUrl: string
  remoteChainName: string
  msgs: MaybeArray<ProxyTypes.CosmosMsgForEmpty>
}

type ChainName = string
type MaybeProxyAddress = string | null

/**
 * Simulate messages to be executed on a remote chain. This should be run before calling `{@link AccountPublicClient#executeRemote}`
 * @param accountId
 * @param cosmWasmClient
 * @param apiUrl
 * @param remoteChainName
 * @param msgs
 */
export async function getRemoteSimulationResult({
  accountId,
  cosmWasmClient,
  apiUrl,
  remoteChainName,
  msgs,
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

  // TODO: these queries could be combined
  const remoteVcAddress = await getVersionControlAddressFromApi({
    apiUrl,
    chainName: remoteChainName,
  })

  const remoteEndpoint = await getChainRpcUrlFromApi({
    apiUrl,
    chainName: remoteChainName,
  })

  const remoteComet = await connectComet(remoteEndpoint)

  const remoteCwClient = await CosmWasmClient.create(remoteComet)

  const ibcHostAddress = await getIbcHostAddressFromVersionControl({
    cosmWasmClient: remoteCwClient,
    versionControlAddress: remoteVcAddress,
  })

  return simulateWasmCosmosMsgs(
    remoteComet,
    Array.isArray(msgs) ? msgs : [msgs],
    ibcHostAddress,
  )
}
