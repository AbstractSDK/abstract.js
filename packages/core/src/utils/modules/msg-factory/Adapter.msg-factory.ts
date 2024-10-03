import { ContractMsg } from '@abstract-money/core'
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
   * @param proxyAddress
   * @param request
   */
  static executeAdapter = <TAppMsg>({
    proxyAddress,
    request,
  }: CamelCasedProperties<
    AdapterRequestMsg<TAppMsg>
  >): AdapterExecuteMsg<TAppMsg> => {
    return ModuleExecuteMsgFactory.module({
      proxy_address: proxyAddress,
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
   * @param proxyAddress
   */
  static authorizedAddresses = (
    proxyAddress?: string,
  ): AdapterQueryMsg<never> => {
    return ModuleQueryMsgFactory.base({
      authorized_addresses: {
        proxy_address: proxyAddress,
      },
    })
  }

  /**
   * Base adapter config query.
   */
  static config = (): AdapterQueryMsg<never> => {
    return ModuleQueryMsgFactory.base({
      config: {},
    })
  }
}
