import { P, match } from 'ts-pattern'
import { VersionControlTypes } from '../../../codegen/abstract'

export function getTypeFromVcModule<
  const TVcModule extends VersionControlTypes.Module = VersionControlTypes.Module,
>(module: TVcModule) {
  return match(module.reference)
    .with({ account_base: P.select() }, () => 'account_base' as const)
    .with({ app: P.select() }, () => 'app' as const)
    .with({ standalone: P.select() }, () => 'standalone' as const)
    .with({ native: P.select() }, () => 'native' as const)
    .with({ adapter: P.select() }, () => 'adapter' as const)
    .otherwise((x) => {
      throw new Error(`Expected module with code id, got ${JSON.stringify(x)}`)
    })
}
