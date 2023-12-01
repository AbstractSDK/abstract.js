import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type MemberChangedHookMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.memberChangedHook>,
  { member_changed_hook: unknown }
>

type MemberChangedHookMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.memberChangedHook
>[0]

type UseMemberChangedHookArgs = Parameters<
  typeof useExecuteContract<MemberChangedHookMsg>
>[0]

function buildMemberChangedHookMsg(
  args: MemberChangedHookMsgBuilderParameters,
): MemberChangedHookMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.memberChangedHook(
    args,
  ) as MemberChangedHookMsg
}

export function useMemberChangedHook({
  contractAddress,
  ...restInput
}: UseMemberChangedHookArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<MemberChangedHookMsg>({
      contractAddress,
      ...restInput,
    })

  const memberChangedHook = React.useCallback(
    function memberChangedHook({
      senderAddress,
      signingClient,
      ...args
    }: MemberChangedHookMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildMemberChangedHookMsg(args),
      })
    },
    [executeContract],
  )

  const memberChangedHookAsync = React.useCallback(
    function memberChangedHookAsync({
      senderAddress,
      signingClient,
      ...args
    }: MemberChangedHookMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildMemberChangedHookMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { memberChangedHook, memberChangedHookAsync, ...restOutput }
}
