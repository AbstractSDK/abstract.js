import { ExecuteResult } from '@cosmjs/cosmwasm-stargate'
import { WithOptional } from '../../types/utils'
import { stringToAccountId } from '../account-id'
import { findAbstractAttribute } from '../events'

export function parseCreateAccountExecuteResult(
  result: WithOptional<Pick<ExecuteResult, 'logs' | 'events'>, 'logs'>,
  chainName: string,
) {
  const accountIdString = findAbstractAttribute(result, 'account_id').value
  const accountId = stringToAccountId(accountIdString, chainName)

  const accountAddress = findAbstractAttribute(result, 'account_address').value
  return { accountId, accountAddress }
}
