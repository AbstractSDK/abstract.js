import {
  ACCOUNT_ID_CHAIN_DELIMITER,
  ACCOUNT_ID_SEQUENCE_DELIMITER,
  type AccountId,
} from './account-id'

export function stringToAccountId(
  value: string,
  chainName?: string,
): AccountId {
  const [chainString, sequenceStr] = value.split(ACCOUNT_ID_SEQUENCE_DELIMITER)
  if (!chainString || !sequenceStr) {
    throw new Error(`Cannot find chain or sequence for account: ${value}`)
  }

  const accountSequence = Number.parseInt(sequenceStr)

  if (chainString === 'local') {
    if (!chainName)
      throw new Error('chainName must be provided for local account ids')
    return {
      chainName,
      seq: accountSequence,
      trace: 'local',
    }
  }

  const splitChainString = chainString.split(ACCOUNT_ID_CHAIN_DELIMITER)
  if (splitChainString.some((s) => !s)) {
    throw new Error(`Invalid chain string in account id ${value}`)
  }
  const accountSourceChain =
    splitChainString.length > 1 ? splitChainString[0] : chainString
  if (!accountSourceChain) {
    throw new Error(
      `Account must have source chain when not a local one: ${value}`,
    )
  }
  if (chainName && chainName !== accountSourceChain) {
    throw new Error(
      `chainName ${chainName} does not match chain in account id ${value}`,
    )
  }

  if (splitChainString.length === 1) {
    return {
      chainName: accountSourceChain,
      seq: accountSequence,
      trace: 'local',
    }
  }

  return {
    chainName: accountSourceChain,
    seq: accountSequence,
    trace: {
      // The remote trace is reversed
      remote: splitChainString.slice(1, splitChainString.length).reverse(),
    },
  }
}
