import { Provider } from '@abstract-money/react'
import {
  type CosmWasmClient,
  type SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import { useChain } from '@cosmos-kit/react'
import { useEffect, useMemo, useState } from 'react'

/**
 * Such hack lets us calling `useChain` safely when a `chainName` is not passed,
 * as otherwise, `useChain` function throws an error.
 */
const USE_CHAIN_HACK_CHAIN_NAME = 'neutron'

export const cosmosKitProvider = {
  useCosmWasmClient(parameters: Parameters<Provider['useCosmWasmClient']>[0]) {
    const [client, setClient] = useState<CosmWasmClient | undefined>(undefined)
    const { getCosmWasmClient: _getCosmWasmClient } = useChain(
      parameters?.chainName ?? USE_CHAIN_HACK_CHAIN_NAME,
    )

    const getCosmWasmClient = useMemo(() => {
      if (!parameters?.chainName) return undefined
      return _getCosmWasmClient
    }, [_getCosmWasmClient, parameters?.chainName])

    useEffect(() => {
      if (!getCosmWasmClient) return
      getCosmWasmClient().then((client) => setClient(client))
    }, [getCosmWasmClient])

    return client
  },
  useSigningCosmWasmClient(
    parameters: Parameters<Provider['useSigningCosmWasmClient']>[0],
  ) {
    const [client, setClient] = useState<SigningCosmWasmClient | undefined>(
      undefined,
    )
    const {
      getSigningCosmWasmClient: _getSigningCosmWasmClient,
      isWalletConnected,
    } = useChain(parameters?.chainName ?? USE_CHAIN_HACK_CHAIN_NAME)

    const getSigningCosmWasmClient = useMemo(() => {
      if (!parameters?.chainName || !isWalletConnected) return undefined
      return _getSigningCosmWasmClient
    }, [_getSigningCosmWasmClient, parameters?.chainName])

    useEffect(() => {
      if (!getSigningCosmWasmClient) return
      getSigningCosmWasmClient().then((client) => setClient(client))
    }, [getSigningCosmWasmClient])

    return client
  },
  useSenderAddress(parameters: Parameters<Provider['useSenderAddress']>[0]) {
    const { address } = useChain(
      parameters?.chainName ?? USE_CHAIN_HACK_CHAIN_NAME,
    )

    return useMemo(
      () => (!parameters?.chainName ? undefined : address),
      [address, parameters?.chainName],
    )
  },
} satisfies Provider
