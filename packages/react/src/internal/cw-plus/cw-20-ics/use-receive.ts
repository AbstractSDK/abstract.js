import { Cw20IcsExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type ReceiveMsg = Extract<
  ReturnType<typeof Cw20IcsExecuteMsgBuilder.receive>,
  { receive: unknown }
>

type ReceiveMsgBuilderParameters = Parameters<
  typeof Cw20IcsExecuteMsgBuilder.receive
>[0]

type UseReceiveArgs = Parameters<typeof useExecuteContract<ReceiveMsg>>[0]

function buildReceiveMsg(args: ReceiveMsgBuilderParameters): ReceiveMsg {
  return Cw20IcsExecuteMsgBuilder.receive(args) as ReceiveMsg
}

export function useReceive({ contractAddress, ...restInput }: UseReceiveArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ReceiveMsg>({
      contractAddress,
      ...restInput,
    })

  const receive = React.useCallback(
    function receive({
      senderAddress,
      signingClient,
      ...args
    }: ReceiveMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildReceiveMsg(args),
      })
    },
    [executeContract],
  )

  const receiveAsync = React.useCallback(
    function receiveAsync({
      senderAddress,
      signingClient,
      ...args
    }: ReceiveMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildReceiveMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { receive, receiveAsync, ...restOutput }
}
