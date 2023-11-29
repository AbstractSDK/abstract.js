import { ChallengeExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type VetoMsg = Extract<
  ReturnType<typeof ChallengeExecuteMsgBuilder.veto>,
  { veto: unknown }
>

type VetoMsgBuilderParameters = Parameters<
  typeof ChallengeExecuteMsgBuilder.veto
>

type UseVetoArgs = Parameters<typeof useExecuteContract<VetoMsg>>[0]

function buildVetoMsg(...args: VetoMsgBuilderParameters): VetoMsg {
  return ChallengeExecuteMsgBuilder.veto(...args) as VetoMsg
}

export function useVeto({ contractAddress, ...restInput }: UseVetoArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<VetoMsg>({
      contractAddress,
      ...restInput,
    })

  const veto = React.useCallback(
    function veto(...args: VetoMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildVetoMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const vetoAsync = React.useCallback(
    function vetoAsync(...args: VetoMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildVetoMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { veto, vetoAsync, ...restOutput }
}
