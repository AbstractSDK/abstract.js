import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'

import { useSenderAddress } from '../hooks'
import { useSigningCosmWasmClient } from '../hooks/wallet/use-signing-cosm-wasm-client'

interface ModuleClientConstructor {
  new (
    client: SigningCosmWasmClient,
    sender: string,
    contractAddress: string,
  ): any
}

export function useModuleClient<
  TModule extends ModuleClientConstructor,
>(parameters: {
  contractAddress: string | undefined
  chainName: string | undefined
  Module: TModule
}) {
  const { contractAddress, Module, chainName } = parameters

  const {
    data: client,
    isLoading: isSigningCosmWasmClientLoading,
    isError: isSigningCosmWasmClientError,
    error: signingCosmWasmClientError,
  } = useSigningCosmWasmClient({ chainName })
  const {
    data: sender,
    isLoading: isSenderAddressLoading,
    isError: isSenderAddressError,
    error: senderAddressError,
  } = useSenderAddress({ chainName })

  const data = React.useMemo(() => {
    if (!client || !contractAddress || !sender) return undefined
    return new Module(client, sender, contractAddress) as InstanceType<TModule>
  }, [client, contractAddress])

  if (isSigningCosmWasmClientError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: signingCosmWasmClientError,
    } as const
  if (isSenderAddressError)
    return {
      data: undefined,
      isLoading: false,
      isError: true,
      isSuccess: false,
      error: senderAddressError,
    } as const
  if (isSigningCosmWasmClientLoading || isSenderAddressLoading)
    return {
      data: undefined,
      isLoading: true,
      isError: false,
      isSuccess: false,
    } as const
  return {
    data,
    isLoading: false,
    isError: false,
    isSuccess: true,
  } as const
}
