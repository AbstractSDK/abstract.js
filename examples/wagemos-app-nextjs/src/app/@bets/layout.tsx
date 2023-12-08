'use client'
import { AbstractAccountId } from '@abstract-money/core'
import { AbstractAccountIdContext } from '@abstract-money/react'
import { PropsWithChildren, ReactNode } from 'react'

export default function BetsLayout({
  children,
}: PropsWithChildren<{ children: ReactNode }>) {
  return (
    <AbstractAccountIdContext accountId={AbstractAccountId.local('asd', 2)}>
      <section className="mt-10">
        <div className="mt-10">{children}</div>
      </section>
    </AbstractAccountIdContext>
  )
}
