import * as s from 'string-ts'
import {
  ACCOUNT_ID_CHAIN_DELIMITER,
  ACCOUNT_ID_SEQUENCE_DELIMITER,
  type AccountId,
} from './account-id'

/**
 * Pretty string for account ids.
 * { seq: 45, chainName: 'osmosis', trace: 'local' } => 'osmosis-45'
 * { seq: 45, chainName: 'osmosis', trace: ['juno'] } => 'juno>osmosis-45'
 * @param id
 */
export function accountIdToString<TChainName extends string = string>(
  id: AccountId<TChainName>,
) {
  // Sequence check
  if (id.seq < 0) {
    throw new Error(`Invalid account sequence: ${id.seq}`)
  }

  // ChainName check
  if (!id.chainName) {
    throw new Error('AccountId must have a chainName')
  }

  // Trace check
  if (id.trace === 'local') {
    if (!id.chainName) {
      throw new Error('chainName must be provided for local account ids')
    }
    return s.join([id.chainName, `${id.seq}`], ACCOUNT_ID_SEQUENCE_DELIMITER)
  }

  if (!id.trace.remote.length || id.trace.remote.some((s) => !s)) {
    throw new Error(`Invalid remote trace: ${JSON.stringify(id.trace.remote)}`)
  }
  const sourceChain = id.trace.remote[0]!

  const baseId = s.join(
    [sourceChain, `${id.seq}`],
    ACCOUNT_ID_SEQUENCE_DELIMITER,
  )

  return `${[id.chainName, ...id.trace.remote.slice(1).reverse()].join(
    ACCOUNT_ID_CHAIN_DELIMITER,
  )}${ACCOUNT_ID_CHAIN_DELIMITER}${baseId}` as const
}
