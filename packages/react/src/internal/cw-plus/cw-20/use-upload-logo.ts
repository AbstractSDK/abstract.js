import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import * as React from 'react'
import { useExecuteContract } from '../../../utils/use-execute-contract'

type UploadLogoMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.uploadLogo>,
  { upload_logo: unknown }
>

type UploadLogoMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.uploadLogo
>[0]

type UseUploadLogoArgs = Parameters<typeof useExecuteContract<UploadLogoMsg>>[0]

function buildUploadLogoMsg(
  args: UploadLogoMsgBuilderParameters,
): UploadLogoMsg {
  return Cw20ExecuteMsgBuilder.uploadLogo(args) as UploadLogoMsg
}

export function useUploadLogo({
  contractAddress,
  ...restInput
}: UseUploadLogoArgs) {
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UploadLogoMsg>({
      contractAddress,
      ...restInput,
    })

  const uploadLogo = React.useCallback(
    function uploadLogo({
      senderAddress,
      signingClient,
      ...args
    }: UploadLogoMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContract({
        signingClient,
        senderAddress,
        msg: buildUploadLogoMsg(args),
      })
    },
    [executeContract],
  )

  const uploadLogoAsync = React.useCallback(
    function uploadLogoAsync({
      senderAddress,
      signingClient,
      ...args
    }: UploadLogoMsgBuilderParameters & {
      senderAddress: string
      signingClient: SigningCosmWasmClient
    }) {
      return executeContractAsync({
        signingClient,
        senderAddress,
        msg: buildUploadLogoMsg(args),
      })
    },
    [executeContractAsync],
  )

  return { uploadLogo, uploadLogoAsync, ...restOutput }
}
