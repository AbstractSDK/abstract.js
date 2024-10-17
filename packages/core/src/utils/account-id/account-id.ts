import { RegistryTypes } from '../../codegen/abstract'

export type AccountId<TChainName extends string = string> = {
  chainName: TChainName
} & RegistryTypes.AccountId

export const ACCOUNT_ID_CHAIN_DELIMITER = '>'
export const ACCOUNT_ID_SEQUENCE_DELIMITER = '-'
