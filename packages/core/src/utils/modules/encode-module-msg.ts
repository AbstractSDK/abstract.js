import { jsonToBinary } from '@abstract-money/core'
import { CommonModuleNames } from '../../actions'
import { AccountExecuteMsgBuilder, AccountTypes } from '../../codegen/abstract'
import { CosmosMsgForEmpty } from '../../codegen/abstract/cosmwasm-codegen/Account.types'
import { ModuleType } from '../../codegen/gql/graphql'
import { MaybeArray } from '../../types/utils'
import { abstractModuleId } from './abstract-module-id'
import { wrapModuleExecMsg } from './wrap-module-exec-msg'

/**
 * Encode a module message.
 * @param msg - if a string, it is assumed to be a base64 encoded JSON string and is returned as is.
 * @param moduleType
 */
export const encodeModuleMsg = <TModuleMsg extends Record<string, unknown>>(
  msg: TModuleMsg | string,
  moduleType?: ModuleType,
) =>
  typeof msg === 'string'
    ? msg
    : jsonToBinary(wrapModuleExecMsg(msg, moduleType))

/**
 * Encode a message to be executed on a module.
 * @param moduleId
 * @param moduleMsg
 * @param moduleType
 */
export const executeOnModuleMsg = <TModuleMsg extends Record<string, unknown>>(
  moduleId: string,
  moduleMsg: TModuleMsg | string,
  moduleType?: ModuleType,
): AccountTypes.ExecuteMsg => ({
  execute_on_module: {
    module_id: moduleId,
    exec_msg: encodeModuleMsg(moduleMsg, moduleType),
  },
})
