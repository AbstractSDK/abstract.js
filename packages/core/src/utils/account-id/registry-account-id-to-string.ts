import { RegistryTypes } from '../../codegen/abstract'
import { ACCOUNT_ID_CHAIN_DELIMITER } from './account-id'

/**
 * To string for account ids. Matches Display trait.
 * { seq: 45, chainName: 'osmosis' } => 'local-45'
 * { seq: 45, trace: ['juno'] } => 'juno-45'
 * @param id
 */
export function registryAccountIdToString(id: RegistryTypes.AccountId) {
  if (id.trace === 'local') {
    return `local-${id.seq}`
  }

  return `${id.trace.remote.join(
    ACCOUNT_ID_CHAIN_DELIMITER,
  )}${ACCOUNT_ID_CHAIN_DELIMITER}${id.seq}` as const
}
