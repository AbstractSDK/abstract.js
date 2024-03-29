import {
  AccountId,
  accountIdApiFormatToAccountId,
  accountIdToApiFormat,
  accountIdToString,
} from '@abstract-money/core'
import request from 'graphql-request'
import { gql } from '../codegen/gql'

export type GetSubAccountIdsByModuleIdFromApiParameters = {
  accountId: AccountId
  apiUrl: string
  moduleId: string
}

export async function getSubAccountIdsByModuleIdFromApi({
  accountId,
  moduleId,
  apiUrl,
}: GetSubAccountIdsByModuleIdFromApiParameters): Promise<AccountId[]> {
  const subAccountsByModules = await request(
    apiUrl,
    gql(/* GraphQL */ `
    query SubAccountsByModules($ids: [AccountIdWithChain!]!) {
        accountsByIds(ids: $ids) {
            subAccounts {
                accountId {
                    chainName
                    trace
                    sequence
                }
                modules {
                    id
                }
            }
        }
    }
    `),
    {
      ids: accountIdToApiFormat(accountId),
    },
  )

  const accountData = subAccountsByModules.accountsByIds[0]
  if (!accountData)
    throw new Error(`account id ${accountIdToString(accountId)} does not exist`)

  return accountData.subAccounts
    .filter(({ modules }) => modules.some((module) => module.id === moduleId))
    .map(({ accountId }) => accountIdApiFormatToAccountId(accountId))
}
