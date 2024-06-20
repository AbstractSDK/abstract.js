import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { getCometClientFromApi } from './get-comet-client-from-api'

export type GetCosmWasmClientFromApiParameters = {
  apiUrl: string
  chainName: string
}

export async function getCosmWasmClientFromApi({
  apiUrl,
  chainName,
}: GetCosmWasmClientFromApiParameters) {
  const remoteComet = await getCometClientFromApi({
    apiUrl,
    chainName,
  })

  return await CosmWasmClient.create(remoteComet)
}
