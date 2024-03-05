import { match } from 'ts-pattern'
import { ModuleType } from '../../codegen/gql/graphql'
import { AdapterExecuteMsgFactory, AppExecuteMsgFactory } from '../../legacy'

export const wrapModuleExecMsg = (
  msg: Record<string, unknown>,
  moduleType?: ModuleType,
) =>
  match(moduleType)
    .with(ModuleType.App, () => AppExecuteMsgFactory.executeApp(msg))
    .with(ModuleType.Adapter, () =>
      AdapterExecuteMsgFactory.executeAdapter({ request: msg }),
    )
    .otherwise(() => msg)
