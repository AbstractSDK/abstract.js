import { AccountId } from '@abstract-money/core'
import { MutationOptions } from '@tanstack/react-query'

function hasAccountId(
  obj: object | undefined,
): obj is { accountId: AccountId } {
  if (!obj) return false
  return Object.prototype.hasOwnProperty.call(obj, 'accountId')
}

export function parseAccountIdArgs<
  TOptions extends MutationOptions<any, any, any, any>,
  TReturn extends { options: TOptions; accountId: AccountId | undefined } = {
    options: TOptions
    accountId: AccountId | undefined
  },
>(
  arg1: { accountId: AccountId | undefined } | TOptions | undefined,
  arg2?: TOptions,
): TReturn {
  if (hasAccountId(arg1)) {
    return { ...arg1, options: arg2 } as TReturn
  }

  return { options: arg1, accountId: undefined } as TReturn
}
