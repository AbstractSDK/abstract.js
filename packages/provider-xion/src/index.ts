import { Provider } from '@abstract-money/react'
import {
  useAbstraxionAccount,
  useAbstraxionSigningClient,
} from '@burnt-labs/abstraxion'
import { useQuery } from '@tanstack/react-query'
import { cosmWasmClientQueryOptions } from './cosmwasm'

const XION_TESTNET_CHAIN_NAME = 'xiontestnet'

export const xionProvider: Provider = {
  useSenderAddress() {
    const { data } = useAbstraxionAccount()
    return data?.bech32Address
  },
  useSigningCosmWasmClient() {
    const { client } = useAbstraxionSigningClient()
    return client
  },
  useCosmWasmClient(args) {
    // TODO: retrieve the xion chain name from the abstraxion config when they expose the hook
    const chainName = args?.chainName ?? XION_TESTNET_CHAIN_NAME

    const { data: client } = useQuery(cosmWasmClientQueryOptions(chainName))

    return client
  },
}
