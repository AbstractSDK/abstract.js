'use client'

import { wagemos } from '~/generated/wagemos'

export default function BetsPage() {
  const { data, isLoading } = wagemos.queries.useListRounds()
  if (isLoading) return <p>Loading...</p>
  console.log(data)
  return (
    <ul>
      {data!.rounds.map((round) => (
        <li key={round.id}>
          <p>{round.name}</p>
        </li>
      ))}
    </ul>
  )
}
