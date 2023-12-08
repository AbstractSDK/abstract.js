import { ProxyExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../utils/use-execute-contract'

type UpdateAssetsMsg = Extract<
  ReturnType<typeof ProxyExecuteMsgBuilder.updateAssets>,
  { update_assets: unknown }
>

type UpdateAssetsMsgBuilderParameters = Parameters<
  typeof ProxyExecuteMsgBuilder.updateAssets
>[0]

type UseUpdateAssetsArgs = Parameters<
  typeof useExecuteContract<UpdateAssetsMsg>
>[0]

function buildUpdateAssetsMsg(
  args: UpdateAssetsMsgBuilderParameters,
): UpdateAssetsMsg {
  return ProxyExecuteMsgBuilder.updateAssets(args) as UpdateAssetsMsg
}

export function useUpdateAssets({
  contractAddress,
  ...restInput
}: UseUpdateAssetsArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UpdateAssetsMsg>({
      contractAddress,
      ...restInput,
    })

  const updateAssets = React.useCallback(
    function updateAssets({
      senderAddress,
      signingClient,
      ...args
    }: UpdateAssetsMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUpdateAssetsMsg(args),
      })
    },
    [executeContract],
  )

  const updateAssetsAsync = React.useCallback(
    function updateAssetsAsync({
      senderAddress,
      signingClient,
      ...args
    }: UpdateAssetsMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUpdateAssetsMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { updateAssets, updateAssetsAsync, ...restOutput }
}
