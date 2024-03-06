'use client'
import { stringToAccountId } from '@abstract-money/core'
import {
  useRemoteAccountIds,
  useRemoteHosts,
  useSignAndBroadcast,
} from '@abstract-money/react'
import { useAccounts } from '@abstract-money/react'
import { useCreateRemoteAccount } from '@abstract-money/react'
import { useConfig } from '@abstract-money/react'
import { useExecuteOnRemote } from '@abstract-money/react'
import { useChain } from '@cosmos-kit/react'
import { useCallback, useMemo, useState } from 'react'
import { Button } from '../../components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select'
import { WalletButton } from '../_components/wallet-button'

const CHAIN_NAME = 'juno'
export default function RemotePage() {
  const { data: remoteHosts, isLoading } = useRemoteHosts(CHAIN_NAME)
  const [chainInput, setChainInput] = useState(CHAIN_NAME)

  const { address } = useChain(CHAIN_NAME)

  const { data: accounts, status } = useAccounts(
    {
      args: {
        chainName: CHAIN_NAME,
        owner: address || '',
      },
    },
    {
      enabled: !!address,
    },
  )

  const firstAccount = useMemo(
    () => (accounts ? accounts[0] : undefined),
    [accounts],
  )

  const { mutate: createRemoteAccount } = useCreateRemoteAccount({
    accountId: firstAccount,
  })
  const { mutate: execRemote } = useExecuteOnRemote({
    accountId: firstAccount,
  })

  const { data: remoteAccountIds } = useRemoteAccountIds({
    args: {},
    accountId: firstAccount,
  })

  const onCreateClick = useCallback(() => {
    if (!chainInput) {
      console.log('no chain input')
      return undefined
    }

    createRemoteAccount({
      fee: 'auto',
      args: {
        hostChainName: chainInput,
        base_asset: 'juno>juno',
      },
    })
  }, [createRemoteAccount])

  const onExecClick = useCallback(() => {
    if (!chainInput) {
      console.log('no chain input')
      return undefined
    }
    execRemote({
      fee: 'auto',
      args: {
        hostChainName: chainInput,
        managerMsg: {
          update_info: {
            name: 'test',
          },
        },
      },
    })
  }, [execRemote])

  return (
    <>
      <h3>Host</h3>
      <Select onValueChange={setChainInput} defaultValue={chainInput}>
        <SelectTrigger>
          <SelectValue placeholder="Select a host" />
        </SelectTrigger>
        <SelectContent>
          {remoteHosts?.map(([chainName]) => {
            return (
              <SelectItem key={chainName} value={chainName}>
                {chainName}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
      {isLoading && <div>Loading...</div>}
      {/*<Input placeholder="chain" value={chainInput} onChange={(e) => setChainInput(e.target.value)} />*/}
      <Button onClick={onCreateClick} disabled={!chainInput}>
        Create Remote Account
      </Button>
      <Button onClick={onExecClick} disabled={!chainInput}>
        Update Remote Account
      </Button>

      <WalletButton />
    </>
  )
}
