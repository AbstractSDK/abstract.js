'use client'

import { wagemos } from '~/generated/wagemos'

export default function ListRoundsPage() {
  const { data, isLoading, isError } = wagemos.queries.useListRounds()
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error</p>
  return (
    <div>
      <h4>List of Rounds:</h4>
      <ul>
        {data.rounds.map((round) => (
          <li key={round.id}>
            <p>{round.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
