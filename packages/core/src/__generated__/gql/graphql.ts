/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A field whose value is a bech32 address: https://en.bitcoin.it/wiki/Bech32. */
  Bech32Address: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A field whose value is a Semantic Version: https://semver.org */
  Semver: any;
  /** string tuple custom scalar type */
  StringSemverTuple: any;
  /** string tuple custom scalar type */
  StringTuple: any;
  _Any: any;
  _FieldSet: any;
};

export type AbstractAccount = {
  __typename?: 'AbstractAccount';
  /** Abstract Account Seqence & Trace */
  accountId: AccountId;
  /**  ChainId of the Account  */
  chain: Scalars['String'];
  /**  The accountId prefixed with the chain *name* separated by '>'. juno>1 */
  id: Scalars['ID'];
  /** Info on the Account */
  info: AccountInfo;
  /** Manager address of the Account */
  manager: Scalars['String'];
  /** Modules installed on the Account */
  modules: Array<AccountModule>;
  /** The namespace of the Account */
  namespace?: Maybe<Scalars['String']>;
  /**  Root admin of the Account  */
  owner?: Maybe<Scalars['String']>;
  /**  Proxy address of the Account  */
  proxy: Scalars['String'];
  /** The subAccounts of the account */
  subAccounts: Array<AbstractAccount>;
  /** Details about the vault of the Account */
  vault?: Maybe<Vault>;
};

/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameService = {
  __typename?: 'AbstractNameService';
  asset?: Maybe<AnsAsset>;
  assets: Array<AnsAsset>;
  channel?: Maybe<AnsChannel>;
  channels: Array<AnsChannel>;
  contract?: Maybe<AnsContract>;
  contracts: Array<AnsContract>;
  id: Scalars['ID'];
  namespace?: Maybe<AnsNamespace>;
  namespaces: Array<AnsNamespace>;
  pool?: Maybe<AnsPool>;
  pools: Array<AnsPool>;
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServiceAssetArgs = {
  id: Scalars['ID'];
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServiceAssetsArgs = {
  filter?: InputMaybe<IdsFilter>;
  page?: InputMaybe<Page>;
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServiceChannelArgs = {
  id: Scalars['ID'];
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServiceChannelsArgs = {
  filter?: InputMaybe<EntriesFilter>;
  page?: InputMaybe<Page>;
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServiceContractArgs = {
  id: Scalars['ID'];
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServiceContractsArgs = {
  filter?: InputMaybe<EntriesFilter>;
  page?: InputMaybe<Page>;
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServiceNamespaceArgs = {
  id: Scalars['ID'];
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServiceNamespacesArgs = {
  page?: InputMaybe<Page>;
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServicePoolArgs = {
  id: Scalars['ID'];
};


/** Abstract Name Service is used to resolve names to addresses and vice versa. */
export type AbstractNameServicePoolsArgs = {
  filter?: InputMaybe<PoolFilter>;
};

export type AccountFilter = {
  /** Filter by the module and their version installed on the Account */
  modules?: InputMaybe<Array<AccountModuleFilter>>;
  owner?: InputMaybe<Scalars['Bech32Address']>;
};

export type AccountGovernance = {
  __typename?: 'AccountGovernance';
  governanceType: Scalars['String'];
  owner: Scalars['String'];
};

export type AccountId = {
  __typename?: 'AccountId';
  chainName: Scalars['String'];
  sequence: Scalars['Int'];
  trace?: Maybe<Array<Scalars['String']>>;
};

export type AccountIdInput = {
  sequence: Scalars['Int'];
  trace?: InputMaybe<Array<Scalars['String']>>;
};

export type AccountIdWithChain = {
  chain: Scalars['String'];
  sequence: Scalars['Int'];
  trace?: InputMaybe<Array<Scalars['String']>>;
};

export type AccountInfo = {
  __typename?: 'AccountInfo';
  chainId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  governance: AccountGovernance;
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** A module installed on an Account. */
export type AccountModule = {
  __typename?: 'AccountModule';
  /** Address of the module installed on the account */
  address: Scalars['Bech32Address'];
  /** namespace:name */
  id: Scalars['ID'];
  /** Info about the module in Version Control */
  info?: Maybe<Module>;
  /** Currently installed version of the module */
  version: Scalars['Semver'];
};

export type AccountModuleFilter = {
  id: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};

/** An asset registered on the Abstract Name Service. */
export type AnsAsset = {
  __typename?: 'AnsAsset';
  address: Scalars['String'];
  /** assetName */
  ansId?: Maybe<Scalars['String']>;
  /** chainid>assetName */
  id: Scalars['ID'];
  metadata?: Maybe<AssetMetadata>;
  type: AssetType;
};

export type AnsChannel = {
  __typename?: 'AnsChannel';
  chain: Scalars['String'];
  channel: Scalars['String'];
  /** chain:protocol */
  id: Scalars['ID'];
  protocol: Scalars['String'];
};

export type AnsContract = {
  __typename?: 'AnsContract';
  address: Scalars['Bech32Address'];
  ansId?: Maybe<Scalars['String']>;
  contract: Scalars['String'];
  /** contact:protocol */
  id: Scalars['ID'];
  protocol: Scalars['String'];
};

export type AnsNamespace = {
  __typename?: 'AnsNamespace';
  accountId: AccountId;
  id: Scalars['ID'];
  namespace: Scalars['String'];
};

/** An ANS pool entry */
export type AnsPool = {
  __typename?: 'AnsPool';
  /** The pool address, a string or number */
  address: Scalars['String'];
  assets: Array<Scalars['String']>;
  dex: Scalars['String'];
  /** Abstract Pool Id (number) */
  id: Scalars['ID'];
  type: PoolType;
};

export type AssetMetadata = {
  __typename?: 'AssetMetadata';
  coinGeckoId?: Maybe<Scalars['String']>;
  decimals?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  displayDecimals?: Maybe<Scalars['Int']>;
  /** denom */
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
};

/** The asset types supported by CosmWasm */
export enum AssetType {
  Cw20 = 'CW20',
  Cw1155 = 'CW1155',
  Native = 'NATIVE'
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ChainInfo = {
  __typename?: 'ChainInfo';
  /** The id of the chain */
  chainId: Scalars['ID'];
  /** The id of the chain */
  id: Scalars['ID'];
  /** The chain name */
  name: Scalars['String'];
  /** Chain Pretty name */
  prettyName: Scalars['String'];
  /** REST URL of the chain */
  restUrl: Scalars['String'];
  /** RPC URL of the chain */
  rpcUrl: Scalars['String'];
};

export type CreateAccount = {
  description?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Deployment = {
  __typename?: 'Deployment';
  accountFactory: Scalars['Bech32Address'];
  ansHost: Scalars['Bech32Address'];
  chain: Scalars['String'];
  id: Scalars['ID'];
  registry: Scalars['Bech32Address'];
  /** @deprecated Use registry */
  versionControl: Scalars['Bech32Address'];
};

export type EntriesFilter = {
  /** Filter by specific JSON Entries */
  entries?: InputMaybe<Array<Scalars['String']>>;
};

export type IdsFilter = {
  /** Filter by specific IDs */
  ids?: InputMaybe<Array<Scalars['String']>>;
};

export type Module = {
  __typename?: 'Module';
  address?: Maybe<Scalars['Bech32Address']>;
  codeId?: Maybe<Scalars['String']>;
  dependencies: Array<ModuleDependency>;
  /** namespace:name:version */
  id: Scalars['ID'];
  metadata?: Maybe<ModuleMetadata>;
  /** namespace:name */
  moduleId: Scalars['String'];
  /** JSON schema for the module within Abstract */
  moduleSchema?: Maybe<ModuleSchema>;
  monetization?: Maybe<ModuleMonetization>;
  /** The schema for the contract itself */
  schema?: Maybe<ModuleSchema>;
  type: ModuleType;
  version: Scalars['Semver'];
};

export type ModuleDependency = {
  __typename?: 'ModuleDependency';
  moduleId: Scalars['String'];
  versionRequirements: Array<Scalars['String']>;
};

export type ModuleFilter = {
  /** Filter by the module's name */
  name?: InputMaybe<Scalars['String']>;
  /** Filter by the module's namespace */
  namespace?: InputMaybe<Scalars['String']>;
  /** Filter by the module's status */
  status?: InputMaybe<ModuleStatus>;
  /** Filter by the module's version */
  version?: InputMaybe<Scalars['String']>;
};

export type ModuleMetadata = {
  __typename?: 'ModuleMetadata';
  category?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  docs?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  icon?: Maybe<Scalars['String']>;
  /** module_id/version/schema */
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  readme?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  /** @deprecated Use Module.type */
  type: ModuleType;
  website?: Maybe<Scalars['String']>;
};

export type ModuleMonetization = ModuleMonetizationFixedPrice;

export type ModuleMonetizationFixedPrice = {
  __typename?: 'ModuleMonetizationFixedPrice';
  /** The asset for the price */
  asset: Scalars['String'];
  /** The price of the module */
  price: Scalars['String'];
};

/** The CosmWasm schema for execute, query, migrate, and instantiate */
export type ModuleSchema = {
  __typename?: 'ModuleSchema';
  execute?: Maybe<Scalars['JSON']>;
  /** module_id/version/schema */
  id: Scalars['ID'];
  instantiate?: Maybe<Scalars['JSON']>;
  migrate?: Maybe<Scalars['JSON']>;
  query?: Maybe<Scalars['JSON']>;
  /** The module's schema */
  schema: Scalars['JSON'];
};

/** The status of a module in Version Control */
export enum ModuleStatus {
  Pending = 'PENDING',
  Registered = 'REGISTERED',
  Yanked = 'YANKED'
}

/** The different types of modules supported by Abstract. */
export enum ModuleType {
  AccountBase = 'account_base',
  Adapter = 'adapter',
  App = 'app',
  Native = 'native',
  Standalone = 'standalone'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a key-value pair to the cloudflare worker for the specified address. Returns the new value. */
  addPkKvPair?: Maybe<Scalars['JSON']>;
  registerVersionControl?: Maybe<Scalars['String']>;
};


export type MutationAddPkKvPairArgs = {
  address: Scalars['Bech32Address'];
  chain: Scalars['ID'];
  key: Scalars['String'];
  nonce?: InputMaybe<Scalars['Int']>;
  signature: Scalars['String'];
  value?: InputMaybe<Scalars['JSON']>;
};


export type MutationRegisterVersionControlArgs = {
  address: Scalars['Bech32Address'];
  auth: Scalars['String'];
  chain: Scalars['ID'];
};

export type Page = {
  afterId?: InputMaybe<Scalars['String']>;
};

export type PoolFilter = {
  /** The assets in the pool. Must have exactly 2 elements. */
  assetPair?: InputMaybe<Array<Scalars['String']>>;
  dex?: InputMaybe<Scalars['String']>;
};

export enum PoolType {
  ConstantProduct = 'ConstantProduct',
  LiquidityBootstrap = 'LiquidityBootstrap',
  Stable = 'Stable',
  Weighted = 'Weighted'
}

export type Query = {
  __typename?: 'Query';
  _service: _Service;
  /** Query an Account by its ID */
  account?: Maybe<AbstractAccount>;
  /** List the Accounts registered in Abstract for the given chain */
  accounts: Array<AbstractAccount>;
  /** Query multiple Accounts by their IDs */
  accountsByIds: Array<AbstractAccount>;
  /** Query Abstract Name Service */
  ans: AbstractNameService;
  /** Query info on a Cosmos chain */
  chainInfo: ChainInfo;
  /** List the chains supported by this subgraph */
  chains: Array<Scalars['String']>;
  /** Retrieve Abstract's deployment details for the given chain and optional version */
  deployment: Deployment;
  /** Retrieve each Abstract deployment */
  deployments: Array<Deployment>;
  /** Query the key-value pair for a given address */
  keyValueByAddress?: Maybe<Scalars['JSON']>;
  /** Query a module in Version Control by its moduleId. If version is not provided, will return latest */
  module?: Maybe<Module>;
  /** List the modules registered in Version Control */
  modules: Array<Module>;
  /** Retrieve the nonce from the cloudflare worker for setting a key value */
  nextKeyValueByAddressNonce: Scalars['Int'];
  test: Scalars['String'];
  /** Retrieve the version of the version of Abstract supported by the subgraph */
  version: Scalars['String'];
};


export type QueryAccountArgs = {
  accountId: AccountIdInput;
  chain: Scalars['ID'];
};


export type QueryAccountsArgs = {
  chain?: InputMaybe<Scalars['ID']>;
  chains: Array<Scalars['ID']>;
  filter?: InputMaybe<AccountFilter>;
  page?: InputMaybe<Page>;
};


export type QueryAccountsByIdsArgs = {
  ids: Array<AccountIdWithChain>;
};


export type QueryAnsArgs = {
  chain: Scalars['ID'];
};


export type QueryChainInfoArgs = {
  chain: Scalars['ID'];
};


export type QueryDeploymentArgs = {
  chain: Scalars['ID'];
  version?: InputMaybe<Scalars['String']>;
};


export type QueryKeyValueByAddressArgs = {
  address: Scalars['Bech32Address'];
  chain: Scalars['ID'];
  key: Scalars['String'];
};


export type QueryModuleArgs = {
  chain: Scalars['ID'];
  moduleId: Scalars['ID'];
  version?: InputMaybe<Scalars['Semver']>;
};


export type QueryModulesArgs = {
  chain: Scalars['ID'];
  filter?: InputMaybe<ModuleFilter>;
  page?: InputMaybe<Page>;
};


export type QueryNextKeyValueByAddressNonceArgs = {
  address: Scalars['Bech32Address'];
  chain: Scalars['ID'];
};

export type Vault = {
  __typename?: 'Vault';
  /** The assets registered to the Account */
  assets: Array<VaultAsset>;
  /** Base asset used for value calculation on the Account */
  baseAsset?: Maybe<Scalars['String']>;
  /** Proxy address */
  depositAddress: Scalars['String'];
  /** chain>proxyAddress */
  id: Scalars['ID'];
  /** Total value of all assets in vault */
  value?: Maybe<Scalars['String']>;
};

export type VaultAsset = {
  __typename?: 'VaultAsset';
  /** Amount of the asset held by the vault */
  balance?: Maybe<Scalars['String']>;
  /** Name of the asset in the vault */
  id: Scalars['ID'];
  /** ANS Info on the asset */
  info?: Maybe<AnsAsset>;
  /** Price source of the asset. Currently JSON serialized string of the price source */
  priceSource?: Maybe<Scalars['String']>;
  /** Value of the vault asset in the base asset */
  value?: Maybe<Scalars['String']>;
  /**
   * TODO
   * @deprecated Use priceSource
   */
  valueRef?: Maybe<Scalars['String']>;
};

export type _Service = {
  __typename?: '_Service';
  sdl?: Maybe<Scalars['String']>;
};

export type DeploymentQueryVariables = Exact<{
  chain: Scalars['ID'];
}>;


export type DeploymentQuery = { __typename?: 'Query', version: string, deployment: { __typename?: 'Deployment', ansHost: any, registry: any, accountFactory: any }, chainInfo: { __typename?: 'ChainInfo', rpcUrl: string } };

export type AssetsQueryQueryVariables = Exact<{
  chain: Scalars['ID'];
  filter: IdsFilter;
}>;


export type AssetsQueryQuery = { __typename?: 'Query', ans: { __typename?: 'AbstractNameService', assets: Array<{ __typename?: 'AnsAsset', id: string, type: AssetType, address: string }> } };


export const DeploymentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Deployment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"deployment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ansHost"}},{"kind":"Field","name":{"kind":"Name","value":"registry"}},{"kind":"Field","name":{"kind":"Name","value":"accountFactory"}}]}},{"kind":"Field","name":{"kind":"Name","value":"chainInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rpcUrl"}}]}}]}}]} as unknown as DocumentNode<DeploymentQuery, DeploymentQueryVariables>;
export const AssetsQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AssetsQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chain"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IdsFilter"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ans"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chain"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chain"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]}}]} as unknown as DocumentNode<AssetsQueryQuery, AssetsQueryQueryVariables>;