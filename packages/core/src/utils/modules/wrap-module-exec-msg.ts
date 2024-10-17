import { match } from 'ts-pattern'
import { ModuleType } from './module-type'
import { AdapterExecuteMsgFactory, AppExecuteMsgFactory } from './msg-factory'

/**
 * This constructs an execution message that is tailored to the specified module and its
 * type. It can handle 'app' and 'adapter' module types, with the message just being passed on in
 * the default case.
 *
 * @param msg the execution message
 * @param moduleType the type of the module
 */
export const wrapModuleExecMsg = <TModuleMsg extends Record<string, unknown>>(
  msg: TModuleMsg,
  moduleType?: ModuleType,
) =>
  match(moduleType)
    .with('app', () => AppExecuteMsgFactory.executeApp(msg))
    .with('adapter', () =>
      AdapterExecuteMsgFactory.executeAdapter({ request: msg }),
    )
    .otherwise(() => msg)
