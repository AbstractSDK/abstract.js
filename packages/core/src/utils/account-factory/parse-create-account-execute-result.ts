import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import {
  ACCOUNT_ID_CHAIN_DELIMITER,
  AccountId,
  accountIdToString,
  stringToAccountId,
} from '../account-id'
import { findAbstractAttribute } from '../events'

export function parseCreateAccountExecuteResult(
  result: ExecuteResult,
  chainName: string,
) {
  const accountIdString = findAbstractAttribute(result, 'account_id').value
  const accountId = stringToAccountId(accountIdString, chainName)

  const accountAddress = findAbstractAttribute(result, 'account_address').value
  return { accountId, accountAddress }
}
