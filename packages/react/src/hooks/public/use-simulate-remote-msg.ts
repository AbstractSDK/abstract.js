import { PublicClient } from '@abstract-money/core'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../contexts'
import {
  UseMutationParameters,
  UseMutationReturnType,
} from '../../types/queries'

type SimulateRemoteMutation = Parameters<PublicClient['simulateRemoteMsg']>[0]

export type UseSimulateRemoteMsgParameters = {
  chainName: string | undefined
  mutation?: UseMutationParameters<
    Awaited<ReturnType<PublicClient['simulateRemoteMsg']>>,
    unknown,
    SimulateRemoteMutation
  >
}

type SimulatedReturn = Awaited<ReturnType<PublicClient['simulateRemoteMsg']>>

/**
 * Simulate a message to be executed on a remote chain by the ibc host.
 * @param chainName local chain name
 * @param mutation
 */
export function useSimulateRemoteMsg({
  chainName,
  mutation,
}: UseSimulateRemoteMsgParameters): UseMutationReturnType<
  SimulatedReturn,
  unknown,
  SimulateRemoteMutation
> {
  const config = useConfig()
  const accountClient = config.usePublicClient({
    chainName,
  })

  return useMutation(
    ['simulateRemoteMsg', chainName],
    ({ ...params }) => {
      if (!accountClient) throw new Error('accountClient is not defined')
      return accountClient.simulateRemoteMsg({
        ...params,
      })
    },
    mutation,
  )
}
