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
  const baseId = s.join(
    [id.chainName, `${id.seq}`],
    ACCOUNT_ID_SEQUENCE_DELIMITER,
  )

  if (id.trace === 'local') {
    return baseId
  }

  return `${id.trace.remote.join(
    ACCOUNT_ID_CHAIN_DELIMITER,
  )}${ACCOUNT_ID_CHAIN_DELIMITER}${baseId}` as const
}
