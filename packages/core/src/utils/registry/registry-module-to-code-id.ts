import { P, match } from 'ts-pattern'
import { RegistryTypes } from '../../codegen/abstract'

export function registryModuleToCodeId<
  const TVcModule extends RegistryTypes.Module = RegistryTypes.Module,
>(module: TVcModule) {
  return match(module.reference)
    .with({ account: P.select() }, (account) => account)
    .with({ app: P.select() }, (app) => app)
    .with({ standalone: P.select() }, (standalone) => standalone)
    .otherwise((x) => {
      throw new Error(`Expected module with code id, got ${JSON.stringify(x)}`)
    })
}
