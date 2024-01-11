import { P, match } from 'ts-pattern'
import { VersionControlTypes } from '../../../codegen/abstract'

export function getCodeIdFromVcModule<
  const TVcModule extends VersionControlTypes.Module = VersionControlTypes.Module,
>(module: TVcModule) {
  return match(module.reference)
    .with({ account_base: P.select() }, (core) => core)
    .with({ app: P.select() }, (app) => app)
    .with({ standalone: P.select() }, (standalone) => standalone)
    .otherwise((x) => {
      throw new Error(`Expected module with code id, got ${JSON.stringify(x)}`)
    })
}
