import { P, match } from 'ts-pattern'
import { RegistryTypes } from '../../codegen/abstract'

export function registryModuleToAddress<
  const TVcModule extends RegistryTypes.Module = RegistryTypes.Module,
>(module: TVcModule) {
  return match(module.reference)
    .with({ native: P.select() }, (native) => native)
    .with({ adapter: P.select() }, (adapter) => adapter)
    .otherwise((x) => {
      throw new Error(`Expected addressable module, got ${JSON.stringify(x)}`)
    })
}
