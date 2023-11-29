import { Cw3FlexMultisigExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type ProposeMsg = Extract<
  ReturnType<typeof Cw3FlexMultisigExecuteMsgBuilder.propose>,
  { propose: unknown }
>

type ProposeMsgBuilderParameters = Parameters<
  typeof Cw3FlexMultisigExecuteMsgBuilder.propose
>

type UseProposeArgs = Parameters<typeof useExecuteContract<ProposeMsg>>[0]

function buildProposeMsg(...args: ProposeMsgBuilderParameters): ProposeMsg {
  return Cw3FlexMultisigExecuteMsgBuilder.propose(...args) as ProposeMsg
}

export function usePropose({ contractAddress, ...restInput }: UseProposeArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<ProposeMsg>({
      contractAddress,
      ...restInput,
    })

  const propose = React.useCallback(
    function propose(...args: ProposeMsgBuilderParameters) {
      return executeContract({ signingClient, msg: buildProposeMsg(...args) })
    },
    [executeContract, signingClient],
  )

  const proposeAsync = React.useCallback(
    function proposeAsync(...args: ProposeMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildProposeMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { propose, proposeAsync, ...restOutput }
}
