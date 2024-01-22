/*
{
  "module": {
    "request": {
      "dex": "junoswap",
      "action": {
        "swap": {
          "ask_asset": "junox",
          "offer_asset": [
            "dao",
            "10000"
          ],
          "max_spread": "0.01"
        }
      }
    }
  }
}
 */

import { type CamelCasedProperties } from 'type-fest'
import { ContractMsg } from '../../messages'
import {
  ModuleExecuteMsgFactory,
  ModuleQueryMsgFactory,
} from '../Module.msg-factory'
import {
  type AppBaseExecuteMsg,
  type AppExecuteMsg,
  type AppQueryMsg,
} from './App.types'

/**
 * Helper class to build messages to send to Abstract modules.
 */

export abstract class AppExecuteMsgFactory {
  /**
   * Make a request to an app module.
   * @param moduleMsg
   */
  static executeApp = <TAppMsg extends ContractMsg>(
    moduleMsg: TAppMsg,
  ): AppExecuteMsg<TAppMsg> => {
    return ModuleExecuteMsgFactory.module(moduleMsg)
  }

  /**
   * Update an app module's config.
   */
  static updateConfig = ({
    ansHostAddress,
  }: CamelCasedProperties<
    Extract<AppBaseExecuteMsg, { update_config: unknown }>['update_config']
  >): AppExecuteMsg<never> => {
    return ModuleExecuteMsgFactory.base({
      update_config: {
        ans_host_address: ansHostAddress,
      },
    })
  }
}

export abstract class AppQueryMsgFactory {
  /**
   * Query an app module.
   * @param request request msg for the given app
   */
  static queryApp = <TAppMsg extends ContractMsg>(
    request: TAppMsg,
  ): AppQueryMsg<TAppMsg> => {
    return ModuleQueryMsgFactory.module(request)
  }
  /**
   * Base app config query.
   */
  static config = (): AppQueryMsg<never> => {
    return ModuleQueryMsgFactory.base({
      config: {},
    })
  }

  /**
   * Base app admin query.
   */
  static admin = (): AppQueryMsg<never> => {
    return ModuleQueryMsgFactory.base({
      admin: {},
    })
  }
}
