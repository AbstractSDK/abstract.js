import { Cw20Types, Cw20QueryMsgBuilder } from '@abstract-money/core'
import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { useQuerySmart } from '../../../utils/use-query-smart'

type DownloadLogoMsg = Extract<
  ReturnType<typeof Cw20QueryMsgBuilder.downloadLogo>,
  { download_logo: unknown }
>

type DownloadLogoMsgBuilderParameters = Parameters<
  typeof Cw20QueryMsgBuilder.downloadLogo
>

type UseDownloadLogoArgs = { contractAddress?: string; client?: CosmWasmClient }

function buildDownloadLogoMsg(
  ...args: DownloadLogoMsgBuilderParameters
): DownloadLogoMsg {
  return Cw20QueryMsgBuilder.downloadLogo(...args) as DownloadLogoMsg
}

export function useDownloadLogo({
  contractAddress,
  client,
}: UseDownloadLogoArgs) {
  const { data: downloadLogo, ...restOutput } = useQuerySmart<
    Cw20Types.DownloadLogoResponse,
    Error
  >({ address: contractAddress, client, queryMsg: buildDownloadLogoMsg() })

  return { downloadLogo, ...restOutput }
}
