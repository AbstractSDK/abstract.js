import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type SendMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.send>,
  { send: unknown }
>

type SendMsgBuilderParameters = Parameters<typeof Cw20ExecuteMsgBuilder.send>

type UseSendArgs = Parameters<typeof useExecuteContract<SendMsg>>[0]

function buildSendMsg(...args: SendMsgBuilderParameters): SendMsg {
  return Cw20ExecuteMsgBuilder.send(...args) as SendMsg
}

export function useSend({ contractAddress, ...restInput }: UseSendArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SendMsg>({
      contractAddress,
      ...restInput,
    })

  const send = React.useCallback(
    function send(...args: SendMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildSendMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const sendAsync = React.useCallback(
    function sendAsync(...args: SendMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildSendMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { send, sendAsync, ...restOutput }
}
