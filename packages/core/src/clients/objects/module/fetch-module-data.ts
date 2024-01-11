import { rawQuery } from '@abstract-money/cosmwasm-utils'
import { type CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { match } from 'ts-pattern'
import { VersionControlTypes } from '../../../codegen/abstract'
import { type ModuleData } from '../../../utils/Module.types'
import { getModuleIdWithVersion } from '../module-id'
import { getAddressFromVcModule } from './get-address-from-vc-module'
import { getCodeIdFromVcModule } from './get-code-id-from-vc-module'
import { getTypeFromVcModule } from './get-type-from-vc-module'

export async function getModuleData<
  const TVcModule extends VersionControlTypes.Module = VersionControlTypes.Module,
>(client: CosmWasmClient, module: TVcModule): Promise<ModuleData | null> {
  // Retrieve the first instantiation of the module
  const moduleType = getTypeFromVcModule(module)
  const firstInstantiation = await match(moduleType)
    .with('adapter', async () => {
      return Promise.resolve(getAddressFromVcModule(module))
    })
    // TODO: not all standalones will have module_data
    .with('standalone', 'app', async () => {
      // retrieve the first instantiation
      const instantiations = await client.getContracts(
        getCodeIdFromVcModule(module),
      )
      const firstInstantiation = instantiations[0]
      if (!firstInstantiation) {
        console.log(
          `Could not find first instantiation of ${getModuleIdWithVersion(
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
