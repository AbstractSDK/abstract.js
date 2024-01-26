import { AccountId } from '@abstract-money/core'
import { MutationOptions } from '@tanstack/react-query'

export function parseParameters<
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
