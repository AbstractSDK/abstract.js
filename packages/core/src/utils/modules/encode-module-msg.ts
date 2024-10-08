import { ContractMsg, ModuleType, jsonToBinary } from '@abstract-money/core'
import { AccountExecuteMsgBuilder, AccountTypes } from '../../codegen/abstract'
import { wrapModuleExecMsg } from './wrap-module-exec-msg'

/**
 * Encode a module message.
 * @param msg - if a string, it is assumed to be a base64 encoded JSON string and is returned as is.
 * @param moduleType
 */
export const encodeModuleMsg = <TModuleMsg extends ContractMsg>(
  msg: TModuleMsg | string,
  moduleType?: ModuleType,
) =>
  typeof msg === 'string'
    ? msg
    : jsonToBinary(wrapModuleExecMsg(msg, moduleType))

/**w
 * Build an execute message for a specific module.
 *
 * This method takes a module ID and an execution message of generic type ContractMsg and
 * converts it into a message which is intended to be executed on the specified module.
 *
 * Note: This method does not actually send the message; it merely prepares it to be sent.
 *
 * @param moduleId - The ID of the module on which the message should be executed.
 * @param moduleMsg - The message to be executed.
 * @param moduleType - The type of the module.
 *
 * @returns A ContractMsg representing the execution message for the specified module.
 *
 * @typeparam T - Represents the type of the execution message, which should extend from
 *   ContractMsg.
 */
export const executeOnModuleMsg = <TModuleMsg extends ContractMsg>(
  moduleId: string,
  moduleMsg: TModuleMsg | string,
  moduleType?: ModuleType,
): AccountTypes.ExecuteMsg =>
  AccountExecuteMsgBuilder.executeOnModule({
    moduleId,
    execMsg: encodeModuleMsg(moduleMsg, moduleType),
  })
