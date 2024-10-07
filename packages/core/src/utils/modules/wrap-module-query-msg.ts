import { match } from 'ts-pattern'
import { ContractMsg } from '../cosmwasm'
import { ModuleType } from './module-type'
import { AdapterQueryMsgBuilder, AppQueryMsgFactory } from './msg-factory'

/**
 * This constructs a query message that is tailored to the specified module and its
 * type. It can handle 'app' and 'adapter' module types, with the message just being passed on in
 * the default case.
 *
 * @param queryMsg the query message
 * @param moduleType the type of the module
 */
export function wrapModuleQueryMsg<
  TModuleMsg extends ContractMsg = ContractMsg,
>(queryMsg: TModuleMsg, moduleType?: ModuleType) {
  return match(moduleType)
    .with('app', () => AppQueryMsgFactory.queryApp<TModuleMsg>(queryMsg))
    .with('adapter', () => AdapterQueryMsgBuilder.query<TModuleMsg>(queryMsg))
    .otherwise(() => queryMsg)
}
