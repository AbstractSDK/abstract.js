import { Cw20QueryMsgBuilder } from '@abstract-money/core'
import { type DownloadLogoResponse } from '@abstract-money/core/cw-plus/Cw20.types'
import { useQuerySmart } from 'graz'

type DownloadLogoMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.downloadLogo>,
  { download_logo: unknown }
>

type DownloadLogoMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.downloadLogo
>

type UseDownloadLogoArgs = { contractAddress?: string }

function buildDownloadLogoMsg(
  ...args: DownloadLogoMsgBuilderParameters
): DownloadLogoMsg {
  return Cw20QueryMsgBuilder.downloadLogo(...args) as DownloadLogoMsg
}

export function useDownloadLogo({ contractAddress }: UseDownloadLogoArgs) {
  const { data: downloadLogo, ...restOutput } = useQuerySmart<
    DownloadLogoResponse,
    Error
  >(contractAddress, buildDownloadLogoMsg())

  return { downloadLogo, ...restOutput }
}
