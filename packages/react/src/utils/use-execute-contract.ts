import type {
  ExecuteResult,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import type { Coin } from '@cosmjs/proto-signing'
import type { StdFee } from '@cosmjs/stargate'
import { useMutation } from '@tanstack/react-query'
import * as React from 'react'

interface MutationEventArgs<TInitial = unknown, TSuccess = TInitial> {
  onError?: (error: unknown, data: TInitial) => unknown
  onLoading?: (data: TInitial) => unknown
  onSuccess?: (data: TSuccess) => unknown
}

type UseExecuteContractArgs<Message extends Record<string, unknown>> = {
  contractAddress: string | undefined
} & MutationEventArgs<ExecuteContractMutationArgs<Message>, ExecuteResult>

interface ExecuteContractArgs<Message extends Record<string, unknown>> {
  signingClient: SigningCosmWasmClient
  msg: Message
  fee: StdFee | 'auto' | number
  senderAddress: string
  contractAddress: string | undefined
  funds: Coin[]
  memo: string
}

type ExecuteContractMutationArgs<Message extends Record<string, unknown>> =
  Omit<
    ExecuteContractArgs<Message>,
    'contractAddress' | 'fee' | 'funds' | 'memo'
  > & {
    fee?: StdFee | 'auto' | number
    funds?: Coin[]
    memo?: string
  }

const executeContract = async <Message extends Record<string, unknown>>({
  signingClient,
  senderAddress,
  msg,
  fee,
  contractAddress,
  funds,
  memo,
}: {
  signingClient: SigningCosmWasmClient
  msg: Message
  fee: StdFee | 'auto' | number
  senderAddress: string
  contractAddress: string | undefined
  funds: Coin[]
  memo: string
}) => {
  if (!signingClient) {
    throw new Error('CosmWasm signing client is not ready')
  }

  if (!senderAddress) {
    throw new Error('senderAddress is not ready')
  }

  if (!contractAddress) {
    throw new Error('contractAddress is not ready')
  }

  return signingClient.execute(
    senderAddress,
    contractAddress,
    msg,
    fee,
    memo,
    funds,
  )
}

export const useExecuteContract = <Message extends Record<string, unknown>>({
  contractAddress,
  onError,
  onLoading,
  onSuccess,
}: UseExecuteContractArgs<Message>) => {
  const mutationFn = React.useCallback(
    (args: ExecuteContractMutationArgs<Message>) => {
      const executeArgs: ExecuteContractArgs<Message> = {
        ...args,
        fee: args.fee ?? 'auto',
        contractAddress,
        memo: args.memo ?? '',
        funds: args.funds ?? [],
      } as const

      return executeContract(executeArgs)
    },
    [contractAddress],
  )

  const mutation = useMutation(
    ['USE_EXECUTE_CONTRACT', onError, onLoading, onSuccess, contractAddress],
    mutationFn,
    {
      onError: (err, data) => Promise.resolve(onError?.(err, data)),
      onMutate: onLoading,
      onSuccess: (executeResult) => Promise.resolve(onSuccess?.(executeResult)),
    },
  )

  return {
    error: mutation.error,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    executeContract: mutation.mutate,
    executeContractAsync: mutation.mutateAsync,
    status: mutation.status,
  } as const
}
