import { Cw20IcsExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type AllowMsg = Extract<
  ReturnType<typeof Cw20IcsExecuteMsgBuilder.allow>,
  { allow: unknown }
>

type AllowMsgBuilderParameters = Parameters<
  typeof Cw20IcsExecuteMsgBuilder.allow
>

type UseAllowArgs = Parameters<typeof useExecuteContract<AllowMsg>>[0]

function buildAllowMsg(...args: AllowMsgBuilderParameters): AllowMsg {
  return Cw20IcsExecuteMsgBuilder.allow(...args) as AllowMsg
}

export function useAllow({ contractAddress, ...restInput }: UseAllowArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<AllowMsg>({
      contractAddress,
      ...restInput,
    })

  const allow = React.useCallback(
    function allow(...args: AllowMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildAllowMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const allowAsync = React.useCallback(
    function allowAsync(...args: AllowMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildAllowMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { allow, allowAsync, ...restOutput }
}
