import { Cw20IcsExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type ReceiveMsg = Extract<
  ReturnType<typeof Cw20IcsExecuteMsgBuilder.receive>,
  { receive: unknown }
>

type ReceiveMsgBuilderParameters = Parameters<
  typeof Cw20IcsExecuteMsgBuilder.receive
>

type UseReceiveArgs = Parameters<typeof useExecuteContract<ReceiveMsg>>[0]

function buildReceiveMsg(...args: ReceiveMsgBuilderParameters): ReceiveMsg {
  return Cw20IcsExecuteMsgBuilder.receive(...args) as ReceiveMsg
}

export function useReceive({ contractAddress, ...restInput }: UseReceiveArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ReceiveMsg>({
      contractAddress,
      ...restInput,
    })

  const receive = useCallback(
    function receive(...args: ReceiveMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildReceiveMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const receiveAsync = useCallback(
    function receiveAsync(...args: ReceiveMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildReceiveMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { receive, receiveAsync, ...restOutput }
}
