'use client'

import { wagemos } from '~/generated/wagemos.graz'

export default function CreateRound() {
  const { isLoading, isError } = wagemos.queries.useListRounds()
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error</p>
  return (
    <div>
      <h4>Create Round:</h4>
    </div>
  )
}
