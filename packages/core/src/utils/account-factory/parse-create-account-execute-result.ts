import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { ACCOUNT_ID_CHAIN_DELIMITER, AccountId } from '../account-id'
import { chainIdToName } from '../chain-registry'
import { findAbstractAttribute } from '../events'

export function parseCreateAccountExecuteResult(
  result: ExecuteResult,
  chainId: string,
) {
  const seq = Number.parseInt(
    findAbstractAttribute(result, 'account_sequence').value,
  )
  const trace = findAbstractAttribute(result, 'trace').value
  const accountId = {
    chainName: chainIdToName(chainId),
    seq,
    trace:
      trace === 'local' || trace === undefined
        ? 'local'
        : { remote: trace.split(ACCOUNT_ID_CHAIN_DELIMITER) },
  } satisfies AccountId

  const managerAddress = findAbstractAttribute(result, 'manager_address').value
  const proxyAddress = findAbstractAttribute(result, 'proxy_address').value
  return { accountId, managerAddress, proxyAddress }
}
