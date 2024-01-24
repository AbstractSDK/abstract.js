import { Provider } from '@abstract-money/react'
import {
  type CosmWasmClient,
  type SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import { useChain } from '@cosmos-kit/react'
import { useEffect, useMemo, useState } from 'react'

export const cosmosKitProvider = {
  useCosmWasmClient(args?: { chainName?: string }) {
    const [client, setClient] = useState<CosmWasmClient | undefined>(undefined)
    const { getCosmWasmClient: _getCosmWasmClient } = useChain(
      args?.chainName ?? 'neutron',
    )

    const getCosmWasmClient = useMemo(() => {
      if (!args?.chainName) return undefined
      return _getCosmWasmClient
    }, [_getCosmWasmClient, args?.chainName])

    useEffect(() => {
      if (!getCosmWasmClient) return
      getCosmWasmClient().then((client) => setClient(client))
    }, [getCosmWasmClient])

    return client
  },
  useSigningCosmWasmClient(args?: { chainName?: string }) {
    const [client, setClient] = useState<SigningCosmWasmClient | undefined>(
      undefined,
    )
    const {
      getSigningCosmWasmClient: _getSigningCosmWasmClient,
      isWalletConnected,
    } = useChain(args?.chainName ?? 'neutron')

    const getSigningCosmWasmClient = useMemo(() => {
      if (!args?.chainName || !isWalletConnected) return undefined
      return _getSigningCosmWasmClient
    }, [_getSigningCosmWasmClient, args?.chainName])

    useEffect(() => {
      if (!getSigningCosmWasmClient) return
      getSigningCosmWasmClient().then((client) => setClient(client))
    }, [getSigningCosmWasmClient])

    return client
  },
  useSenderAddress(args?: { chainName?: string }) {
    const { address } = useChain(args?.chainName ?? 'neutron')

    return address
  },
} satisfies Provider
