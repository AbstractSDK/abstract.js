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

type SimulateExecuteRemoteManagerMutation = Parameters<
  AccountPublicClient['simulateExecuteRemoteManager']
>[0]

type SimulatedReturn = Awaited<
  ReturnType<AccountPublicClient['simulateExecuteRemoteManager']>
>

export type UseSimulateExecuteRemoteManagerParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    SimulatedReturn,
    unknown,
    SimulateExecuteRemoteManagerMutation
  >
}

/**
 * Simulate a message to be executed on a manager on a remote chain.
 * @param accountId
 * @param chainName
 * @param mutation
 */
export function useSimulateExecuteRemoteManager({
  accountId,
  chainName,
  mutation,
}: UseSimulateExecuteRemoteManagerParameters): UseMutationReturnType<
  SimulatedReturn,
  unknown,
  SimulateExecuteRemoteManagerMutation
> {
  const config = useConfig()
  const accountClient = config.useAccountPublicClient({
    chainName,
    accountId,
  })

  return useMutation(
    ['simulateExecuteRemoteManager', chainName, accountId],
    ({ ...params }) => {
      if (!accountClient) throw new Error('client is not defined')
      return accountClient.simulateExecuteRemoteManager({ ...params })
    },
    mutation,
  )
}
