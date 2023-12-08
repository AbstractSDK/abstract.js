import { ContractMsg } from '../clients'

export type ModuleExecuteMsg<TBaseMsg, TAppMsg> =
  | {
      base: TBaseMsg
    }
  | {
      module: TAppMsg
    }

export type ModuleQueryMsg<TBaseMsg, TAppMsg> =
  | {
      base: TBaseMsg
    }
  | {
      module: TAppMsg
    }

export type ModuleInstantiateMsg<
  TBaseMsg extends ContractMsg,
  TAppMsg extends ContractMsg,
> = {
  base: TBaseMsg
  module: TAppMsg
}

/**
 * MigrateMsg for modules. Note that Adapters CANNOT be migrated.
 */
export type ModuleMigrateMsg<
  TBaseMsg extends ContractMsg,
  TAppMsg extends ContractMsg | Record<string, never>,
> = {
  base: TBaseMsg
  module: TAppMsg
}

/**
 * ModuleData returned from the {@link RAW_QUERY_KEYS.ModuleData} raw query.
 */
export interface ModuleData {
  module: string
  version: string
  dependencies: { id: string; version_req: string[] }[]
  metadata: unknown
}
