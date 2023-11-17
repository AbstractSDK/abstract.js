import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type SendFromMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.sendFrom>,
  { send_from: unknown }
>

type SendFromMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.sendFrom
>

type UseSendFromArgs = Parameters<typeof useExecuteContract<SendFromMsg>>[0]

function buildSendFromMsg(...args: SendFromMsgBuilderParameters): SendFromMsg {
  return Cw20ExecuteMsgBuilder.sendFrom(...args) as SendFromMsg
}

export function useSendFrom({
  contractAddress,
  ...restInput
}: UseSendFromArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<SendFromMsg>({
      contractAddress,
      ...restInput,
    })

  const sendFrom = useCallback(
    function sendFrom(...args: SendFromMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildSendFromMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const sendFromAsync = useCallback(
    function sendFromAsync(...args: SendFromMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildSendFromMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { sendFrom, sendFromAsync, ...restOutput }
}
