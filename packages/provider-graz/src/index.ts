import { chainNameToId } from '@abstract-money/core/utils'
import { Provider } from '@abstract-money/react'
import { useAccount, useCosmWasmClient, useCosmWasmSigningClient } from 'graz'

export const grazProvider = {
  useCosmWasmClient: (
    parameters: Parameters<Provider['useCosmWasmClient']>[0],
  ) =>
    useCosmWasmClient(
      parameters?.chainName
        ? { chainId: chainNameToId(parameters.chainName) }
        : undefined,
    ).data,
  useSigningCosmWasmClient: (
    parameters: Parameters<Provider['useSigningCosmWasmClient']>[0],
  ) =>
    useCosmWasmSigningClient(
      parameters?.chainName
        ? { chainId: chainNameToId(parameters.chainName) }
        : undefined,
    ).data,
  useSenderAddress: (parameters: Parameters<Provider['useSenderAddress']>[0]) =>
    useAccount(
      parameters?.chainName
        ? { chainId: chainNameToId(parameters.chainName) }
        : undefined,
    ).data?.bech32Address,
} satisfies Provider
