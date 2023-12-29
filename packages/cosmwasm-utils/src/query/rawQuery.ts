import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { fromAscii, toAscii } from '@cosmjs/encoding'

type RawQuery = {
  client: CosmWasmClient | undefined
  address: string
  key: string
}
/**
 * Perform a rawQuery on a contract.
 * @param readOnlyClient
 * @param address
 * @param key - contract key like "contract_info"
 */
export const rawQuery = async <TResponse = unknown>({
  client,
  address,
  key,
}: RawQuery): Promise<TResponse> => {
  if (!client) return Promise.reject(new Error('No readonly client'))
  return client.queryContractRaw(address, toAscii(key)).then((response) => {
    if (!response) return response
    try {
      const res = JSON.parse(fromAscii(response))
      return res
    } catch (e) {
      console.error('Could not parse response', e, fromAscii(response))
    }
  })
}
