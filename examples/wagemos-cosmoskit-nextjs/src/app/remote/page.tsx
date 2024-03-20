'use client'
import {
  useAccounts,
  useCreateRemoteAccount,
  useExecuteOnRemote,
  useRemoteAccountIds,
  useRemoteHosts,
} from '@abstract-money/react'
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

const CHAIN_NAME = 'neutron'
export default function RemotePage() {
  const { data: remoteHosts, isLoading, refetch } = useRemoteHosts(CHAIN_NAME)
  const [chainInput, setChainInput] = useState(remoteHosts?.[0]?.[0])

  const { address } = useChain(CHAIN_NAME)

  const { data: accounts, status } = useAccounts({
    args: {
      chainName: CHAIN_NAME,
      owner: address ?? '',
    },
    query: {
      enabled: !!address,
    },
  })

  const firstAccount = useMemo(() => accounts?.[0][accounts])

  const { mutate: createRemoteAccount, isLoading: isCreating } =
    useCreateRemoteAccount({
      accountId: firstAccount,
      chainName: firstAccount?.chainName,
    })
  const { mutate: execRemote, isLoading: isExecuting } = useExecuteOnRemote({
    accountId: firstAccount,
    chainName: firstAccount?.chainName,
  })

  const { data: remoteAccountIds } = useRemoteAccountIds({
    args: {},
    accountId: firstAccount,
    chainName: firstAccount?.chainName,
  })

  const onCreateClick = useCallback(() => {
    if (!chainInput) {
      throw new Error('chainInput is undefined')
    }

    console.log('creating remote account')

    createRemoteAccount({
      fee: 'auto',
      funds: [],
      args: {
        hostChainName: chainInput,
        base_asset: 'juno>juno',
      },
    })
  }, [createRemoteAccount, chainInput])

  const onExecClick = useCallback(() => {
    if (!chainInput) {
      throw new Error('chainInput is undefined')
    }
    console.log('executing remote account')
    execRemote({
      funds: [],
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
  }, [execRemote, chainInput])

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
      <Button onClick={onCreateClick} disabled={!chainInput || isCreating}>
        Creat{isCreating ? 'ing' : 'e'} Remote Account {isCreating && '...'}
      </Button>
      <Button onClick={onExecClick} disabled={!chainInput || isExecuting}>
        Updat{isExecuting ? 'ing' : 'e'} Remote Account {isExecuting && '...'}
      </Button>

      <WalletButton />
      <h3>Remote Accounts</h3>
      <div>
        <pre>{JSON.stringify(remoteAccountIds, null, 2)}</pre>
      </div>
      <Button onClick={() => refetch()}>Refresh</Button>
    </>
  )
}
