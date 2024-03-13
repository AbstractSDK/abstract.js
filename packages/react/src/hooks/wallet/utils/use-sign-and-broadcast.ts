import { EncodeObject } from '@cosmjs/proto-signing'
import { DeliverTxResponse, StdFee } from '@cosmjs/stargate'
import { useMutation } from '@tanstack/react-query'
import { UseMutationParameters } from '../../../types/queries'
import { useSenderAddress } from '../use-sender-address'
import { useSigningCosmWasmClient } from '../use-signing-cosm-wasm-client'

type SignAndBroadcastMutation = {
  readonly fee: number | StdFee | 'auto'
  readonly memo?: string | undefined
  args: {
    messages: readonly EncodeObject[]
  }
}

export function useSignAndBroadcast(
  { args: { chainName } }: { args: { chainName: string } },
  options?: UseMutationParameters<
    DeliverTxResponse,
    unknown,
    SignAndBroadcastMutation
  >,
) {
  const { data: signingCosmWasmClient } = useSigningCosmWasmClient({
    chainName,
  })

  const { data: senderAddress } = useSenderAddress({ chainName })

  return useMutation(({ args, fee, memo }) => {
    if (!signingCosmWasmClient || !senderAddress)
      throw new Error('signingCosmWasmClient or senderAddress are not defined')
    return signingCosmWasmClient?.signAndBroadcast(
      senderAddress,
      args.messages,
      fee,
      memo,
    )
  }, options)
}
