import {
  AccountId,
  accountIdToString,
  stringToAccountId,
} from '@abstract-money/core'
import dedent from 'dedent'
import * as React from 'react'
import { Prettify } from '../types/utils'

const noop = () => {
  throw new Error('noop')
}

type AbstractAccountIdContext = {
  accountId: AccountId
  setAccountId: (accountId: AccountId) => void
  persistKey?: string
}

type AbstractAccountIdContextWithPartialAccountId = Prettify<
  Omit<AbstractAccountIdContext, 'accountId'> & {
    accountId: AbstractAccountIdContext['accountId'] | undefined
  }
>
const Context =
  React.createContext<AbstractAccountIdContextWithPartialAccountId>({
    accountId: undefined,
    setAccountId: noop,
  })

/**
 * Since account id can be resolved both statically and dynamically, and SDK
 * consumer is not obligated to set one at the initialization time, the context
 * is exported as a separate entity to be used whenever needed.
 */
export function AbstractAccountIdProvider({
  children,
  accountId: defaultAccountId,
  persistKey,
}: React.PropsWithChildren<{ accountId: AccountId; persistKey?: string }>) {
  const [accountId, setAccountId_] = React.useState<AccountId>(() => {
    if (typeof window === 'undefined') return defaultAccountId
    if (persistKey) {
      const item = window.localStorage.getItem(persistKey)
      if (item) return stringToAccountId(item)
      return defaultAccountId
    }
    return defaultAccountId
  })

  const setAccountId = React.useCallback<(accountId: AccountId) => void>(
    (accountId) => {
      setAccountId_(accountId)
      if (typeof window === 'undefined' || !persistKey) return

      window.localStorage.setItem(persistKey, accountIdToString(accountId))
    },
    [],
  )

  // Bailing out of using JSX
  // https://github.com/egoist/tsup/issues/390#issuecomment-933488738
  return React.createElement(Context.Provider, {
    children,
    value: { accountId, persistKey, setAccountId },
  })
}

/**
 * Hook to retrieve the provided Account id from the {@link AbstractAccountIdProvider} context.
 * @param accountId the Account id to set if the context is not provided.
 */
export function useAccountId(options: {
  accountId: AccountId | undefined
}): AbstractAccountIdContextWithPartialAccountId
export function useAccountId(): AbstractAccountIdContext
export function useAccountId<
  TParameters extends [{ accountId: AccountId | undefined }] | [],
  TResult extends TParameters extends [any]
    ? AbstractAccountIdContext
    : AbstractAccountIdContext | AbstractAccountIdContextWithPartialAccountId,
>(...parameters: TParameters): TResult {
  // Load the context
  const accountStore = React.useContext(Context)
  return React.useMemo(() => {
    // If a parameter is passed, short exit from the function
    if (parameters[0])
      return {
        accountId: parameters[0].accountId,
        setAccountId: noop,
      } as unknown as TResult

    // If parameter is not passed, we suppose that the data has to be retrieved from the context
    if (!accountStore.accountId)
      throw new Error(
        dedent`Can't retrieve \`accountId\`.

              Did you forget to wrap the component in a \`<AbstractAccountIdProvider>\`?
              Or maybe you did not pass \`accountId\` as a parameter to one of your hooks?
              `,
      )
    return accountStore as TResult
  }, [parameters, accountStore])
}
