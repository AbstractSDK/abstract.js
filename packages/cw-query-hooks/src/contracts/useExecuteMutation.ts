import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { ExecuteResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useMergeDefaultMutationOptions } from 'react-query-helpers'
import { ExecuteInstruction } from '@cosmjs/cosmwasm-stargate/build/signingcosmwasmclient'
import { Coin } from '@cosmjs/stargate'

interface ExecuteParams {
  client: SigningCosmWasmClient
  sender: string
  contractAddress: string
  msg: Record<string, unknown>
  memo?: string
  funds?: readonly Coin[]
}

interface ExecuteMultipleParams extends Omit<ExecuteParams, 'msg' | 'contractAddress'> {
  instructions: readonly ExecuteInstruction[]
}

/**
 * Execute a msg on a contract.
 * Merges the default mutation options with the provided options.
 * @param options
 */
export const useExecuteMutation = (
  options?: Omit<UseMutationOptions<ExecuteResult, Error, ExecuteParams>, 'mutationFn'>
) => {
  const { mergeWithDefaults } = useMergeDefaultMutationOptions()
  const execMutation = useMutation<ExecuteResult, Error, ExecuteParams>(
    ({ client, sender, contractAddress, msg, memo, funds }: ExecuteParams) =>
      client.execute(sender, contractAddress, msg, 'auto', memo, funds),
    mergeWithDefaults(options)
  )

  return {
    execMutation,
  }
}

export const useExecuteMultipleMutation = (
  options?: Omit<UseMutationOptions<ExecuteResult, Error, ExecuteMultipleParams>, 'mutationFn'>
) => {
  const { mergeWithDefaults } = useMergeDefaultMutationOptions()
  const execMultipleMutation = useMutation<ExecuteResult, Error, ExecuteMultipleParams>(
    [],
    ({ client, sender, instructions, memo }: ExecuteMultipleParams) =>
      client.executeMultiple(sender, instructions, 'auto', memo),
    mergeWithDefaults(options)
  )

  return {
    execMultipleMutation,
  }
}
