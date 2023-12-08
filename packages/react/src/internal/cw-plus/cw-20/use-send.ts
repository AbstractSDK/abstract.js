import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type SendMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.send>,
  { send: unknown }
>

type SendMsgBuilderParameters = Parameters<typeof Cw20ExecuteMsgBuilder.send>[0]

type UseSendArgs = Parameters<typeof useExecuteContract<SendMsg>>[0]

function buildSendMsg(args: SendMsgBuilderParameters): SendMsg {
  return Cw20ExecuteMsgBuilder.send(args) as SendMsg
}

export function useSend({ contractAddress, ...restInput }: UseSendArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SendMsg>({
      contractAddress,
      ...restInput,
    })

  const send = React.useCallback(
    function send({
      senderAddress,
      signingClient,
      ...args
    }: SendMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildSendMsg(args),
      })
    },
    [executeContract],
  )

  const sendAsync = React.useCallback(
    function sendAsync({
      senderAddress,
      signingClient,
      ...args
    }: SendMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildSendMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { send, sendAsync, ...restOutput }
}
