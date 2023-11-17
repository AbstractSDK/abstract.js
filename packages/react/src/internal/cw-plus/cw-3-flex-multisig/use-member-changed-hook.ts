import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type MemberChangedHookMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.memberChangedHook>,
  { member_changed_hook: unknown }
>

type MemberChangedHookMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.memberChangedHook
>

type UseMemberChangedHookArgs = Parameters<
  typeof useExecuteContract<MemberChangedHookMsg>
>[0]

function buildMemberChangedHookMsg(
  ...args: MemberChangedHookMsgBuilderParameters
): MemberChangedHookMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.memberChangedHook(
    ...args,
  ) as MemberChangedHookMsg
}

export function useMemberChangedHook({
  contractAddress,
  ...restInput
}: UseMemberChangedHookArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<MemberChangedHookMsg>({
      contractAddress,
      ...restInput,
    })

  const memberChangedHook = useCallback(
    function memberChangedHook(...args: MemberChangedHookMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildMemberChangedHookMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const memberChangedHookAsync = useCallback(
    function memberChangedHookAsync(
      ...args: MemberChangedHookMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildMemberChangedHookMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { memberChangedHook, memberChangedHookAsync, ...restOutput }
}
