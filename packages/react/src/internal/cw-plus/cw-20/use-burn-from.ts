import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type BurnFromMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.burnFrom>,
  { burn_from: unknown }
>

type BurnFromMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.burnFrom
>[0]

type UseBurnFromArgs = Parameters<typeof useExecuteContract<BurnFromMsg>>[0]

function buildBurnFromMsg(args: BurnFromMsgBuilderParameters): BurnFromMsg {
  return Cw20ExecuteMsgBuilder.burnFrom(args) as BurnFromMsg
}

export function useBurnFrom({
  contractAddress,
  ...restInput
}: UseBurnFromArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<BurnFromMsg>({
      contractAddress,
      ...restInput,
    })

  const burnFrom = React.useCallback(
    function burnFrom({
      senderAddress,
      signingClient,
      ...args
    }: BurnFromMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildBurnFromMsg(args),
      })
    },
    [executeContract],
  )

  const burnFromAsync = React.useCallback(
    function burnFromAsync({
      senderAddress,
      signingClient,
      ...args
    }: BurnFromMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildBurnFromMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { burnFrom, burnFromAsync, ...restOutput }
}
