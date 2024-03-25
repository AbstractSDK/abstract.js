import { Provider } from '@abstract-money/react'
import { useChain } from '@cosmos-kit/react'
import { useEffect, useMemo, useState } from 'react'

/**
 * Such hack lets us calling `useChain` safely when a `chainName` is not passed,
 * as otherwise, `useChain` function throws an error.
 */
const USE_CHAIN_HACK_CHAIN_NAME = 'neutron'

export const cosmosKitProvider: Provider = {
  useCosmWasmClient(parameters) {
    const [client, setClient] =
      useState<ReturnType<Provider['useCosmWasmClient']>>(undefined)
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
  useSigningCosmWasmClient(parameters) {
    const [client, setClient] =
      useState<ReturnType<Provider['useSigningCosmWasmClient']>>(undefined)
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
