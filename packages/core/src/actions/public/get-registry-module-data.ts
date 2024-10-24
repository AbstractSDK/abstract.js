import { rawQuery } from '@abstract-money/cosmwasm-utils'
import { type CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import { match } from 'ts-pattern'
import { RegistryTypes } from '../../codegen/abstract'
import { ModuleData } from '../../utils/modules/msg-factory'
import { formatModuleIdWithVersion } from '../../utils/registry/module-id/format-module-id-with-version'
import { registryModuleToAddress } from '../../utils/registry/registry-module-to-address'
import { registryModuleToCodeId } from '../../utils/registry/registry-module-to-code-id'
import { registryModuleToType } from '../../utils/registry/registry-module-to-type'

export type GetRegistryModuleDataParameters<
  TVcModule extends RegistryTypes.Module = RegistryTypes.Module,
> = { cosmWasmClient: CosmWasmClient; module: TVcModule }

export async function getRegistryModuleData<
  const TVcModule extends RegistryTypes.Module = RegistryTypes.Module,
>({
  cosmWasmClient,
  module,
}: GetRegistryModuleDataParameters<TVcModule>): Promise<ModuleData | null> {
  // Retrieve the first instantiation of the module
  const moduleType = registryModuleToType(module)
  const firstInstantiation = await match(moduleType)
    .with('adapter', async () => {
      return Promise.resolve(registryModuleToAddress(module))
    })
    // TODO: not all standalones will have module_data
    .with('standalone', 'app', async () => {
      // retrieve the first instantiation
      const instantiations = await cosmWasmClient.getContracts(
        registryModuleToCodeId(module),
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
    .with('native', 'account', () => {
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
    client: cosmWasmClient,
    address: firstInstantiation,
    key: 'module_data',
  })
}
