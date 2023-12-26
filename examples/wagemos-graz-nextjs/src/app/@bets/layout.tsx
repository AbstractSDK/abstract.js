'use client'
import { AbstractAccountId } from '@abstract-money/core'
import { AbstractAccountIdProvider } from '@abstract-money/react'
import { PropsWithChildren, ReactNode } from 'react'

export default function BetsLayout({
  children,
}: PropsWithChildren<{ children: ReactNode }>) {
  return (
    <AbstractAccountIdProvider
      accountId={AbstractAccountId.fromStringId('neutron-18')}
    >
      <section className="mt-10">
        <div className="mt-10">{children}</div>
      </section>
    </AbstractAccountIdProvider>
  )
}
