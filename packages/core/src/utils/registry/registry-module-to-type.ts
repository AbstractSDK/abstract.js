import { P, match } from 'ts-pattern'
import { RegistryTypes } from '../../codegen/abstract'

export function registryModuleToType<
  const TVcModule extends RegistryTypes.Module = RegistryTypes.Module,
>(module: TVcModule) {
  return match(module.reference)
    .with({ account: P.select() }, () => 'account' as const)
    .with({ app: P.select() }, () => 'app' as const)
    .with({ standalone: P.select() }, () => 'standalone' as const)
    .with({ native: P.select() }, () => 'native' as const)
    .with({ adapter: P.select() }, () => 'adapter' as const)
    .otherwise((x) => {
      throw new Error(`Expected module with code id, got ${JSON.stringify(x)}`)
    })
}
