import { Cw20ExecuteMsgBuilder } from '@abstract-money/core'
import { useCosmWasmSigningClient, useExecuteContract } from 'graz'
import { useCallback } from 'react'

type UploadLogoMsg = Extract<
  ReturnType<typeof Cw20ExecuteMsgBuilder.uploadLogo>,
  { upload_logo: unknown }
>

type UploadLogoMsgBuilderParameters = Parameters<
  typeof Cw20ExecuteMsgBuilder.uploadLogo
>

type UseUploadLogoArgs = Parameters<typeof useExecuteContract<UploadLogoMsg>>[0]

function buildUploadLogoMsg(
  ...args: UploadLogoMsgBuilderParameters
): UploadLogoMsg {
  return Cw20ExecuteMsgBuilder.uploadLogo(...args) as UploadLogoMsg
}

export function useUploadLogo({
  contractAddress,
  ...restInput
}: UseUploadLogoArgs) {
  const { data: signingClient } = useCosmWasmSigningClient()
  const { executeContract, executeContractAsync, ...restOutput } =
    useExecuteContract<UploadLogoMsg>({
      contractAddress,
      ...restInput,
    })

  const uploadLogo = useCallback(
    function uploadLogo(...args: UploadLogoMsgBuilderParameters) {
      return executeContract({
        signingClient,
        msg: buildUploadLogoMsg(...args),
      })
    },
    [executeContract, signingClient],
  )

  const uploadLogoAsync = useCallback(
    function uploadLogoAsync(...args: UploadLogoMsgBuilderParameters) {
      return executeContractAsync({
        signingClient,
        msg: buildUploadLogoMsg(...args),
      })
    },
    [executeContractAsync, signingClient],
  )

  return { uploadLogo, uploadLogoAsync, ...restOutput }
}
