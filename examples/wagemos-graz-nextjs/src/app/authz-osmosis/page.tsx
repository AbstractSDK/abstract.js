'use client'
import {
  BankTransactionTypeUrl,
  encodeAuthzExecMsg,
  encodeAuthzGrantGenericAuthorizationMsg,
  encodeAuthzGrantSendAuthorizationMsg,
  encodeBankSendMsg,
  stringToAccountId,
} from '@abstract-money/core/utils'

import {
  useAccountFactoryQueryClientFromApi,
  useCreateAccountMonarchy,
  useSignAndBroadcast,
} from '@abstract-money/react'
import { useAccount } from 'graz'
import { useCallback, useEffect, useMemo } from 'react'
import { Button } from '../../components/ui/button'
import { WalletButton } from '../_components/wallet-button'
import { prepareInstantiateMsg } from './_utils/prepare-instantiate-msg'

const GRANTER = 'osmo1jzyqffltm2s5wxmnjyze5hzrpcady0gmpz738n'
const GRANTEE = 'osmo1ak64euh4tyzetkny6t0y0v5tw47n3y6y0ys3md'

export default function AuthzPage() {
  useEffect(() => {
    prepareInstantiateMsg()
  }, [])

  const { mutate: signAndBroadcast } = useSignAndBroadcast({
    args: { chainName: 'osmosis' },
  })
  const { data: account } = useAccount({ chainId: 'osmosis-1' })

  const { data: accountFactory, isLoading } =
    useAccountFactoryQueryClientFromApi('osmosis')

  const { mutate: createAccount } = useCreateAccountMonarchy({
    args: { chainName: 'osmosis' },
  })

  const onCreateAccount = useCallback(async () => {
    if (!accountFactory || !account)
      throw new Error('no account factory or account')

    const config = await accountFactory.config()
    const sequence = config.local_account_sequence + 1

    createAccount({
      fee: 'auto',
      args: {
        name: 'funny-squid',
        accountId: stringToAccountId(`local-${sequence}`, 'osmosis'),
        owner: account.bech32Address,
      },
    })
  }, [accountFactory])

  const onGrantAuthzClick = useMemo(() => {
    if (!account) return undefined

    return () => {
      signAndBroadcast({
        fee: 'auto',
        args: {
          messages: [
            ...[
              '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
              '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
              '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition',
              '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
              '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
              '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
            ].map((typeUrl) =>
              encodeAuthzGrantGenericAuthorizationMsg(
                account.bech32Address,
                GRANTEE,
                typeUrl,
              ),
            ),
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
      {isLoading ? (
        'Loading'
      ) : (
        <Button onClick={onCreateAccount}>Create Account</Button>
      )}
      <WalletButton />
    </>
  )
}
