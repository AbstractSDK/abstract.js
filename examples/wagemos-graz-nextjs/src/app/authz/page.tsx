'use client'
import {
  BankTransactionTypeUrl,
  encodeAuthzExecMsg,
  encodeAuthzGrantGenericAuthorizationMsg,
  encodeAuthzGrantSendAuthorizationMsg,
  encodeBankSendMsg,
} from '@abstract-money/core/utils'
import { useSignAndBroadcast } from '@abstract-money/react'
import { useAccount } from 'graz'
import { useMemo } from 'react'
import { Button } from '../../components/ui/button'
import { WalletButton } from '../_components/wallet-button'

const GRANTER = 'osmo1jzyqffltm2s5wxmnjyze5hzrpcady0gmpz738n'
const GRANTEE = 'osmo1ak64euh4tyzetkny6t0y0v5tw47n3y6y0ys3md'

export default function AuthzPage() {
  const { mutate: signAndBroadcast } = useSignAndBroadcast({
    args: { chainName: 'osmosis' },
  })
  const { data: account } = useAccount({ chainId: 'osmosis-1' })

  const onGrantAuthzClick = useMemo(() => {
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
              { spendLimit: [{ denom: 'uosmo', amount: '100' }] },
            ),
          ],
        },
      })
    }
  }, [signAndBroadcast])

  const onTransferClick = useMemo(() => {
    if (!account) return undefined

    return () => {
      signAndBroadcast({
        fee: 'auto',
        args: {
          messages: [
            encodeAuthzExecMsg(account.bech32Address, [
              encodeBankSendMsg(GRANTER, account.bech32Address, [
                { denom: 'uosmo', amount: '100' },
              ]),
            ]),
          ],
        },
      })
    }
  }, [signAndBroadcast])

  return (
    <>
      <Button onClick={onGrantAuthzClick}> Grant AuthZ</Button>
      <Button onClick={onTransferClick}> Transfer</Button>
      <WalletButton />
    </>
  )
}
