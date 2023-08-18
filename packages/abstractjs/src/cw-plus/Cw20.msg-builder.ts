/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

import { ExecuteMsg, Logo, QueryMsg } from './Cw20.types'
import { CamelCasedProperties } from 'type-fest'

export abstract class Cw20ExecuteMsgBuilder {
  static transfer = ({
    amount,
    recipient,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        transfer: unknown
      }
    >['transfer']
  >): ExecuteMsg => {
    return {
      transfer: {
        amount,
        recipient,
      } as const,
    }
  }
  static burn = ({
    amount,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        burn: unknown
      }
    >['burn']
  >): ExecuteMsg => {
    return {
      burn: {
        amount,
      } as const,
    }
  }
  static send = ({
    amount,
    contract,
    msg,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        send: unknown
      }
    >['send']
  >): ExecuteMsg => {
    return {
      send: {
        amount,
        contract,
        msg,
      } as const,
    }
  }
  static increaseAllowance = ({
    amount,
    expires,
    spender,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        increase_allowance: unknown
      }
    >['increase_allowance']
  >): ExecuteMsg => {
    return {
      increase_allowance: {
        amount,
        expires,
        spender,
      } as const,
    }
  }
  static decreaseAllowance = ({
    amount,
    expires,
    spender,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        decrease_allowance: unknown
      }
    >['decrease_allowance']
  >): ExecuteMsg => {
    return {
      decrease_allowance: {
        amount,
        expires,
        spender,
      } as const,
    }
  }
  static transferFrom = ({
    amount,
    owner,
    recipient,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        transfer_from: unknown
      }
    >['transfer_from']
  >): ExecuteMsg => {
    return {
      transfer_from: {
        amount,
        owner,
        recipient,
      } as const,
    }
  }
  static sendFrom = ({
    amount,
    contract,
    msg,
    owner,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        send_from: unknown
      }
    >['send_from']
  >): ExecuteMsg => {
    return {
      send_from: {
        amount,
        contract,
        msg,
        owner,
      } as const,
    }
  }
  static burnFrom = ({
    amount,
    owner,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        burn_from: unknown
      }
    >['burn_from']
  >): ExecuteMsg => {
    return {
      burn_from: {
        amount,
        owner,
      } as const,
    }
  }
  static mint = ({
    amount,
    recipient,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        mint: unknown
      }
    >['mint']
  >): ExecuteMsg => {
    return {
      mint: {
        amount,
        recipient,
      } as const,
    }
  }
  static updateMinter = ({
    newMinter,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_minter: unknown
      }
    >['update_minter']
  >): ExecuteMsg => {
    return {
      update_minter: {
        new_minter: newMinter,
      } as const,
    }
  }
  static updateMarketing = ({
    description,
    marketing,
    project,
  }: CamelCasedProperties<
    Extract<
      ExecuteMsg,
      {
        update_marketing: unknown
      }
    >['update_marketing']
  >): ExecuteMsg => {
    return {
      update_marketing: {
        description,
        marketing,
        project,
      } as const,
    }
  }
  static uploadLogo = (logo: Logo): ExecuteMsg => {
    return {
      upload_logo: logo,
    }
  }
}
export abstract class Cw20QueryMsgBuilder {
  static balance = ({
    address,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        balance: unknown
      }
    >['balance']
  >): QueryMsg => {
    return {
      balance: {
        address,
      } as const,
    }
  }
  static tokenInfo = (): QueryMsg => {
    return {
      token_info: {} as const,
    }
  }
  static minter = (): QueryMsg => {
    return {
      minter: {} as const,
    }
  }
  static allowance = ({
    owner,
    spender,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        allowance: unknown
      }
    >['allowance']
  >): QueryMsg => {
    return {
      allowance: {
        owner,
        spender,
      } as const,
    }
  }
  static allAllowances = ({
    limit,
    owner,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        all_allowances: unknown
      }
    >['all_allowances']
  >): QueryMsg => {
    return {
      all_allowances: {
        limit,
        owner,
        start_after: startAfter,
      } as const,
    }
  }
  static allAccounts = ({
    limit,
    startAfter,
  }: CamelCasedProperties<
    Extract<
      QueryMsg,
      {
        all_accounts: unknown
      }
    >['all_accounts']
  >): QueryMsg => {
    return {
      all_accounts: {
        limit,
        start_after: startAfter,
      } as const,
    }
  }
  static marketingInfo = (): QueryMsg => {
    return {
      marketing_info: {} as const,
    }
  }
  static downloadLogo = (): QueryMsg => {
    return {
      download_logo: {} as const,
    }
  }
}
