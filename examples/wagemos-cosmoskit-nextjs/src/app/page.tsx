'use client'

import { stringToAccountId } from '@abstract-money/core'
import { betting } from '../_generated'
import { PlaceBetDialog } from './_components/place-bet-dialog'
import {
  Round,
  RoundBody,
  RoundDescription,
  RoundFooter,
  RoundHeader,
  RoundId,
  RoundName,
  RoundStatus,
  RoundTeamMember,
  RoundTeams,
  RoundTotalBet,
  RoundWinningTeam,
} from './_components/round'
import { WalletButton } from './_components/wallet-button'

export default function Home() {
  const { data, isLoading, isError } = betting.queries.useListRounds({
    args: {},
    accountId: stringToAccountId('neutron-18'),
    chainName: 'neutron',
  })
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error</p>
  return (
    <>
      <h1>WAGEMOS with cosmoskit</h1>
      <WalletButton />
      <div>
        <h4>List of Rounds:</h4>
        <div className="grid row-auto gap-2 md:grid-cols-2">
          {data.rounds.map((round) => {
            const status =
              typeof round.status === 'string'
                ? { status: round.status }
                : ({
                    status: 'closed',
                    winningTeam: round.status.closed.winning_team?.seq,
                  } as const)
            return (
              <Round key={round.id}>
                <RoundHeader>
                  <RoundName>{round.name}</RoundName>
                  <RoundId>ID: {round.id}</RoundId>
                  <RoundStatus open={status.status === 'open'}>
                    {status.status}
                  </RoundStatus>
                  {status.winningTeam && (
                    <RoundWinningTeam>
                      Winner Account Sequence: {status.winningTeam}
                    </RoundWinningTeam>
                  )}
                </RoundHeader>
                <RoundBody>
                  <RoundDescription>{round.description}</RoundDescription>
                  <p>Team members:</p>
                  <RoundTeams>
                    {round.teams.map((member, i) => (
                      <RoundTeamMember key={i}>
                        Account Seq: {member.seq}
                      </RoundTeamMember>
                    ))}
                  </RoundTeams>
                </RoundBody>
                <RoundFooter>
                  <RoundTotalBet>
                    Total Bet: {round.total_bet.amount} {round.total_bet.name}
                  </RoundTotalBet>
                  {status.status === 'open' && <PlaceBetDialog round={round} />}
                </RoundFooter>
              </Round>
            )
          })}
        </div>
      </div>
    </>
  )
}
