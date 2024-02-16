'use client'
import {
  BankTransactionTypeUrl,
  encodeAuthzGrantGenericAuthorizationMsg,
  encodeAuthzGrantSendAuthorizationMsg,
} from '@abstract-money/core/utils'
import { useSignAndBroadcast } from '@abstract-money/react'
import { useAccount } from 'graz'
import { useMemo } from 'react'
import { Button } from '../../components/ui/button'
import { WalletButton } from '../_components/wallet-button'

const GRANTEE = 'osmo1ak64euh4tyzetkny6t0y0v5tw47n3y6y0ys3md'

export default function AuthzPage() {
  const { mutate: signAndBroadcast } = useSignAndBroadcast({
    args: { chainName: 'osmosis' },
  })
  const { data: account } = useAccount({ chainId: 'osmosis-1' })

  const onClick = useMemo(() => {
    if (!account) return undefined

    return () => {
      signAndBroadcast({
        fee: 'auto',
        args: {
          messages: [
            encodeAuthzGrantGenericAuthorizationMsg(
              account.bech32Address,
              GRANTEE,
              BankTransactionTypeUrl.Send,
            ),
            encodeAuthzGrantSendAuthorizationMsg(
              account.bech32Address,
              GRANTEE,
              { spendLimit: [{ denom: 'osmo', amount: '100' }] },
            ),
          ],
        },
      })
    }
  }, [signAndBroadcast])

  return (
    <>
      <Button onClick={onClick}> Grant AuthZ</Button>
      <WalletButton />
    </>
  )
}
