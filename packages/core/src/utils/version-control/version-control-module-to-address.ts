import { P, match } from 'ts-pattern'
import { VersionControlTypes } from '../../codegen/abstract'

export function versionControlModuleToAddress<
  const TVcModule extends VersionControlTypes.Module = VersionControlTypes.Module,
>(module: TVcModule) {
  return match(module.reference)
    .with({ native: P.select() }, (native) => native)
    .with({ adapter: P.select() }, (adapter) => adapter)
    .otherwise((x) => {
      throw new Error(`Expected addressable module, got ${JSON.stringify(x)}`)
    })
}
