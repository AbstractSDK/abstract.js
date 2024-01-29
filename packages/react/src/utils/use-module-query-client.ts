import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'

import { useCosmWasmClient } from '../hooks/public/use-cosm-wasm-client'

interface ModuleQueryClientConstructor {
  new (client: CosmWasmClient, contractAddress: string): any
}

export function useModuleQueryClient<
  TModule extends ModuleQueryClientConstructor,
>(parameters: {
  contractAddress: string | undefined
  chainName: string | undefined
  Module: TModule
}) {
  const { contractAddress, Module, chainName } = parameters

  const { data: client, ...rest } = useCosmWasmClient({ chainName })

  const queryClient = React.useMemo(() => {
    if (!client || !contractAddress) return undefined
    return new Module(client, contractAddress) as InstanceType<TModule>
  }, [client, contractAddress])

  return { data: queryClient, ...rest }
}
