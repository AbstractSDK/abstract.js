[@abstract-money/core](../README.md) / [Exports](../modules.md) / DexTypes

# Namespace: DexTypes

## Table of contents

### Interfaces

- [AnsAsset](../interfaces/DexTypes.AnsAsset.md)
- [ExecuteMsg](../interfaces/DexTypes.ExecuteMsg.md)
- [InstantiateMsg](../interfaces/DexTypes.InstantiateMsg.md)
- [MigrateMsg](../interfaces/DexTypes.MigrateMsg.md)
- [SimulateSwapResponse](../interfaces/DexTypes.SimulateSwapResponse.md)

### Type Aliases

- [AssetEntry](DexTypes.md#assetentry)
- [Decimal](DexTypes.md#decimal)
- [DexAction](DexTypes.md#dexaction)
- [DexAssetPairing](DexTypes.md#dexassetpairing)
- [DexExecuteMsg](DexTypes.md#dexexecutemsg)
- [QueryMsg](DexTypes.md#querymsg)
- [SwapRouter](DexTypes.md#swaprouter)
- [Uint128](DexTypes.md#uint128)

## Type Aliases

### AssetEntry

Ƭ **AssetEntry**: `string`

#### Defined in

[packages/abstractjs/src/modules/adapters/dex/Dex.types.ts:44](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/dex/Dex.types.ts#L44)

___

### Decimal

Ƭ **Decimal**: `string`

#### Defined in

[packages/abstractjs/src/modules/adapters/dex/Dex.types.ts:45](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/dex/Dex.types.ts#L45)

___

### DexAction

Ƭ **DexAction**: { `provide_liquidity`: { `assets`: [`AnsAsset`](../interfaces/DexTypes.AnsAsset.md)[] ; `max_spread?`: [`Decimal`](DexTypes.md#decimal) \| ``null``  }  } \| { `provide_liquidity_symmetric`: { `offer_asset`: [`AnsAsset`](../interfaces/DexTypes.AnsAsset.md) ; `paired_assets`: [`AssetEntry`](DexTypes.md#assetentry)[]  }  } \| { `withdraw_liquidity`: { `amount`: [`Uint128`](DexTypes.md#uint128) ; `lp_token`: [`AssetEntry`](DexTypes.md#assetentry)  }  } \| { `swap`: { `ask_asset`: [`AssetEntry`](DexTypes.md#assetentry) ; `belief_price?`: [`Decimal`](DexTypes.md#decimal) \| ``null`` ; `max_spread?`: [`Decimal`](DexTypes.md#decimal) \| ``null`` ; `offer_asset`: [`AnsAsset`](../interfaces/DexTypes.AnsAsset.md)  }  } \| { `custom_swap`: { `ask_assets`: [`AnsAsset`](../interfaces/DexTypes.AnsAsset.md)[] ; `max_spread?`: [`Decimal`](DexTypes.md#decimal) \| ``null`` ; `offer_assets`: [`AnsAsset`](../interfaces/DexTypes.AnsAsset.md)[] ; `router?`: [`SwapRouter`](DexTypes.md#swaprouter) \| ``null``  }  }

#### Defined in

[packages/abstractjs/src/modules/adapters/dex/Dex.types.ts:8](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/dex/Dex.types.ts#L8)

___

### DexAssetPairing

Ƭ **DexAssetPairing**: [`string`, `string`, `string`]

#### Defined in

[packages/abstractjs/src/modules/adapters/dex/Dex.types.ts:67](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/dex/Dex.types.ts#L67)

___

### DexExecuteMsg

Ƭ **DexExecuteMsg**: [`ExecuteMsg`](../interfaces/DexTypes.ExecuteMsg.md)

#### Defined in

[packages/abstractjs/src/modules/adapters/dex/Dex.types.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/dex/Dex.types.ts#L74)

___

### QueryMsg

Ƭ **QueryMsg**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `simulate_swap` | { `ask_asset`: [`AssetEntry`](DexTypes.md#assetentry) ; `dex?`: `string` \| ``null`` ; `offer_asset`: [`AnsAsset`](../interfaces/DexTypes.AnsAsset.md)  } |
| `simulate_swap.ask_asset` | [`AssetEntry`](DexTypes.md#assetentry) |
| `simulate_swap.dex?` | `string` \| ``null`` |
| `simulate_swap.offer_asset` | [`AnsAsset`](../interfaces/DexTypes.AnsAsset.md) |

#### Defined in

[packages/abstractjs/src/modules/adapters/dex/Dex.types.ts:59](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/dex/Dex.types.ts#L59)

___

### SwapRouter

Ƭ **SwapRouter**: ``"matrix"`` \| { `custom`: `string`  }

#### Defined in

[packages/abstractjs/src/modules/adapters/dex/Dex.types.ts:46](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/dex/Dex.types.ts#L46)

___

### Uint128

Ƭ **Uint128**: `string`

#### Defined in

[packages/abstractjs/src/modules/adapters/dex/Dex.types.ts:43](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/dex/Dex.types.ts#L43)
