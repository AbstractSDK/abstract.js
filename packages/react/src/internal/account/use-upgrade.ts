import { ManagerExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type UpgradeMsg = Extract<
  ReturnType<typeof ManagerExecuteMsgBuilder.upgrade>,
  { upgrade: unknown }
>

type UpgradeMsgBuilderParameters = Parameters<
  typeof ManagerExecuteMsgBuilder.upgrade
>[0]

type UseUpgradeArgs = Parameters<typeof useExecuteContract<UpgradeMsg>>[0]

function buildUpgradeMsg(args: UpgradeMsgBuilderParameters): UpgradeMsg {
  return ManagerExecuteMsgBuilder.upgrade(args) as UpgradeMsg
}

export function useUpgrade({ contractAddress, ...restInput }: UseUpgradeArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpgradeMsg>({
      contractAddress,
      ...restInput,
    })

  const upgrade = React.useCallback(
    function upgrade({
      senderAddress,
      signingClient,
      ...args
    }: UpgradeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpgradeMsg(args),
      })
    },
    [executeContract],
  )

  const upgradeAsync = React.useCallback(
    function upgradeAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpgradeMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpgradeMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { upgrade, upgradeAsync, ...restOutput }
}
