import { type CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import React, { type FC, type PropsWithChildren, useContext } from 'react'
import { type Tendermint34Client } from '@cosmjs/tendermint-rpc'
import { type StargateClient } from '@cosmjs/stargate'
import { useCosmWasmClient, useStargateClient, useTendermintClient } from './useRpcClientHooks'
import { BatchCosmWasmClientOptions } from '@abstract-money/cosmwasm'

interface UseRpcClients {
  readOnlyClient: CosmWasmClient | undefined
  tmClient: Tendermint34Client | undefined
  stargateClient: StargateClient | undefined
}

const context = React.createContext<UseRpcClients>({} as UseRpcClients)

export const useRpcClients = () => {
  const c = useContext(context)
  if (!c) throw new Error(`ReadonlyClientProvider must be inside a provider with a value`)
  return c
}

const _ReadonlyClientProvider = context.Provider

interface ReadonlyClientProviderProps {
  rpcUrl: string
  suspense?: boolean
  options?: {
    useBatchClient?: boolean
    batchClientOptions?: BatchCosmWasmClientOptions
  }
}
/**
 * Provides the "readonly" clients that simply connect with the RPC of the current network.
 */
export const RpcClientProvider: FC<PropsWithChildren<ReadonlyClientProviderProps>> = ({
  rpcUrl,
  suspense,
  children,
  options,
}) => {
  const { client: readOnlyClient } = useCosmWasmClient(rpcUrl, { suspense, ...options })
  const { client: stargateClient } = useStargateClient(rpcUrl, { suspense })
  const { client: tendermintClient } = useTendermintClient(rpcUrl, { suspense })

  return (
    <_ReadonlyClientProvider
      value={{
        readOnlyClient,
        stargateClient,
        tmClient: tendermintClient,
      }}
    >
      {children}
    </_ReadonlyClientProvider>
  )
}
