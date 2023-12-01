import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UpdateMarketingMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.updateMarketing>,
  { update_marketing: unknown }
>

type UpdateMarketingMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.updateMarketing
>[0]

type UseUpdateMarketingArgs = Parameters<
  typeof useExecuteContract<UpdateMarketingMsg>
>[0]

function buildUpdateMarketingMsg(
  args: UpdateMarketingMsgBuilderParameters,
): UpdateMarketingMsg {
  return Cw20ExecuteMsgBuilder.updateMarketing(args) as UpdateMarketingMsg
}

export function useUpdateMarketing({
  contractAddress,
  ...restInput
}: UseUpdateMarketingArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateMarketingMsg>({
      contractAddress,
      ...restInput,
    })

  const updateMarketing = React.useCallback(
    function updateMarketing({
      senderAddress,
      signingClient,
      ...args
    }: UpdateMarketingMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateMarketingMsg(args),
      })
    },
    [executeContract],
  )

  const updateMarketingAsync = React.useCallback(
    function updateMarketingAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateMarketingMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateMarketingMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateMarketing, updateMarketingAsync, ...restOutput }
}
