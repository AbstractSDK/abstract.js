import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { MigrateResult, SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { StdFee } from '@cosmjs/stargate'

interface UsUseMigrateMutationMutation {
  args: {
    client: SigningCosmWasmClient
    address: string
    contractAddress: string
    codeId: number
    migrateMsg: Record<string, unknown>
    fee?: StdFee | 'auto' | number
    memo?: string
  }
  options?: Omit<
    UseMutationOptions<MigrateResult, Error, UsUseMigrateMutationMutation['args']>,
    'mutationFn'
  >
}

export const useMigrateMutation = ({ options }: Omit<UsUseMigrateMutationMutation, 'args'> = {}) =>
  useMutation<MigrateResult, Error, UsUseMigrateMutationMutation['args']>(
    ({
      client,
      address,
      codeId,
      contractAddress,
      migrateMsg,
      fee = 'auto',
      memo,
    }: UsUseMigrateMutationMutation['args']) =>
      client.migrate(address, contractAddress, codeId, migrateMsg, fee, memo),
    options
  )
