import { RegistryTypes } from '../../codegen/abstract'

/**
 * AccountId is a globally unique identifier for an account.
 * The chainName is the name of the chain where the account is located.
 */
export type AccountId<TChainName extends string = string> = {
  chainName: TChainName
} & RegistryTypes.AccountId

export const ACCOUNT_ID_CHAIN_DELIMITER = '>'
export const ACCOUNT_ID_SEQUENCE_DELIMITER = '-'
