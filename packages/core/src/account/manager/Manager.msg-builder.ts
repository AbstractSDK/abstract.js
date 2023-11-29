/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.28.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { CamelCasedProperties } from 'type-fest'
import {
  AccountInfoForAddr,
  Action,
  Addr,
  AssetEntry,
  Binary,
  CallbackMsg,
  ConfigResponse,
  ContractVersion,
  ExecuteMsg,
  Expiration,
  GovernanceDetailsForAddr,
  GovernanceDetailsForString,
  InfoResponse,
  InstantiateMsg,
  ManagerModuleInfo,
  MigrateMsg,
  Module,
  ModuleAddressesResponse,
  ModuleInfo,
  ModuleInfosResponse,
  ModuleInstallConfig,
  ModuleReference,
  ModuleVersion,
  ModuleVersionsResponse,
  Namespace,
  OwnershipForString,
  QueryMsg,
  SubAccountIdsResponse,
  Timestamp,
  Uint64,
  UpdateSubAccountAction,
} from './Manager.types'
export abstract class ManagerExecuteMsgBuilder {
  static execOnModule = ({
    execMsg,
    moduleId,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        exec_on_module: unknown
      }
    >['exec_on_module']
  >): ExecuteMsg => {
    return {
      exec_on_module: {
        exec_msg: execMsg,
        module_id: moduleId,
      } as const,
    }
  }
  static updateInternalConfig = (config: Binary): ExecuteMsg => {
    return {
      update_internal_config: config,
    }
  }
  static installModules = ({
    modules,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        install_modules: unknown
      }
    >['install_modules']
  >): ExecuteMsg => {
    return {
      install_modules: {
        modules,
      } as const,
    }
  }
  static registerModule = ({
    module,
    moduleAddr,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        register_module: unknown
      }
    >['register_module']
  >): ExecuteMsg => {
    return {
      register_module: {
        module,
        module_addr: moduleAddr,
      } as const,
    }
  }
  static uninstallModule = ({
    moduleId,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        uninstall_module: unknown
      }
    >['uninstall_module']
  >): ExecuteMsg => {
    return {
      uninstall_module: {
        module_id: moduleId,
      } as const,
    }
  }
  static upgrade = ({
    modules,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        upgrade: unknown
      }
    >['upgrade']
  >): ExecuteMsg => {
    return {
      upgrade: {
        modules,
      } as const,
    }
  }
  static createSubAccount = ({
    baseAsset,
    description,
    installModules,
    link,
    name,
    namespace,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        create_sub_account: unknown
      }
    >['create_sub_account']
  >): ExecuteMsg => {
    return {
      create_sub_account: {
        base_asset: baseAsset,
        description,
        install_modules: installModules,
        link,
        name,
        namespace,
      } as const,
    }
  }
  static updateInfo = ({
    description,
    link,
    name,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_info: unknown
      }
    >['update_info']
  >): ExecuteMsg => {
    return {
      update_info: {
        description,
        link,
        name,
      } as const,
    }
  }
  static setOwner = ({
    owner,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        set_owner: unknown
      }
    >['set_owner']
  >): ExecuteMsg => {
    return {
      set_owner: {
        owner,
      } as const,
    }
  }
  static updateStatus = ({
    isSuspended,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_status: unknown
      }
    >['update_status']
  >): ExecuteMsg => {
    return {
      update_status: {
        is_suspended: isSuspended,
      } as const,
    }
  }
  static updateSettings = ({
    ibcEnabled,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_settings: unknown
      }
    >['update_settings']
  >): ExecuteMsg => {
    return {
      update_settings: {
        ibc_enabled: ibcEnabled,
      } as const,
    }
  }
  static updateSubAccount = (
    updateSubAccountAction: UpdateSubAccountAction,
  ): ExecuteMsg => {
    return {
      update_sub_account: updateSubAccountAction,
    }
  }
  static callback = (): ExecuteMsg => {
    return {
      callback: {} as const,
    }
  }
  static updateOwnership = (action: Action): ExecuteMsg => {
    return {
      update_ownership: action,
    }
  }
}
export abstract class ManagerQueryMsgBuilder {
  static moduleVersions = ({
    ids,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        module_versions: unknown
      }
    >['module_versions']
  >): QueryMsg => {
    return {
      module_versions: {
        ids,
      } as const,
    }
  }
  static moduleAddresses = ({
    ids,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        module_addresses: unknown
      }
    >['module_addresses']
  >): QueryMsg => {
    return {
      module_addresses: {
        ids,
      } as const,
    }
  }
  static moduleInfos = ({
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        module_infos: unknown
      }
    >['module_infos']
  >): QueryMsg => {
    return {
      module_infos: {
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static config = (): QueryMsg => {
    return {
      config: {} as const,
    }
  }
  static info = (): QueryMsg => {
    return {
      info: {} as const,
    }
  }
  static subAccountIds = ({
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        sub_account_ids: unknown
      }
    >['sub_account_ids']
  >): QueryMsg => {
    return {
      sub_account_ids: {
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static ownership = (): QueryMsg => {
    return {
      ownership: {} as const,
    }
  }
}