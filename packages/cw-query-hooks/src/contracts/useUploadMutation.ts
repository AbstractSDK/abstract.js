import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { StdFee } from '@cosmjs/stargate'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { UploadResult } from '@cosmjs/cosmwasm-stargate/build/signingcosmwasmclient'

interface UseUploadContractMutationProps {
  args: {
    client: SigningCosmWasmClient
    address: string
    wasmCode: Uint8Array
    fee?: StdFee | 'auto' | number
    memo?: string
  }
  options?: Omit<
    UseMutationOptions<UploadResult, Error, UseUploadContractMutationProps['args']>,
    'mutationFn'
  >
}

export const useUploadMutation = ({ options }: Omit<UseUploadContractMutationProps, 'args'> = {}) =>
  useMutation<UploadResult, Error, UseUploadContractMutationProps['args']>(
    ({ client, address, wasmCode, fee = 'auto', memo }: UseUploadContractMutationProps['args']) =>
      client.upload(address, wasmCode, fee, memo),
    options
  )
