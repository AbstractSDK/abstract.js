/**
* This file was automatically generated by @abstract-money/ts-codegen@0.37.0-beta-2.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @abstract-money/ts-codegen generate command to regenerate this file.
*/

export type Decimal = string;
export interface InstantiateMsg {
  rake?: Decimal | null;
}
export type ExecuteMsg = {
  create_round: {
    base_bet_token: AssetEntry;
    description: string;
    name: string;
  };
} | {
  register: {
    round_id: number;
  };
} | {
  update_accounts: {
    round_id: number;
    to_add: AccountOdds[];
    to_remove: AccountId[];
  };
} | {
  place_bet: {
    bet: Bet;
    round_id: number;
  };
} | {
  distribute_winnings: {
    round_id: number;
  };
} | {
  close_round: {
    round_id: number;
    winner?: AccountId | null;
  };
} | {
  update_config: {
    rake?: Decimal | null;
  };
};
export type AssetEntry = string;
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
  round: {
    round_id: number;
  };
} | {
  list_rounds: {
    limit?: number | null;
    start_after?: number | null;
  };
} | {
  odds: {
    round_id: number;
    team_id: AccountId;
  };
} | {
  list_odds: {
    round_id: number;
  };
} | {
  config: {};
} | {
  bets: {
    round_id: number;
  };
};
export interface MigrateMsg {
  [k: string]: unknown;
}
export type Addr = string;
export interface BetsResponse {
  bets: [Addr, Uint128][];
  round_id: number;
}
export interface ConfigResponse {
  rake: Decimal;
}
export interface ListOddsResponse {
  odds: AccountOdds[];
  round_id: number;
}
export type RoundStatus = ("open" | "rewards_distributed") | {
  closed: {
    winning_team?: AccountId | null;
  };
};
export interface RoundsResponse {
  rounds: RoundResponse[];
}
export interface RoundResponse {
  bet_count: number;
  description: string;
  id: number;
  name: string;
  status: RoundStatus;
  teams: AccountId[];
  total_bet: AnsAsset;
}
export interface OddsResponse {
  odds: Decimal;
  round_id: number;
}