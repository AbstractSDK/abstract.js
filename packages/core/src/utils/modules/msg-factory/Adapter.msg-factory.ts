import { type AppQueryMsg, ContractMsg } from '@abstract-money/core'
import { CamelCasedProperties } from 'type-fest'
import {
  AdapterBaseExecuteMsg,
  AdapterExecuteMsg,
  AdapterQueryMsg,
  AdapterRequestMsg,
} from './Adapter.types'
import {
  ModuleExecuteMsgFactory,
  ModuleQueryMsgFactory,
} from './Module.msg-factory'

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
export abstract class AdapterExecuteMsgFactory {
  /**
   * Make a request to an adapter module.
   * @param accountAddress
   * @param request
   */
  static executeAdapter = <TAppMsg>({
    accountAddress,
    request,
  }: CamelCasedProperties<
    AdapterRequestMsg<TAppMsg>
  >): AdapterExecuteMsg<TAppMsg> => {
    return ModuleExecuteMsgFactory.module({
      account_address: accountAddress,
      request,
    })
  }

  /**
   * Update the traders on an adapter.
   */
  static updateAuthorizedAddresses = ({
    toAdd,
    toRemove,
  }: CamelCasedProperties<
    Extract<
      AdapterBaseExecuteMsg,
      { update_authorized_addresses: unknown }
    >['update_authorized_addresses']
  >): AdapterExecuteMsg<never> => {
    return ModuleExecuteMsgFactory.base({
      update_authorized_addresses: {
        to_add: toAdd,
        to_remove: toRemove,
      },
    })
  }
}

export abstract class AdapterQueryMsgBuilder {
  /**
   * Query an adatper module.
   * @param request request msg for the given api
   */
  static query = <TAppMsg extends ContractMsg>(
    request: TAppMsg,
  ): AdapterQueryMsg<TAppMsg> => {
    return ModuleQueryMsgFactory.module(request)
  }

  /**
   * Base adapter authorized addresses query.
   * @param accountAddress
   */
  static authorizedAddresses = (
    accountAddress?: string,
  ): AdapterQueryMsg<never> => {
    return ModuleQueryMsgFactory.base({
      authorized_addresses: {
        account_address: accountAddress,
      },
    })
  }

  /**
   * Base adapter config query.
   */
  static config = (): AdapterQueryMsg<never> => {
    return ModuleQueryMsgFactory.base({
      base_config: {},
    })
  }

  /**
   * App module data query.
   */
  static moduleData = (): AppQueryMsg<never> => {
    return ModuleQueryMsgFactory.base({
      module_data: {},
    })
  }
}
