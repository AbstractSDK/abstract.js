import { AccountId } from '@abstract-money/core'
import { MutationOptions, QueryOptions } from '@tanstack/react-query'
import { WithArgs } from 'src/types/utils'

export function parseParameters<
  TFirstParameter extends
    | { accountId: AccountId | undefined }
    | TOptions
    | undefined,
  TOptions extends
    | Omit<MutationOptions<any, any, any, any>, 'mutationFn'>
    | Omit<QueryOptions<any, any, any, any>, 'queryFn'>,
  TResult extends {
    accountId: TFirstParameter extends { accountId: AccountId | undefined }
      ? TFirstParameter['accountId']
      : never
    options: TOptions | undefined
    passesAccountId: TFirstParameter extends {
      accountId: AccountId | undefined
    }
      ? true
      : false
  },
>(arg1: TFirstParameter, arg2: TOptions | undefined) {
  if (arg1 && 'accountId' in arg1)
    return { ...(arg1 as any), options: arg2, passesAccountId: true } as TResult
  return {
    accountId: undefined,
    options: arg1 as any,
    passesAccountId: false,
  } as TResult
}

export function parseParametersWithArgs<
  TArgs extends {} | readonly unknown[],
  TWithArgs extends WithArgs<TArgs> &
    (
      | {
          accountId: AccountId | undefined
        }
      | {}
    ),
  TOptions extends
    | Omit<MutationOptions<any, any, any, any>, 'mutationFn'>
    | Omit<QueryOptions<any, any, any, any>, 'queryFn'>,
  TResult extends {
    accountId: TWithArgs extends { accountId: AccountId | undefined }
      ? TWithArgs['accountId']
      : never
    args: TWithArgs['args']
    options: TOptions | undefined
    passesAccountId: boolean
  },
>(arg1: TWithArgs | Omit<TWithArgs, 'accountId'>, arg2: TOptions | undefined) {
  if ('accountId' in arg1) {
    const { accountId, args } = arg1
    return { accountId, args, options: arg2, passesAccountId: true } as TResult
  }
  return {
    args: arg1.args,
    options: arg2,
    passesAccountId: false,
  } as TResult
}
