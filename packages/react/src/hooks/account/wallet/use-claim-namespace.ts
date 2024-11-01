import { AccountWalletClient } from '@abstract-money/core/clients'
import { AccountId } from '@abstract-money/core/utils'
import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { DeliverTxResponse } from '@cosmjs/stargate'
import { useMutation } from '@tanstack/react-query'
import { useConfig } from '../../../contexts'
import { ExtractArgsFromParameters } from '../../../types/args'
import {
  UseMutationParameters,
  UseMutationReturnType,
} from '../../../types/queries'

type ClaimNamespaceMutation = ExtractArgsFromParameters<
  Parameters<AccountWalletClient['claimNamespace']>[0]
>

export type UseClaimNamespaceParameters = {
  accountId: AccountId | undefined
  chainName: string | undefined
  mutation?: UseMutationParameters<
    ExecuteResult,
    unknown,
    ClaimNamespaceMutation
  >
}

/**
 * Claim a namespace from version control on the account.
 * @param accountId
 * @param chainName
 * @param mutation
 */
export function useClaimNamespace({
  accountId,
  chainName,
  mutation,
}: UseClaimNamespaceParameters): UseMutationReturnType<
  ExecuteResult,
  unknown,
  ClaimNamespaceMutation
> {
  const config = useConfig()
  const accountClient = config.useAccountWalletClient({
    chainName,
    accountId,
  })
  return useMutation(
    ['claimNamespace', chainName, accountId],
    ({ args, ...cosmWasmSignOptions }) => {
      if (!accountClient) throw new Error('client is not defined')
      return accountClient.claimNamespace({ ...cosmWasmSignOptions, ...args })
    },
    mutation,
  )
}
