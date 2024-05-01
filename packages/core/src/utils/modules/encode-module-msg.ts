import { jsonToBinary } from '@abstract-money/core'
import { ModuleType } from '../../codegen/gql/graphql'
import { wrapModuleExecMsg } from './wrap-module-exec-msg'

/**
 * Encode a module message.
 * @param msg - if a string, it is assumed to be a base64 encoded JSON string and is returned as is.
 * @param moduleType
 */
export const encodeModuleMsg = (
  msg: Record<string, unknown> | string,
  moduleType?: ModuleType,
) =>
  typeof msg === 'string'
    ? msg
    : jsonToBinary(wrapModuleExecMsg(msg, moduleType))
