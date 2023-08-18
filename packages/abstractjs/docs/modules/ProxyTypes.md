[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ProxyTypes

# Namespace: ProxyTypes

## Table of contents

### Interfaces

- [AccountValue](../interfaces/ProxyTypes.AccountValue.md)
- [AssetBaseForAddr](../interfaces/ProxyTypes.AssetBaseForAddr.md)
- [AssetConfigResponse](../interfaces/ProxyTypes.AssetConfigResponse.md)
- [AssetsConfigResponse](../interfaces/ProxyTypes.AssetsConfigResponse.md)
- [AssetsInfoResponse](../interfaces/ProxyTypes.AssetsInfoResponse.md)
- [BaseAssetResponse](../interfaces/ProxyTypes.BaseAssetResponse.md)
- [CallbackInfo](../interfaces/ProxyTypes.CallbackInfo.md)
- [Coin](../interfaces/ProxyTypes.Coin.md)
- [ConfigResponse](../interfaces/ProxyTypes.ConfigResponse.md)
- [Empty](../interfaces/ProxyTypes.Empty.md)
- [HoldingAmountResponse](../interfaces/ProxyTypes.HoldingAmountResponse.md)
- [IbcTimeout](../interfaces/ProxyTypes.IbcTimeout.md)
- [IbcTimeoutBlock](../interfaces/ProxyTypes.IbcTimeoutBlock.md)
- [InstantiateMsg](../interfaces/ProxyTypes.InstantiateMsg.md)
- [MigrateMsg](../interfaces/ProxyTypes.MigrateMsg.md)
- [OracleAsset](../interfaces/ProxyTypes.OracleAsset.md)
- [TokenValueResponse](../interfaces/ProxyTypes.TokenValueResponse.md)

### Type Aliases

- [Addr](ProxyTypes.md#addr)
- [AssetEntry](ProxyTypes.md#assetentry)
- [AssetInfoBaseForAddr](ProxyTypes.md#assetinfobaseforaddr)
- [BankMsg](ProxyTypes.md#bankmsg)
- [BankQuery](ProxyTypes.md#bankquery)
- [Binary](ProxyTypes.md#binary)
- [CosmosMsgForEmpty](ProxyTypes.md#cosmosmsgforempty)
- [Decimal](ProxyTypes.md#decimal)
- [DexAssetPairing](ProxyTypes.md#dexassetpairing)
- [DistributionMsg](ProxyTypes.md#distributionmsg)
- [ExecuteMsg](ProxyTypes.md#executemsg)
- [ExecuteMsg1](ProxyTypes.md#executemsg1)
- [GovMsg](ProxyTypes.md#govmsg)
- [HostAction](ProxyTypes.md#hostaction)
- [IbcMsg](ProxyTypes.md#ibcmsg)
- [IbcQuery](ProxyTypes.md#ibcquery)
- [InternalAction](ProxyTypes.md#internalaction)
- [PoolAddressBaseForAddr](ProxyTypes.md#pooladdressbaseforaddr)
- [PriceSource](ProxyTypes.md#pricesource)
- [ProxyExecuteMsg](ProxyTypes.md#proxyexecutemsg)
- [QueryMsg](ProxyTypes.md#querymsg)
- [QueryRequestForEmpty](ProxyTypes.md#queryrequestforempty)
- [StakingMsg](ProxyTypes.md#stakingmsg)
- [StakingQuery](ProxyTypes.md#stakingquery)
- [Timestamp](ProxyTypes.md#timestamp)
- [Uint128](ProxyTypes.md#uint128)
- [Uint64](ProxyTypes.md#uint64)
- [UncheckedPriceSource](ProxyTypes.md#uncheckedpricesource)
- [UncheckedProxyAsset](ProxyTypes.md#uncheckedproxyasset)
- [VoteOption](ProxyTypes.md#voteoption)
- [WasmMsg](ProxyTypes.md#wasmmsg)
- [WasmQuery](ProxyTypes.md#wasmquery)

## Type Aliases

### Addr

Ƭ **Addr**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:424](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L424)

___

### AssetEntry

Ƭ **AssetEntry**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:346](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L346)

___

### AssetInfoBaseForAddr

Ƭ **AssetInfoBaseForAddr**: { `native`: `string`  } \| { `cw20`: [`Addr`](ProxyTypes.md#addr)  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:417](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L417)

___

### BankMsg

Ƭ **BankMsg**: { `send`: { `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[] ; `to_address`: `string`  }  } \| { `burn`: { `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[]  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:78](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L78)

___

### BankQuery

Ƭ **BankQuery**: { `balance`: { `address`: `string` ; `denom`: `string`  }  } \| { `all_balances`: { `address`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:271](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L271)

___

### Binary

Ƭ **Binary**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:122](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L122)

___

### CosmosMsgForEmpty

Ƭ **CosmosMsgForEmpty**: { `bank`: [`BankMsg`](ProxyTypes.md#bankmsg)  } \| { `custom`: [`Empty`](../interfaces/ProxyTypes.Empty.md)  } \| { `staking`: [`StakingMsg`](ProxyTypes.md#stakingmsg)  } \| { `distribution`: [`DistributionMsg`](ProxyTypes.md#distributionmsg)  } \| { `stargate`: { `type_url`: `string` ; `value`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `ibc`: [`IbcMsg`](ProxyTypes.md#ibcmsg)  } \| { `wasm`: [`WasmMsg`](ProxyTypes.md#wasmmsg)  } \| { `gov`: [`GovMsg`](ProxyTypes.md#govmsg)  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:50](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L50)

___

### Decimal

Ƭ **Decimal**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:362](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L362)

___

### DexAssetPairing

Ƭ **DexAssetPairing**: [[`AssetEntry`](ProxyTypes.md#assetentry), [`AssetEntry`](ProxyTypes.md#assetentry), `string`]

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:361](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L361)

___

### DistributionMsg

Ƭ **DistributionMsg**: { `set_withdraw_address`: { `address`: `string`  }  } \| { `withdraw_delegator_reward`: { `validator`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:111](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L111)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `set_admin`: { `admin`: `string`  }  } \| { `module_action`: { `msgs`: [`CosmosMsgForEmpty`](ProxyTypes.md#cosmosmsgforempty)[]  }  } \| { `module_action_with_data`: { `msg`: [`CosmosMsgForEmpty`](ProxyTypes.md#cosmosmsgforempty)  }  } \| { `ibc_action`: { `msgs`: [`ExecuteMsg1`](ProxyTypes.md#executemsg1)[]  }  } \| { `add_module`: { `module`: `string`  }  } \| { `remove_module`: { `module`: `string`  }  } \| { `update_assets`: { `to_add`: [`UncheckedProxyAsset`](ProxyTypes.md#uncheckedproxyasset)[] ; `to_remove`: [`AssetEntry`](ProxyTypes.md#assetentry)[]  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:13](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L13)

___

### ExecuteMsg1

Ƭ **ExecuteMsg1**: { `update_admin`: { `admin`: `string`  }  } \| { `update_config`: { `ans_host?`: `string` \| ``null`` ; `version_control?`: `string` \| ``null``  }  } \| { `send_funds`: { `funds`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[] ; `host_chain`: `string`  }  } \| { `register`: { `host_chain`: `string`  }  } \| { `send_packet`: { `action`: [`HostAction`](ProxyTypes.md#hostaction) ; `callback_info?`: [`CallbackInfo`](../interfaces/ProxyTypes.CallbackInfo.md) \| ``null`` ; `host_chain`: `string` ; `retries`: `number`  }  } \| { `remove_host`: { `host_chain`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:188](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L188)

___

### GovMsg

Ƭ **GovMsg**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `vote` | { `proposal_id`: `number` ; `vote`: [`VoteOption`](ProxyTypes.md#voteoption)  } |
| `vote.proposal_id` | `number` |
| `vote.vote` | [`VoteOption`](ProxyTypes.md#voteoption) |

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:181](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L181)

___

### HostAction

Ƭ **HostAction**: { `app`: { `msg`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `dispatch`: { `msgs`: [`CosmosMsgForEmpty`](ProxyTypes.md#cosmosmsgforempty)[]  }  } \| { `query`: { `msgs`: [`QueryRequestForEmpty`](ProxyTypes.md#queryrequestforempty)[]  }  } \| { `send_all_back`: {}  } \| { `balances`: {}  } \| { `internal`: [`InternalAction`](ProxyTypes.md#internalaction)  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:224](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L224)

___

### IbcMsg

Ƭ **IbcMsg**: { `transfer`: { `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md) ; `channel_id`: `string` ; `timeout`: [`IbcTimeout`](../interfaces/ProxyTypes.IbcTimeout.md) ; `to_address`: `string`  }  } \| { `send_packet`: { `channel_id`: `string` ; `data`: [`Binary`](ProxyTypes.md#binary) ; `timeout`: [`IbcTimeout`](../interfaces/ProxyTypes.IbcTimeout.md)  }  } \| { `close_channel`: { `channel_id`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:123](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L123)

___

### IbcQuery

Ƭ **IbcQuery**: { `port_id`: {}  } \| { `list_channels`: { `port_id?`: `string` \| ``null``  }  } \| { `channel`: { `channel_id`: `string` ; `port_id?`: `string` \| ``null``  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:306](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L306)

___

### InternalAction

Ƭ **InternalAction**: ``"who_am_i"`` \| { `register`: { `account_proxy_address`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:339](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L339)

___

### PoolAddressBaseForAddr

Ƭ **PoolAddressBaseForAddr**: { `separate_addresses`: { `liquidity`: [`Addr`](ProxyTypes.md#addr) ; `swap`: [`Addr`](ProxyTypes.md#addr)  }  } \| { `contract`: [`Addr`](ProxyTypes.md#addr)  } \| { `id`: `number`  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:452](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L452)

___

### PriceSource

Ƭ **PriceSource**: ``"None"`` \| { `Pool`: { `address`: [`PoolAddressBaseForAddr`](ProxyTypes.md#pooladdressbaseforaddr) ; `pair`: [`AssetInfoBaseForAddr`](ProxyTypes.md#assetinfobaseforaddr)[]  }  } \| { `LiquidityToken`: { `pool_address`: [`PoolAddressBaseForAddr`](ProxyTypes.md#pooladdressbaseforaddr) ; `pool_assets`: [`AssetInfoBaseForAddr`](ProxyTypes.md#assetinfobaseforaddr)[]  }  } \| { `ValueAs`: { `asset`: [`AssetInfoBaseForAddr`](ProxyTypes.md#assetinfobaseforaddr) ; `multiplier`: [`Decimal`](ProxyTypes.md#decimal)  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:432](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L432)

___

### ProxyExecuteMsg

Ƭ **ProxyExecuteMsg**: [`ExecuteMsg`](ProxyTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:492](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L492)

___

### QueryMsg

Ƭ **QueryMsg**: { `config`: {}  } \| { `total_value`: {}  } \| { `token_value`: { `identifier`: [`AssetEntry`](ProxyTypes.md#assetentry)  }  } \| { `holding_amount`: { `identifier`: [`AssetEntry`](ProxyTypes.md#assetentry)  }  } \| { `asset_config`: { `identifier`: [`AssetEntry`](ProxyTypes.md#assetentry)  }  } \| { `assets_config`: { `limit?`: `number` \| ``null`` ; `start_after?`: [`AssetEntry`](ProxyTypes.md#assetentry) \| ``null``  }  } \| { `assets_info`: { `limit?`: `number` \| ``null`` ; `start_after?`: [`AssetInfoBaseForAddr`](ProxyTypes.md#assetinfobaseforaddr) \| ``null``  }  } \| { `base_asset`: `Record`<`string`, `never`\>  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:380](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L380)

___

### QueryRequestForEmpty

Ƭ **QueryRequestForEmpty**: { `bank`: [`BankQuery`](ProxyTypes.md#bankquery)  } \| { `custom`: [`Empty`](../interfaces/ProxyTypes.Empty.md)  } \| { `staking`: [`StakingQuery`](ProxyTypes.md#stakingquery)  } \| { `stargate`: { `data`: [`Binary`](ProxyTypes.md#binary) ; `path`: `string`  }  } \| { `ibc`: [`IbcQuery`](ProxyTypes.md#ibcquery)  } \| { `wasm`: [`WasmQuery`](ProxyTypes.md#wasmquery)  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:249](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L249)

___

### StakingMsg

Ƭ **StakingMsg**: { `delegate`: { `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md) ; `validator`: `string`  }  } \| { `undelegate`: { `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md) ; `validator`: `string`  }  } \| { `redelegate`: { `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md) ; `dst_validator`: `string` ; `src_validator`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:91](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L91)

___

### StakingQuery

Ƭ **StakingQuery**: { `bonded_denom`: {}  } \| { `all_delegations`: { `delegator`: `string`  }  } \| { `delegation`: { `delegator`: `string` ; `validator`: `string`  }  } \| { `all_validators`: {}  } \| { `validator`: { `address`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:283](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L283)

___

### Timestamp

Ƭ **Timestamp**: [`Uint64`](ProxyTypes.md#uint64)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:144](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L144)

___

### Uint128

Ƭ **Uint128**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:90](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L90)

___

### Uint64

Ƭ **Uint64**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:145](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L145)

___

### UncheckedPriceSource

Ƭ **UncheckedPriceSource**: ``"None"`` \| { `Pair`: [`DexAssetPairing`](ProxyTypes.md#dexassetpairing)  } \| { `LiquidityToken`: {}  } \| { `ValueAs`: { `asset`: [`AssetEntry`](ProxyTypes.md#assetentry) ; `multiplier`: [`Decimal`](ProxyTypes.md#decimal)  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:347](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L347)

___

### UncheckedProxyAsset

Ƭ **UncheckedProxyAsset**: [[`AssetEntry`](ProxyTypes.md#assetentry), [`UncheckedPriceSource`](ProxyTypes.md#uncheckedpricesource)]

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:12](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L12)

___

### VoteOption

Ƭ **VoteOption**: ``"yes"`` \| ``"no"`` \| ``"abstain"`` \| ``"no_with_veto"``

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:187](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L187)

___

### WasmMsg

Ƭ **WasmMsg**: { `execute`: { `contract_addr`: `string` ; `funds`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[] ; `msg`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `instantiate`: { `admin?`: `string` \| ``null`` ; `code_id`: `number` ; `funds`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[] ; `label`: `string` ; `msg`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `migrate`: { `contract_addr`: `string` ; `msg`: [`Binary`](ProxyTypes.md#binary) ; `new_code_id`: `number`  }  } \| { `update_admin`: { `admin`: `string` ; `contract_addr`: `string`  }  } \| { `clear_admin`: { `contract_addr`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:146](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L146)

___

### WasmQuery

Ƭ **WasmQuery**: { `smart`: { `contract_addr`: `string` ; `msg`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `raw`: { `contract_addr`: `string` ; `key`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `contract_info`: { `contract_addr`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:321](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/proxy/Proxy.types.ts#L321)
