import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type BurnFromMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.burnFrom>,
  { burn_from: unknown }
>

type BurnFromMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.burnFrom
>

type UseBurnFromArgs = Parameters<typeof useExecuteContract<BurnFromMsg>>[0]

function buildBurnFromMsg(...args: BurnFromMsgBuilderParameters): BurnFromMsg {
  return Cw20ExecuteMsgBuilder.burnFrom(...args) as BurnFromMsg
}

export function useBurnFrom({
  contractAddress,
  ...restInput
}: UseBurnFromArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<BurnFromMsg>({
      contractAddress,
      ...restInput,
    })

  const burnFrom = React.useCallback(
    function burnFrom(...args: BurnFromMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildBurnFromMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const burnFromAsync = React.useCallback(
    function burnFromAsync(...args: BurnFromMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildBurnFromMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { burnFrom, burnFromAsync, ...restOutput }
}
