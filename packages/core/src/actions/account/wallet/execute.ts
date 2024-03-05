import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import {
  ProxyExecuteMsgBuilder,
  ProxyTypes,
  VersionControlTypes,
} from '../../../codegen/abstract'
import { ModuleType } from '../../../codegen/gql/graphql'
import { MaybeArray } from '../../../types/utils'
import { WithArgsAndCosmWasmSignOptions } from '../../../types/with-args'
import { executeOnModule } from './execute-on-module'

export type ExecuteParameters = Omit<
  WithArgsAndCosmWasmSignOptions<{
    accountId: VersionControlTypes.AccountId
    signingCosmWasmClient: SigningCosmWasmClient
    apiUrl: string
    sender: string
    msgs: MaybeArray<ProxyTypes.CosmosMsgForEmpty>
  }>,
  'funds'
>

/**
 * Execute a message directly as the Account. Must be called by the owner.
 * @param accountId
 * @param signingCosmWasmClient
 * @param apiUrl
 * @param sender
 * @param msgs
 * @param fee
 * @param memo
 */
export async function execute({
  args: { accountId, signingCosmWasmClient, apiUrl, sender, msgs },
  fee,
  memo,
}: ExecuteParameters) {
  return executeOnModule({
    args: {
      accountId,
      signingCosmWasmClient,
      apiUrl,
      sender,
      moduleId: 'abstract:proxy',
      moduleType: ModuleType.AccountBase,
      msg: ProxyExecuteMsgBuilder.moduleAction({
        msgs: Array.isArray(msgs) ? msgs : [msgs],
      }),
    },
    fee,
    memo,
  })
}

/**
 * Execute a message directly as the Account. Must be called by the owner.
 */
export const executeOnProxy = execute
