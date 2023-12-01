import { RegistryExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type ApproveOrRejectModulesMsg = Extract<
  ReturnType<typeof RegistryExecuteMsgBuilder.approveOrRejectModules>,
  { approve_or_reject_modules: unknown }
>

type ApproveOrRejectModulesMsgBuilderParameters = Parameters<
  typeof RegistryExecuteMsgBuilder.approveOrRejectModules
>[0]

type UseApproveOrRejectModulesArgs = Parameters<
  typeof useExecuteContract<ApproveOrRejectModulesMsg>
>[0]

function buildApproveOrRejectModulesMsg(
  args: ApproveOrRejectModulesMsgBuilderParameters,
): ApproveOrRejectModulesMsg {
  return RegistryExecuteMsgBuilder.approveOrRejectModules(
    args,
  ) as ApproveOrRejectModulesMsg
}

export function useApproveOrRejectModules({
  contractAddress,
  ...restInput
}: UseApproveOrRejectModulesArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ApproveOrRejectModulesMsg>({
      contractAddress,
      ...restInput,
    })

  const approveOrRejectModules = React.useCallback(
    function approveOrRejectModules({
      senderAddress,
      signingClient,
      ...args
    }: ApproveOrRejectModulesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildApproveOrRejectModulesMsg(args),
      })
    },
    [executeContract],
  )

  const approveOrRejectModulesAsync = React.useCallback(
    function approveOrRejectModulesAsync({
      senderAddress,
      signingClient,
      ...args
    }: ApproveOrRejectModulesMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildApproveOrRejectModulesMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { approveOrRejectModules, approveOrRejectModulesAsync, ...restOutput }
}
