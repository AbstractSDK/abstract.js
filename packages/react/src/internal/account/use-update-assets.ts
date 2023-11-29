import { ProxyExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import * as React from 'react'

type UpdateAssetsMsg = Extract<
  ReturnType<typeof ProxyExecuteMsgBuilder.updateAssets>,
  { update_assets: unknown }
>

type UpdateAssetsMsgBuilderParameters = Parameters<
  typeof ProxyExecuteMsgBuilder.updateAssets
>

type UseUpdateAssetsArgs = Parameters<
  typeof useExecuteContract<UpdateAssetsMsg>
>[0]

function buildUpdateAssetsMsg(
  ...args: UpdateAssetsMsgBuilderParameters
): UpdateAssetsMsg {
  return ProxyExecuteMsgBuilder.updateAssets(...args) as UpdateAssetsMsg
}

export function useUpdateAssets({
  contractAddress,
  ...restInput
}: UseUpdateAssetsArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateAssetsMsg>({
      contractAddress,
      ...restInput,
    })

  const updateAssets = React.useCallback(
    function updateAssets(...args: UpdateAssetsMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUpdateAssetsMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const updateAssetsAsync = React.useCallback(
    function updateAssetsAsync(...args: UpdateAssetsMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUpdateAssetsMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { updateAssets, updateAssetsAsync, ...restOutput }
}
