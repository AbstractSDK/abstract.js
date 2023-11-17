import {
  ModuleExecuteMsg,
  ModuleInstantiateMsg,
  ModuleMigrateMsg,
} from './Module.types'
import { ContractMsg } from '../clients'
import {
  AdapterBaseExecuteMsg,
  AdapterBaseInitMsg,
  AdapterBaseQueryMsg,
} from './adapters/Adapter.types'
import {
  AppBaseExecuteMsg,
  AppBaseInitMsg,
  AppBaseMigrateMsg,
  AppBaseQueryMsg,
} from './apps/App.types'

type ModuleBaseExecuteMsg = AdapterBaseExecuteMsg | AppBaseExecuteMsg

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export abstract class ModuleExecuteMsgFactory {
  static base = <TBaseMsg extends ModuleBaseExecuteMsg>(
    baseMsg: TBaseMsg,
  ): ModuleExecuteMsg<TBaseMsg, never> => {
    return {
      base: baseMsg,
    }
  }

  static module = <TModuleMsg extends ContractMsg>(
    moduleMsg: TModuleMsg,
  ): ModuleExecuteMsg<never, TModuleMsg> => {
    return {
      module: moduleMsg,
    }
  }
}

type ModuleBaseQueryMsg = AdapterBaseQueryMsg | AppBaseQueryMsg

/**
 * Allows building of a module instantiation msg for an Abstract module.
 */

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export abstract class ModuleQueryMsgFactory {
  static base = <TBaseMsg extends ModuleBaseQueryMsg>(
    baseMsg: TBaseMsg,
  ): ModuleExecuteMsg<TBaseMsg, never> => {
    return {
      base: baseMsg,
    }
  }

  static module = <TAppMsg extends ContractMsg>(
    appMsg: TAppMsg,
  ): ModuleExecuteMsg<never, TAppMsg> => {
    return {
      module: appMsg,
    }
  }
}

/**
 * Allows building of a module instantiation msg for an Abstract module.
 */

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export abstract class ModuleInitMsgFactory {
  /**
   * Build a module instantiation msg for an Abstract app module.
   * @param ansHostAddress
   * @param registryAddress
   * @param appModuleInitMsg
   */
  static app = <TAppMsg extends ContractMsg>(
    ansHostAddress: string,
    registryAddress: string,
    appModuleInitMsg: TAppMsg,
  ): ModuleInstantiateMsg<AppBaseInitMsg, TAppMsg> => {
    return {
      base: {
        ans_host_address: ansHostAddress,
        version_control_address: registryAddress,
      },
      module: appModuleInitMsg,
    }
  }

  /**
   * Build a module instantiation msg for an Abstract adapter module.
   * @param ansHostAddress
   * @param registryAddress
   * @param adapterInitMsg
   */
  static adapter = <TAppMsg extends ContractMsg>(
    ansHostAddress: string,
    registryAddress: string,
    adapterInitMsg: TAppMsg,
  ): ModuleInstantiateMsg<AdapterBaseInitMsg, TAppMsg> => {
    return {
      base: {
        ans_host_address: ansHostAddress,
        version_control_address: registryAddress,
      },
      module: adapterInitMsg,
    }
  }
}

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export abstract class ModuleMigrateMsgFactory {
  static app = <TAppMsg extends ContractMsg>(
    appMigrateMsg?: TAppMsg,
  ): ModuleMigrateMsg<AppBaseMigrateMsg, TAppMsg | Record<string, never>> => {
    return {
      base: {},
      module: appMigrateMsg ? appMigrateMsg : {},
    }
  }
}
