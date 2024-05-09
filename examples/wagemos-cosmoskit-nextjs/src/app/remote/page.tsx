'use client'
import { accountIdToString } from '@abstract-money/core'
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

const CONTROLLER_CHAINS = ['neutron', 'archway', 'juno']
const CHAIN_NAME = 'neutron'

export default function RemotePage() {
  const [controller, setController] = useState(CONTROLLER_CHAINS[0])

  const { data: remoteHosts, isLoading, refetch } = useRemoteHosts(controller)
  const [chainInput, setChainInput] = useState(remoteHosts?.[0]?.[0])

  const { address, isWalletConnected } = useChain(controller)

  const { data: accounts, status } = useAccounts({
    args: address
      ? {
          chainName: [controller, 'osmosis'],
          owner: address,
        }
      : undefined,
    query: {
      enabled: !!address,
    },
  })

  const firstAccount = useMemo(() => accounts?.[0], [accounts])

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
  console.log(remoteAccountIds)

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
        installModules: [],
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
      <h3>Controller</h3>

      <Select onValueChange={setController} defaultValue={controller}>
        <SelectTrigger>
          <SelectValue placeholder="Select a host" />
        </SelectTrigger>
        <SelectContent>
          {CONTROLLER_CHAINS?.map((chainName) => {
            return (
              <SelectItem key={chainName} value={chainName}>
                {chainName}
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>

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
      {/* link to the abstract console with the account id */}
      {firstAccount && (
        <a
          href={`https://console.abstract.money/account/${accountIdToString(
            firstAccount,
          )}/home?chainName=${firstAccount?.chainName}`}
        >
          Account Console
        </a>
      )}
      <h3>Remote Accounts</h3>
      <div>
        <pre>{JSON.stringify(remoteAccountIds, null, 2)}</pre>
      </div>
      <Button onClick={() => refetch()}>Refresh</Button>
    </>
  )
}
