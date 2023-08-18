import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import {
  InstantiateOptions,
  InstantiateResult,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate'
import { StdFee } from '@cosmjs/stargate'

interface UseInstantiateMutation {
  args: {
    client: SigningCosmWasmClient
    address: string
    codeId: number
    initMsg: Record<string, unknown>
    label: string
    fee?: StdFee | 'auto' | number
    options?: InstantiateOptions
  }
  options?: Omit<
    UseMutationOptions<InstantiateResult, Error, UseInstantiateMutation['args']>,
    'mutationFn'
  >
}

export const useInstantiateMutation = ({ options }: Omit<UseInstantiateMutation, 'args'> = {}) =>
  useMutation<InstantiateResult, Error, UseInstantiateMutation['args']>(
    ({
      client,
      address,
      codeId,
      initMsg,
      label,
      fee = 'auto',
      options: instantiateOptions,
    }: UseInstantiateMutation['args']) =>
      client.instantiate(address, codeId, initMsg, label, fee, instantiateOptions),
    options
  )

interface TheArgs {
  client: SigningCosmWasmClient
  address: string
  codeId: number
  initMsg: Record<string, unknown>
  label: string
  fee?: StdFee | 'auto' | number
  options?: InstantiateOptions
}

export const useOtherInstantiateMutation = (
  options?: Omit<UseMutationOptions<InstantiateResult, Error, TheArgs>, 'mutationFn'>
): UseMutationResult<InstantiateResult, Error, TheArgs> => {
  return useMutation<InstantiateResult, Error, TheArgs>(
    ({
      client,
      address,
      codeId,
      initMsg,
      label,
      fee = 'auto',
      options: instantiateOptions,
    }: TheArgs) => client.instantiate(address, codeId, initMsg, label, fee, instantiateOptions),
    options
  )
}
