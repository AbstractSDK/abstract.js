'use client'
import { AbstractAccountId } from '@abstract-money/core'
import { AbstractAccountIdContext } from '@abstract-money/react'
import { PropsWithChildren } from 'react'

export default function BetsLayout(props: PropsWithChildren) {
  return (
    <AbstractAccountIdContext
      accountId={AbstractAccountId.local('asd', 2)}
      {...props}
    />
  )
}
