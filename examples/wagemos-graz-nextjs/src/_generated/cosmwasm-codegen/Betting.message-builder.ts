/**
* This file was automatically generated by @abstract-money/ts-codegen@0.35.4.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

import { Decimal, InstantiateMsg, ExecuteMsg, AssetEntry, AccountTrace, ChainName, Uint128, AccountOdds, AccountId, Bet, AnsAsset, QueryMsg, MigrateMsg, Addr, BetsResponse, ConfigResponse, ListOddsResponse, RoundStatus, RoundsResponse, RoundResponse, OddsResponse } from "./Betting.types";
import { CamelCasedProperties } from "type-fest";
export abstract class BettingExecuteMsgBuilder {
  static createRound = ({
    baseBetToken,
    description,
    name
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    create_round: unknown;
  }>["create_round"]>): ExecuteMsg => {
    return {
      create_round: ({
        base_bet_token: baseBetToken,
        description,
        name
      } as const)
    };
  };
  static register = ({
    roundId
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    register: unknown;
  }>["register"]>): ExecuteMsg => {
    return {
      register: ({
        round_id: roundId
      } as const)
    };
  };
  static updateAccounts = ({
    roundId,
    toAdd,
    toRemove
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    update_accounts: unknown;
  }>["update_accounts"]>): ExecuteMsg => {
    return {
      update_accounts: ({
        round_id: roundId,
        to_add: toAdd,
        to_remove: toRemove
      } as const)
    };
  };
  static placeBet = ({
    bet,
    roundId
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    place_bet: unknown;
  }>["place_bet"]>): ExecuteMsg => {
    return {
      place_bet: ({
        bet,
        round_id: roundId
      } as const)
    };
  };
  static distributeWinnings = ({
    roundId
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    distribute_winnings: unknown;
  }>["distribute_winnings"]>): ExecuteMsg => {
    return {
      distribute_winnings: ({
        round_id: roundId
      } as const)
    };
  };
  static closeRound = ({
    roundId,
    winner
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    close_round: unknown;
  }>["close_round"]>): ExecuteMsg => {
    return {
      close_round: ({
        round_id: roundId,
        winner
      } as const)
    };
  };
  static updateConfig = ({
    rake
  }: CamelCasedProperties<Extract<ExecuteMsg, {
    update_config: unknown;
  }>["update_config"]>): ExecuteMsg => {
    return {
      update_config: ({
        rake
      } as const)
    };
  };
}
export abstract class BettingQueryMsgBuilder {
  static round = ({
    roundId
  }: CamelCasedProperties<Extract<QueryMsg, {
    round: unknown;
  }>["round"]>): QueryMsg => {
    return {
      round: ({
        round_id: roundId
      } as const)
    };
  };
  static listRounds = ({
    limit,
    startAfter
  }: CamelCasedProperties<Extract<QueryMsg, {
    list_rounds: unknown;
  }>["list_rounds"]>): QueryMsg => {
    return {
      list_rounds: ({
        limit,
        start_after: startAfter
      } as const)
    };
  };
  static odds = ({
    roundId,
    teamId
  }: CamelCasedProperties<Extract<QueryMsg, {
    odds: unknown;
  }>["odds"]>): QueryMsg => {
    return {
      odds: ({
        round_id: roundId,
        team_id: teamId
      } as const)
    };
  };
  static listOdds = ({
    roundId
  }: CamelCasedProperties<Extract<QueryMsg, {
    list_odds: unknown;
  }>["list_odds"]>): QueryMsg => {
    return {
      list_odds: ({
        round_id: roundId
      } as const)
    };
  };
  static config = (): QueryMsg => {
    return {
      config: ({} as const)
    };
  };
  static bets = ({
    roundId
  }: CamelCasedProperties<Extract<QueryMsg, {
    bets: unknown;
  }>["bets"]>): QueryMsg => {
    return {
      bets: ({
        round_id: roundId
      } as const)
    };
  };
}