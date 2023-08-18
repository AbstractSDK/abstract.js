/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { QueryMsg } from './Dex.types'
import { CamelCasedProperties } from 'type-fest'

export abstract class DexQueryMsgBuilder {
  static simulateSwap = ({
    askAsset,
    dex,
    offerAsset,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        simulate_swap: unknown
      }
    >['simulate_swap']
  >): QueryMsg => {
    return {
      simulate_swap: {
        ask_asset: askAsset,
        dex,
        offer_asset: offerAsset,
      } as const,
    }
  }
}
