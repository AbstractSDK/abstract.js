import { Merge } from 'type-fest'
import { AccountTypes } from '../../codegen/abstract'

export type MergedModuleInstallConfig = Merge<
  AccountTypes.ModuleInstallConfig['module'],
  Pick<AccountTypes.ModuleInstallConfig, 'init_msg'>
>

export const moduleInstallConfig = ({
  init_msg,
  ...module
}: MergedModuleInstallConfig) => {
  return {
    init_msg,
    module,
  } satisfies AccountTypes.ModuleInstallConfig
}
