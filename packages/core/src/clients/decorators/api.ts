import { getAccountFactoryAddressFromApi } from '../../actions/get-account-factory-address-from-api'
import { getAccountsByOwnerFromApi } from '../../actions/get-accounts-by-owner-from-api'
import { getAnsHostAddressFromApi } from '../../actions/get-ans-host-address-from-api'
import { getAnsTokenFromApi } from '../../actions/get-ans-token-from-api'
import { getAnsTokensFromApi } from '../../actions/get-ans-tokens-from-api'
import { getVersionControlAddressFromApi } from '../../actions/get-version-control-address-from-api'
import { CutArgs } from '../../types/with-args'

type CutSpecificArgsFromParameter<T extends (payload: any) => any> = CutArgs<
  {
    readonly apiUrl: string
  },
  T
>

export type ApiActions = {
  getAccountFactoryAddressFromApi(
    args: CutSpecificArgsFromParameter<typeof getAccountFactoryAddressFromApi>,
  ): ReturnType<typeof getAccountFactoryAddressFromApi>
  getAnsHostAddressFromApi(
    args: CutSpecificArgsFromParameter<typeof getAnsHostAddressFromApi>,
  ): ReturnType<typeof getAnsHostAddressFromApi>
  getAccountsByOwnerFromApi(
    args: CutSpecificArgsFromParameter<typeof getAccountsByOwnerFromApi>,
  ): ReturnType<typeof getAccountsByOwnerFromApi>
  getAnsTokenFromApi(
    args: CutSpecificArgsFromParameter<typeof getAnsTokenFromApi>,
  ): ReturnType<typeof getAnsTokenFromApi>
  getAnsTokensFromApi(
    args: CutSpecificArgsFromParameter<typeof getAnsTokensFromApi>,
  ): ReturnType<typeof getAnsTokensFromApi>
  getVersionControlAddressFromApi(
    args: CutSpecificArgsFromParameter<typeof getVersionControlAddressFromApi>,
  ): ReturnType<typeof getVersionControlAddressFromApi>
}

export function apiActions(apiUrl: string): ApiActions {
  return {
    getAccountFactoryAddressFromApi: ({ args, ...rest }) =>
      getAccountFactoryAddressFromApi({
        args: { ...args, apiUrl },
        ...rest,
      }),
    getAnsHostAddressFromApi: ({ args, ...rest }) =>
      getAnsHostAddressFromApi({
        args: { ...args, apiUrl },
        ...rest,
      }),
    getAccountsByOwnerFromApi: ({ args, ...rest }) =>
      getAccountsByOwnerFromApi({
        args: { ...args, apiUrl },
        ...rest,
      }),
    getAnsTokenFromApi: ({ args, ...rest }) =>
      getAnsTokenFromApi({
        args: { ...args, apiUrl },
        ...rest,
      }),
    getAnsTokensFromApi: ({ args, ...rest }) =>
      getAnsTokensFromApi({
        args: { ...args, apiUrl },
        ...rest,
      }),
    getVersionControlAddressFromApi: ({ args, ...rest }) =>
      getVersionControlAddressFromApi({
        args: { ...args, apiUrl },
        ...rest,
      }),
  }
}
