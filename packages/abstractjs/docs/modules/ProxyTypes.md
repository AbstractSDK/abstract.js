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
- [VoteOption](ProxyTypes.md#voteoption)
- [WasmMsg](ProxyTypes.md#wasmmsg)
- [WasmQuery](ProxyTypes.md#wasmquery)

## Type Aliases

### Addr

Ƭ **Addr**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:464](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L464)

___

### AssetEntry

Ƭ **AssetEntry**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:378](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L378)

___

### AssetInfoBaseForAddr

Ƭ **AssetInfoBaseForAddr**: { `native`: `string`  } \| { `cw20`: [`Addr`](ProxyTypes.md#addr)  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:457](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L457)

___

### BankMsg

Ƭ **BankMsg**: { `send`: { `[k: string]`: `unknown`; `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[] ; `to_address`: `string`  }  } \| { `burn`: { `[k: string]`: `unknown`; `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[]  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:77](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L77)

___

### BankQuery

Ƭ **BankQuery**: { `balance`: { `[k: string]`: `unknown`; `address`: `string` ; `denom`: `string`  }  } \| { `all_balances`: { `[k: string]`: `unknown`; `address`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:287](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L287)

___

### Binary

Ƭ **Binary**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:128](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L128)

___

### CosmosMsgForEmpty

Ƭ **CosmosMsgForEmpty**: { `bank`: [`BankMsg`](ProxyTypes.md#bankmsg)  } \| { `custom`: [`Empty`](../interfaces/ProxyTypes.Empty.md)  } \| { `staking`: [`StakingMsg`](ProxyTypes.md#stakingmsg)  } \| { `distribution`: [`DistributionMsg`](ProxyTypes.md#distributionmsg)  } \| { `stargate`: { `[k: string]`: `unknown`; `type_url`: `string` ; `value`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `ibc`: [`IbcMsg`](ProxyTypes.md#ibcmsg)  } \| { `wasm`: [`WasmMsg`](ProxyTypes.md#wasmmsg)  } \| { `gov`: [`GovMsg`](ProxyTypes.md#govmsg)  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:48](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L48)

___

### Decimal

Ƭ **Decimal**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:397](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L397)

___

### DexAssetPairing

Ƭ **DexAssetPairing**: [[`AssetEntry`](ProxyTypes.md#assetentry), [`AssetEntry`](ProxyTypes.md#assetentry), `string`]

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:396](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L396)

___

### DistributionMsg

Ƭ **DistributionMsg**: { `set_withdraw_address`: { `[k: string]`: `unknown`; `address`: `string`  }  } \| { `withdraw_delegator_reward`: { `[k: string]`: `unknown`; `validator`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:115](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L115)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `set_admin`: { `admin`: `string`  }  } \| { `module_action`: { `msgs`: [`CosmosMsgForEmpty`](ProxyTypes.md#cosmosmsgforempty)[]  }  } \| { `module_action_with_data`: { `msg`: [`CosmosMsgForEmpty`](ProxyTypes.md#cosmosmsgforempty)  }  } \| { `ibc_action`: { `msgs`: [`ExecuteMsg1`](ProxyTypes.md#executemsg1)[]  }  } \| { `add_module`: { `module`: `string`  }  } \| { `remove_module`: { `module`: `string`  }  } \| { `update_assets`: { `to_add`: [[`AssetEntry`](ProxyTypes.md#assetentry), [`UncheckedPriceSource`](ProxyTypes.md#uncheckedpricesource)][] ; `to_remove`: [`AssetEntry`](ProxyTypes.md#assetentry)[]  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:11](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L11)

___

### ExecuteMsg1

Ƭ **ExecuteMsg1**: { `update_admin`: { `admin`: `string`  }  } \| { `update_config`: { `ans_host?`: `string` \| ``null`` ; `version_control?`: `string` \| ``null``  }  } \| { `send_funds`: { `funds`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[] ; `host_chain`: `string`  }  } \| { `register`: { `host_chain`: `string`  }  } \| { `send_packet`: { `action`: [`HostAction`](ProxyTypes.md#hostaction) ; `callback_info?`: [`CallbackInfo`](../interfaces/ProxyTypes.CallbackInfo.md) \| ``null`` ; `host_chain`: `string` ; `retries`: `number`  }  } \| { `remove_host`: { `host_chain`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:203](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L203)

___

### GovMsg

Ƭ **GovMsg**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `vote` | { `[k: string]`: `unknown`; `proposal_id`: `number` ; `vote`: [`VoteOption`](ProxyTypes.md#voteoption)  } |
| `vote.proposal_id` | `number` |
| `vote.vote` | [`VoteOption`](ProxyTypes.md#voteoption) |

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:195](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L195)

___

### HostAction

Ƭ **HostAction**: { `app`: { `msg`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `dispatch`: { `msgs`: [`CosmosMsgForEmpty`](ProxyTypes.md#cosmosmsgforempty)[]  }  } \| { `query`: { `msgs`: [`QueryRequestForEmpty`](ProxyTypes.md#queryrequestforempty)[]  }  } \| { `send_all_back`: {}  } \| { `balances`: {}  } \| { `internal`: [`InternalAction`](ProxyTypes.md#internalaction)  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:239](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L239)

___

### IbcMsg

Ƭ **IbcMsg**: { `transfer`: { `[k: string]`: `unknown`; `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md) ; `channel_id`: `string` ; `timeout`: [`IbcTimeout`](../interfaces/ProxyTypes.IbcTimeout.md) ; `to_address`: `string`  }  } \| { `send_packet`: { `[k: string]`: `unknown`; `channel_id`: `string` ; `data`: [`Binary`](ProxyTypes.md#binary) ; `timeout`: [`IbcTimeout`](../interfaces/ProxyTypes.IbcTimeout.md)  }  } \| { `close_channel`: { `[k: string]`: `unknown`; `channel_id`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:129](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L129)

___

### IbcQuery

Ƭ **IbcQuery**: { `port_id`: { `[k: string]`: `unknown`;  }  } \| { `list_channels`: { `[k: string]`: `unknown`; `port_id?`: `string` \| ``null``  }  } \| { `channel`: { `[k: string]`: `unknown`; `channel_id`: `string` ; `port_id?`: `string` \| ``null``  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:331](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L331)

___

### InternalAction

Ƭ **InternalAction**: ``"who_am_i"`` \| { `register`: { `account_proxy_address`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:371](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L371)

___

### PoolAddressBaseForAddr

Ƭ **PoolAddressBaseForAddr**: { `separate_addresses`: { `liquidity`: [`Addr`](ProxyTypes.md#addr) ; `swap`: [`Addr`](ProxyTypes.md#addr)  }  } \| { `contract`: [`Addr`](ProxyTypes.md#addr)  } \| { `id`: `number`  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:495](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L495)

___

### PriceSource

Ƭ **PriceSource**: ``"None"`` \| { `Pool`: { `[k: string]`: `unknown`; `address`: [`PoolAddressBaseForAddr`](ProxyTypes.md#pooladdressbaseforaddr) ; `pair`: [`AssetInfoBaseForAddr`](ProxyTypes.md#assetinfobaseforaddr)[]  }  } \| { `LiquidityToken`: { `[k: string]`: `unknown`; `pool_address`: [`PoolAddressBaseForAddr`](ProxyTypes.md#pooladdressbaseforaddr) ; `pool_assets`: [`AssetInfoBaseForAddr`](ProxyTypes.md#assetinfobaseforaddr)[]  }  } \| { `ValueAs`: { `[k: string]`: `unknown`; `asset`: [`AssetInfoBaseForAddr`](ProxyTypes.md#assetinfobaseforaddr) ; `multiplier`: [`Decimal`](ProxyTypes.md#decimal)  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:472](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L472)

___

### ProxyExecuteMsg

Ƭ **ProxyExecuteMsg**: [`ExecuteMsg`](ProxyTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:535](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L535)

___

### QueryMsg

Ƭ **QueryMsg**: { `config`: {}  } \| { `total_value`: {}  } \| { `token_value`: { `identifier`: [`AssetEntry`](ProxyTypes.md#assetentry)  }  } \| { `holding_amount`: { `identifier`: [`AssetEntry`](ProxyTypes.md#assetentry)  }  } \| { `asset_config`: { `identifier`: [`AssetEntry`](ProxyTypes.md#assetentry)  }  } \| { `assets_config`: { `limit?`: `number` \| ``null`` ; `start_after?`: [`AssetEntry`](ProxyTypes.md#assetentry) \| ``null``  }  } \| { `assets_info`: { `limit?`: `number` \| ``null`` ; `start_after?`: [`AssetInfoBaseForAddr`](ProxyTypes.md#assetinfobaseforaddr) \| ``null``  }  } \| { `base_asset`: {}  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:420](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L420)

___

### QueryRequestForEmpty

Ƭ **QueryRequestForEmpty**: { `bank`: [`BankQuery`](ProxyTypes.md#bankquery)  } \| { `custom`: [`Empty`](../interfaces/ProxyTypes.Empty.md)  } \| { `staking`: [`StakingQuery`](ProxyTypes.md#stakingquery)  } \| { `stargate`: { `[k: string]`: `unknown`; `data`: [`Binary`](ProxyTypes.md#binary) ; `path`: `string`  }  } \| { `ibc`: [`IbcQuery`](ProxyTypes.md#ibcquery)  } \| { `wasm`: [`WasmQuery`](ProxyTypes.md#wasmquery)  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:264](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L264)

___

### StakingMsg

Ƭ **StakingMsg**: { `delegate`: { `[k: string]`: `unknown`; `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md) ; `validator`: `string`  }  } \| { `undelegate`: { `[k: string]`: `unknown`; `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md) ; `validator`: `string`  }  } \| { `redelegate`: { `[k: string]`: `unknown`; `amount`: [`Coin`](../interfaces/ProxyTypes.Coin.md) ; `dst_validator`: `string` ; `src_validator`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:92](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L92)

___

### StakingQuery

Ƭ **StakingQuery**: { `bonded_denom`: { `[k: string]`: `unknown`;  }  } \| { `all_delegations`: { `[k: string]`: `unknown`; `delegator`: `string`  }  } \| { `delegation`: { `[k: string]`: `unknown`; `delegator`: `string` ; `validator`: `string`  }  } \| { `all_validators`: { `[k: string]`: `unknown`;  }  } \| { `validator`: { `[k: string]`: `unknown`; `address`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:301](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L301)

___

### Timestamp

Ƭ **Timestamp**: [`Uint64`](ProxyTypes.md#uint64)

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:153](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L153)

___

### Uint128

Ƭ **Uint128**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:91](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L91)

___

### Uint64

Ƭ **Uint64**: `string`

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:154](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L154)

___

### UncheckedPriceSource

Ƭ **UncheckedPriceSource**: ``"None"`` \| { `Pair`: [`DexAssetPairing`](ProxyTypes.md#dexassetpairing)  } \| { `LiquidityToken`: { `[k: string]`: `unknown`;  }  } \| { `ValueAs`: { `[k: string]`: `unknown`; `asset`: [`AssetEntry`](ProxyTypes.md#assetentry) ; `multiplier`: [`Decimal`](ProxyTypes.md#decimal)  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:379](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L379)

___

### VoteOption

Ƭ **VoteOption**: ``"yes"`` \| ``"no"`` \| ``"abstain"`` \| ``"no_with_veto"``

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:202](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L202)

___

### WasmMsg

Ƭ **WasmMsg**: { `execute`: { `[k: string]`: `unknown`; `contract_addr`: `string` ; `funds`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[] ; `msg`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `instantiate`: { `[k: string]`: `unknown`; `admin?`: `string` \| ``null`` ; `code_id`: `number` ; `funds`: [`Coin`](../interfaces/ProxyTypes.Coin.md)[] ; `label`: `string` ; `msg`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `migrate`: { `[k: string]`: `unknown`; `contract_addr`: `string` ; `msg`: [`Binary`](ProxyTypes.md#binary) ; `new_code_id`: `number`  }  } \| { `update_admin`: { `[k: string]`: `unknown`; `admin`: `string` ; `contract_addr`: `string`  }  } \| { `clear_admin`: { `[k: string]`: `unknown`; `contract_addr`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:155](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L155)

___

### WasmQuery

Ƭ **WasmQuery**: { `smart`: { `[k: string]`: `unknown`; `contract_addr`: `string` ; `msg`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `raw`: { `[k: string]`: `unknown`; `contract_addr`: `string` ; `key`: [`Binary`](ProxyTypes.md#binary)  }  } \| { `contract_info`: { `[k: string]`: `unknown`; `contract_addr`: `string`  }  }

#### Defined in

[packages/abstractjs/src/account/proxy/Proxy.types.ts:350](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/proxy/Proxy.types.ts#L350)
