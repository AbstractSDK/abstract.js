'use client'
import { AbstractAccountId } from '@abstract-money/core'
import { AbstractAccountIdContext } from '@abstract-money/react'
import { PropsWithChildren, ReactNode } from 'react'

export default function BetsLayout({
  //children,
  listRounds,
  createRound,
}: PropsWithChildren<{ listRounds: ReactNode; createRound: ReactNode }>) {
  return (
    <AbstractAccountIdContext accountId={AbstractAccountId.local('asd', 2)}>
      <section className="mt-10">
        <h1>Bets App</h1>
        <div className="mt-10">{listRounds}</div>
        <div className="mt-10">{createRound}</div>
      </section>
    </AbstractAccountIdContext>
  )
}
