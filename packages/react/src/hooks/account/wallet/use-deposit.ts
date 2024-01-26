import { AccountId, AccountWalletClient } from '@abstract-money/core'
import { DeliverTxResponse } from '@cosmjs/stargate'
import {
  MutationOptions,
  UseMutationOptions,
  UseMutationResult,
  useMutation,
} from '@tanstack/react-query'
import { useAccountId, useConfig } from '../../../contexts'

type DepositMutation = Parameters<AccountWalletClient['deposit']>[0]

function parseParameters<
  TOptions extends Omit<MutationOptions<any, any, any, any>, 'mutationFn'>,
  TResult extends {
    accountId: AccountId | undefined
    options: TOptions | undefined
    passesAccountId: boolean
  },
>(
  arg1: { accountId: AccountId | undefined } | TOptions | undefined,
  arg2: TOptions | undefined,
) {
  if (Object.hasOwnProperty.call(arg1, 'accountId'))
    return { ...arg1, options: arg2, passesAccountId: true } as TResult
  return {
    accountId: undefined,
    options: arg1,
    passesAccountId: false,
  } as TResult
}

export function useDeposit(
  { accountId }: { accountId: AccountId | undefined },
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, DepositMutation>
export function useDeposit(
  options?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, DepositMutation>
/**
 * Hook to deposit assets to an Account.
 * @param options deposit options.
 */
export function useDeposit(
  arg1?:
    | { accountId: AccountId | undefined }
    | Omit<
        UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
        'mutationFn'
      >,
  arg2?: Omit<
    UseMutationOptions<DeliverTxResponse, unknown, DepositMutation>,
    'mutationFn'
  >,
): UseMutationResult<DeliverTxResponse, unknown, DepositMutation> {
  const { accountId: accountIdParameter, options } = parseParameters(arg1, arg2)
  const { accountId } = useAccountId({ accountId: accountIdParameter })
  const config = useConfig()
  const accountWalletClient = config.useAccountWalletClient({
    accountId,
    chainName: accountId?.chainName,
  })
  return useMutation(({ ...rest }) => {
    if (!accountWalletClient) throw new Error('client is not defined')
    return accountWalletClient.deposit(rest)
  }, options)
}
