import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateMinterMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.updateMinter>,
  { update_minter: unknown }
>

type UpdateMinterMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.updateMinter
>[0]

type UseUpdateMinterArgs = Parameters<
  typeof useExecuteContract<UpdateMinterMsg>
>[0]

function buildUpdateMinterMsg(
  args: UpdateMinterMsgBuilderParameters,
): UpdateMinterMsg {
  return Cw20ExecuteMsgBuilder.updateMinter(args) as UpdateMinterMsg
}

export function useUpdateMinter({
  contractAddress,
  ...restInput
}: UseUpdateMinterArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateMinterMsg>({
      contractAddress,
      ...restInput,
    })

  const updateMinter = React.useCallback(
    function updateMinter({
      senderAddress,
      signingClient,
      ...args
    }: UpdateMinterMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateMinterMsg(args),
      })
    },
    [executeContract],
  )

  const updateMinterAsync = React.useCallback(
    function updateMinterAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateMinterMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateMinterMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateMinter, updateMinterAsync, ...restOutput }
}
