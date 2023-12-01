import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type SendFromMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.sendFrom>,
  { send_from: unknown }
>

type SendFromMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.sendFrom
>[0]

type UseSendFromArgs = Parameters<typeof useExecuteContract<SendFromMsg>>[0]

function buildSendFromMsg(args: SendFromMsgBuilderParameters): SendFromMsg {
  return Cw20ExecuteMsgBuilder.sendFrom(args) as SendFromMsg
}

export function useSendFrom({
  contractAddress,
  ...restInput
}: UseSendFromArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SendFromMsg>({
      contractAddress,
      ...restInput,
    })

  const sendFrom = React.useCallback(
    function sendFrom({
      senderAddress,
      signingClient,
      ...args
    }: SendFromMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildSendFromMsg(args),
      })
    },
    [executeContract],
  )

  const sendFromAsync = React.useCallback(
    function sendFromAsync({
      senderAddress,
      signingClient,
      ...args
    }: SendFromMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildSendFromMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { sendFrom, sendFromAsync, ...restOutput }
}
