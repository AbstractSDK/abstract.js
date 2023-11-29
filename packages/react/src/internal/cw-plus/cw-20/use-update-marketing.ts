import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateMarketingMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.updateMarketing>,
  { update_marketing: unknown }
>

type UpdateMarketingMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.updateMarketing
>

type UseUpdateMarketingArgs = Parameters<
  typeof useExecuteContract<UpdateMarketingMsg>
>[0]

function buildUpdateMarketingMsg(
  ...args: UpdateMarketingMsgBuilderParameters
): UpdateMarketingMsg {
  return Cw20ExecuteMsgBuilder.updateMarketing(...args) as UpdateMarketingMsg
}

export function useUpdateMarketing({
  contractAddress,
  ...restInput
}: UseUpdateMarketingArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateMarketingMsg>({
      contractAddress,
      ...restInput,
    })

  const updateMarketing = React.useCallback(
    function updateMarketing(...args: UpdateMarketingMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateMarketingMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateMarketingAsync = React.useCallback(
    function updateMarketingAsync(
      ...args: UpdateMarketingMsgBuilderParameters
    ) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateMarketingMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateMarketing, updateMarketingAsync, ...restOutput }
}
