/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { ExecuteMsg } from './Staking.types'
import { CamelCasedProperties } from 'type-fest'

export abstract class StakingExecuteMsgBuilder {
  static delegate = ({
    amount,
    validator,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        delegate: unknown
      }
    >['delegate']
  >): ExecuteMsg => {
    return {
      delegate: {
        amount,
        validator,
      } as const,
    }
  }
  static undelegateFrom = ({
    amount,
    validator,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        undelegate_from: unknown
      }
    >['undelegate_from']
  >): ExecuteMsg => {
    return {
      undelegate_from: {
        amount,
        validator,
      } as const,
    }
  }
  static undelegateAll = (): ExecuteMsg => {
    return {
      undelegate_all: {} as const,
    }
  }
  static redelegate = ({
    amount,
    destinationValidator,
    sourceValidator,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        redelegate: unknown
      }
    >['redelegate']
  >): ExecuteMsg => {
    return {
      redelegate: {
        amount,
        destination_validator: destinationValidator,
        source_validator: sourceValidator,
      } as const,
    }
  }
  static setWithdrawAddress = ({
    newWithdrawAddress,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        set_withdraw_address: unknown
      }
    >['set_withdraw_address']
  >): ExecuteMsg => {
    return {
      set_withdraw_address: {
        new_withdraw_address: newWithdrawAddress,
      } as const,
    }
  }
  static withdrawDelegatorReward = ({
    validator,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        withdraw_delegator_reward: unknown
      }
    >['withdraw_delegator_reward']
  >): ExecuteMsg => {
    return {
      withdraw_delegator_reward: {
        validator,
      } as const,
    }
  }
  static withdrawAllRewards = (): ExecuteMsg => {
    return {
      withdraw_all_rewards: {} as const,
    }
  }
}