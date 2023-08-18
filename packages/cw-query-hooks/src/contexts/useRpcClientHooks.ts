import { Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { QueryKey } from '@tanstack/query-core'
import { defaultContext, useQuery } from '@tanstack/react-query'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { StargateClient } from '@cosmjs/stargate'
import { KeyedReactQueryOptions } from 'react-query-helpers'
import { BatchCosmWasmClient, BatchCosmWasmClientOptions } from '@abstract-money/cosmwasm'

export const clientKeys = {
  client: (networkId: string) => ['client', networkId] as const,
  cosmWasm: (networkId: string) => [...clientKeys.client(networkId), 'cosmwasm'] as const,
  tendermint: (networkId: string) => [...clientKeys.client(networkId), 'tendermint'] as const,
  stargate: (networkId: string) => [...clientKeys.client(networkId), 'stargate'] as const,
  custom: (customName: string, networkId: string) =>
    [...clientKeys.client(networkId), customName] as const,
} as const

/**
 * Generic hook that can return a readonly client based on the network rpc.
 */
export const useNetworkClient = <TClient, QKey extends QueryKey>({
  rpcUrl,
  queryKey,
  queryFn,
  options,
}: {
  rpcUrl: string
  queryKey: (id: string) => QKey
  queryFn: (rpc: string) => Promise<TClient>
  options?: KeyedReactQueryOptions<TClient, QKey>
}) => {
  const { data: client } = useQuery<TClient, Error, TClient, QKey>(
    queryKey(rpcUrl),
    () => queryFn(rpcUrl),
    {
      // allow overriding
      onError: (e) => {
        console.error(`Failed to connect to${rpcUrl}`, e)
        throw e
      },
      context: defaultContext,
      ...options,
    }
  )
  return { client }
}

export const useTendermintClient = (
  rpcUrl: string,
  options?: KeyedReactQueryOptions<Tendermint34Client, ReturnType<typeof clientKeys['tendermint']>>
) =>
  useNetworkClient({
    rpcUrl,
    queryKey: clientKeys.tendermint,
    queryFn: (rpc) => Tendermint34Client.connect(rpc),
    options,
  })

export const useCosmWasmClient = (
  rpcUrl: string,
  options?: KeyedReactQueryOptions<CosmWasmClient, ReturnType<typeof clientKeys['cosmWasm']>> & {
    useBatchClient?: boolean
    batchClientOptions?: BatchCosmWasmClientOptions
  }
) =>
  useNetworkClient({
    rpcUrl,
    queryKey: clientKeys.cosmWasm,
    queryFn: (rpc) =>
      options?.useBatchClient
        ? BatchCosmWasmClient.connect(rpc, options?.batchClientOptions)
        : CosmWasmClient.connect(rpc),
    options,
  })

export const useStargateClient = (
  rpcUrl: string,
  options?: KeyedReactQueryOptions<StargateClient, ReturnType<typeof clientKeys['stargate']>>
) =>
  useNetworkClient({
    rpcUrl,
    queryKey: clientKeys.stargate,
    queryFn: async (rpc) => StargateClient.connect(rpc),
    options,
  })
