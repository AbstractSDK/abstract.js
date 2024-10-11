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
  useCreateAccountMonarchy,
  useSignAndBroadcast,
} from '@abstract-money/react'
import { useModuleInstantiate2Address } from '@abstract-money/react'
import { useAccount } from 'graz'
import React, { useCallback, useEffect, useMemo } from 'react'
import { Button } from '../../components/ui/button'
import { WalletButton } from '../_components/wallet-button'
import { prepareInstantiateMsg } from './_utils/prepare-instantiate-msg'

const GRANTER = 'osmo18k2uq7srsr8lwrae6zr0qahpn29rsp7tswpc4g'

const CHAIN_NAME = 'osmosis'
const TEST_SAVINGS_ACCOUNT_ID = 'osmosis-48'
const SAVINGS_APP_MODULE_ID = 'abstract:carrot-app'
export default function AuthzPage() {
  useEffect(() => {
    prepareInstantiateMsg()
  }, [])

  const { mutate: signAndBroadcast } = useSignAndBroadcast({
    args: { chainName: CHAIN_NAME },
  })
  const { data: account } = useAccount({ chainId: 'osmosis-1' })

  const { mutate: createAccount } = useCreateAccountMonarchy({
    chainName: CHAIN_NAME,
  })

  const onCreateAccount = useCallback(async () => {
    if (!account) throw new Error('no account factory or account')

    createAccount({
      fee: 'auto',
      args: {
        name: 'funny-squid',
        owner: account.bech32Address,
      },
    })
  }, [account])

  const { data: savingsAppAddress } = useModuleInstantiate2Address({
    accountId: stringToAccountId(TEST_SAVINGS_ACCOUNT_ID, CHAIN_NAME),
    chainName: CHAIN_NAME,
    args: {
      moduleId: SAVINGS_APP_MODULE_ID,
    },
    query: { enabled: true },
  })

  console.log('calculated savings app address', savingsAppAddress)

  const onGrantAuthzClick = useMemo(() => {
    if (!account) {
      console.error('no account')
      return undefined
    }
    if (!savingsAppAddress) {
      console.error('no module grantee')
      return undefined
    }

    return () => {
      signAndBroadcast({
        fee: 'auto',
        args: {
          messages: [
            ...[
              '/osmosis.concentratedliquidity.v1beta1.MsgCreatePosition',
              '/osmosis.poolmanager.v1beta1.MsgSplitRouteSwapExactAmountIn',
              '/osmosis.gamm.v1beta1.MsgSwapExactAmountIn',
              '/osmosis.concentratedliquidity.v1beta1.MsgAddToPosition',
              '/osmosis.concentratedliquidity.v1beta1.MsgWithdrawPosition',
              '/osmosis.concentratedliquidity.v1beta1.MsgCollectIncentives',
              '/osmosis.concentratedliquidity.v1beta1.MsgCollectSpreadRewards',
            ].map((typeUrl) =>
              encodeAuthzGrantGenericAuthorizationMsg(
                account.bech32Address,
                savingsAppAddress,
                typeUrl,
              ),
            ),
            encodeAuthzGrantGenericAuthorizationMsg(
              account.bech32Address,
              savingsAppAddress,
              BankTransactionTypeUrl.Send,
            ),
            encodeAuthzGrantSendAuthorizationMsg(
              account.bech32Address,
              savingsAppAddress,
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
      <Button onClick={onCreateAccount}>Create Account</Button>
      <WalletButton />
    </>
  )
}
