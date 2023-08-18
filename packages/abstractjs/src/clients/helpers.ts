import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { fromAscii, toAscii } from '@cosmjs/encoding'

/**
 * Perform a rawQuery on a contract.
 * @param readOnlyClient
 * @param address
 * @param key - contract key like "contract_info"
 */
export const rawQuery = async <TResponse = unknown>({
  readOnlyClient,
  address,
  key,
}: {
  readOnlyClient: CosmWasmClient | undefined
  address: string
  key: string
}): Promise<TResponse> => {
  if (!readOnlyClient) return Promise.reject(new Error('No readonly client'))
  return readOnlyClient.queryContractRaw(address, toAscii(key)).then((response) => {
    if (!response) return response
    try {
      const res = JSON.parse(fromAscii(response))
      return res
    } catch (e) {
      console.error('Could not parse response', e, fromAscii(response))
    }
  })
}
