import { rawQuery } from '@abstract-money/cosmwasm-utils'
import { type CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { match } from 'ts-pattern'
import { VersionControlTypes } from '../../codegen/abstract'
import { type ModuleData } from '../../legacy/generics/Module.types'
import { formatModuleIdWithVersion } from '../../utils/version-control/module-id/format-module-id-with-version'
import { versionControlModuleToAddress } from '../../utils/version-control/version-control-module-to-address'
import { versionControlModuleToCodeId } from '../../utils/version-control/version-control-module-to-code-id'
import { versionControlModuleToType } from '../../utils/version-control/version-control-module-to-type'

export async function getVersionControlModuleData<
  const TVcModule extends VersionControlTypes.Module = VersionControlTypes.Module,
>(client: CosmWasmClient, module: TVcModule): Promise<ModuleData | null> {
  // Retrieve the first instantiation of the module
  const moduleType = versionControlModuleToType(module)
  const firstInstantiation = await match(moduleType)
    .with('adapter', async () => {
      return Promise.resolve(versionControlModuleToAddress(module))
    })
    // TODO: not all standalones will have module_data
    .with('standalone', 'app', async () => {
      // retrieve the first instantiation
      const instantiations = await client.getContracts(
        versionControlModuleToCodeId(module),
      )
      const firstInstantiation = instantiations[0]
      if (!firstInstantiation) {
        console.warn(
          `Could not find first instantiation of ${formatModuleIdWithVersion(
            module.info.namespace,
            module.info.name,
            module.info.version,
          )}`,
        )
        return null
      }
      return Promise.resolve(firstInstantiation)
    })
    .with('native', 'account_base', () => {
      return null
    })
    .otherwise(() => {
      throw new Error(
        `Expected module known type, got ${JSON.stringify(moduleType)}`,
      )
    })

  // If there is no instantiation, we will return null instead of erroring
  if (firstInstantiation === null) {
    return null
  }

  return await rawQuery<ModuleData | null>({
    client,
    address: firstInstantiation,
    key: 'module_data',
  })
}
