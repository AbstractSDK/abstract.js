/**
* This file was automatically generated by @abstract-money/ts-codegen@0.35.4.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

export type AssetEntry = string;
export type Decimal = string;
export interface InstantiateMsg {
  bet_asset?: AssetEntry | null;
  rake?: Decimal | null;
}
export type ExecuteMsg = {
  register: {};
} | {
  update_accounts: {
    to_add: AccountOdds[];
    to_remove: AccountId[];
  };
} | {
  place_bet: {
    bet: Bet;
  };
} | {
  distribute_winnings: {};
} | {
  close_round: {
    winner?: AccountId | null;
  };
} | {
  update_config: {
    rake?: Decimal | null;
  };
};
export type AccountTrace = "local" | {
  remote: ChainName[];
};
export type ChainName = string;
export type Uint128 = string;
export interface AccountOdds {
  account_id: AccountId;
  odds: Decimal;
}
export interface AccountId {
  seq: number;
  trace: AccountTrace;
}
export interface Bet {
  account_id: AccountId;
  asset: AnsAsset;
}
export interface AnsAsset {
  amount: Uint128;
  name: AssetEntry;
  [k: string]: unknown;
}
export type QueryMsg = {
  round: {};
} | {
  odds: {
    team_id: AccountId;
  };
} | {
  list_odds: {};
} | {
  config: {};
} | {
  bets: {};
};
export interface MigrateMsg {
  [k: string]: unknown;
}
export type Addr = string;
export interface BetsResponse {
  bets: [Addr, Uint128][];
}
export interface ConfigResponse {
  bet_denom: string;
  rake: Decimal;
}
export interface ListOddsResponse {
  odds: AccountOdds[];
}
export interface OddsResponse {
  odds: Decimal;
}
export type RoundStatus = ("open" | "rewards_distributed") | {
  closed: {
    winning_team?: AccountId | null;
  };
};
export interface RoundResponse {
  bet_count: number;
  description?: string | null;
  id: AccountId;
  name: string;
  status: RoundStatus;
  teams: AccountId[];
  total_bet: Coin;
}
export interface Coin {
  amount: Uint128;
  denom: string;
  [k: string]: unknown;
}