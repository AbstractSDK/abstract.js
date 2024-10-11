import {
  AccountPublicClient,
  AccountWalletClient,
} from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import {
  UseMutationParameters,
  UseMutationReturnType,
} from '../../../types/queries'

type SimulateExecuteRemoteAccountMutation = Parameters<
  AccountPublicClient['simulateExecuteRemoteAccount']
>[0]

type SimulatedReturn = Awaited<
  ReturnType<AccountPublicClient['simulateExecuteRemoteAccount']>
>

export type UseSimulateExecuteRemoteAccountParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    SimulatedReturn,
    unknown,
    SimulateExecuteRemoteAccountMutation
  >
}

/**
 * Simulate a message to be executed on a manager on a remote chain.
 * @param accountId
 * @param chainName
 * @param mutation
 */
export function useSimulateExecuteRemoteAccount({
  accountId,
  chainName,
  mutation,
}: UseSimulateExecuteRemoteAccountParameters): UseMutationReturnType<
  SimulatedReturn,
  unknown,
  SimulateExecuteRemoteAccountMutation
> {
  const config = useConfig()
  const accountClient = config.useAccountPublicClient({
    chainName,
    accountId,
  })

  return useMutation(
    ['simulateExecuteRemoteAccount', chainName, accountId],
    ({ ...params }) => {
      if (!accountClient) throw new Error('client is not defined')
      return accountClient.simulateExecuteRemoteAccount({ ...params })
    },
    mutation,
  )
}
