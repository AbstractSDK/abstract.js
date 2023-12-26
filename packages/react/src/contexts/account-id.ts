import { AbstractAccountId } from '@abstract-money/core'
import * as React from 'react'

type AbstractAccountIdContext = {
  accountId: AbstractAccountId
  setAccountId: (accountId: AbstractAccountId) => void
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
}: React.PropsWithChildren<{ accountId: AbstractAccountId }>) {
  const [accountId, setAccountId] =
    React.useState<AbstractAccountId>(defaultAccountId)
  // Bailing out of using JSX
  // https://github.com/egoist/tsup/issues/390#issuecomment-933488738
  return React.createElement(Context.Provider, {
    children,
    value: { accountId, setAccountId },
  })
}

export function useAccountId() {
  const accountStore = React.useContext(Context)
  if (!accountStore)
    throw new Error(
      '`useAccountId` must be used within `AbstractAccountIdContext`.',
    )
  return accountStore
}
