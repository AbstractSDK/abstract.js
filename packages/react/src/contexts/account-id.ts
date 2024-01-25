import { AccountId } from '@abstract-money/core'
import dedent from 'dedent'
import * as React from 'react'

type AbstractAccountIdContext = {
  accountId: AccountId
  setAccountId: (accountId: AccountId) => void
}

const Context = React.createContext<AbstractAccountIdContext | undefined>(
  undefined,
)

/**
 * Since account id can be resolved both statically and dynamically, and SDK
 * consumer is not obligated to set one at the initialization time, the context
 * is exported as a separate entity to be used whenever needed.
 */
export function AbstractAccountIdProvider({
  children,
  accountId: defaultAccountId,
}: React.PropsWithChildren<{ accountId: AccountId }>) {
  const [accountId, setAccountId] = React.useState<AccountId>(defaultAccountId)
  // Bailing out of using JSX
  // https://github.com/egoist/tsup/issues/390#issuecomment-933488738
  return React.createElement(Context.Provider, {
    children,
    value: { accountId, setAccountId },
  })
}

/**
 * Hook to retrieve the provided Account id from the {@link AbstractAccountIdProvider} context.
 * @param accountId the Account id to set if the context is not provided.
 */
export function useAccountId({ accountId }: { accountId?: AccountId } = {}) {
  let accountStore = React.useContext(Context)
  if (!accountStore)
    if (accountId)
      accountStore = {
        accountId,
        setAccountId: () => {
          throw new Error('noop')
        },
      }
    else
      throw new Error(
        dedent`Cannot find \`accountId\`.

              Did you forget to wrap the component in a \`<AbstractAccountIdProvider>\`?
              Or you did not pass \`accountId\` as a parameter to one of your methods?
              `,
      )
  return accountStore
}
