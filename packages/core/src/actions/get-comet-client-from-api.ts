import { Comet38Client } from '@cosmjs/tendermint-rpc'
import { getChainRpcUrlFromApi } from './get-chain-rpc-from-api'

export type GetCometClientFromApiParameters = {
  apiUrl: string
  chainName: string
}

export async function getCometClientFromApi({
  apiUrl,
  chainName,
}: GetCometClientFromApiParameters) {
  const remoteEndpoint = await getChainRpcUrlFromApi({
    apiUrl,
    chainName,
  })

  return await Comet38Client.connect(remoteEndpoint)
}
