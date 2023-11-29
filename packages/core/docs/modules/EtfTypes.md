[@abstract-money/core](../README.md) / [Exports](../modules.md) / EtfTypes

# Namespace: EtfTypes

## Table of contents

### Interfaces

- [AddOnInstantiateMsg](../interfaces/EtfTypes.AddOnInstantiateMsg.md)
- [AddOnState](../interfaces/EtfTypes.AddOnState.md)
- [AssetBaseForString](../interfaces/EtfTypes.AssetBaseForString.md)
- [ConfigValidityResponse](../interfaces/EtfTypes.ConfigValidityResponse.md)
- [Cw20ReceiveMsg](../interfaces/EtfTypes.Cw20ReceiveMsg.md)
- [InstantiateMsg](../interfaces/EtfTypes.InstantiateMsg.md)
- [Memory](../interfaces/EtfTypes.Memory.md)
- [StateResponse](../interfaces/EtfTypes.StateResponse.md)

### Type Aliases

- [AddOnExecuteMsg](EtfTypes.md#addonexecutemsg)
- [AddOnQueryMsg](EtfTypes.md#addonquerymsg)
- [Addr](EtfTypes.md#addr)
- [AssetEntry](EtfTypes.md#assetentry)
- [AssetInfoBaseForString](EtfTypes.md#assetinfobaseforstring)
- [Binary](EtfTypes.md#binary)
- [Decimal](EtfTypes.md#decimal)
- [ExecuteMsg](EtfTypes.md#executemsg)
- [QueryMsg](EtfTypes.md#querymsg)
- [Uint128](EtfTypes.md#uint128)

## Type Aliases

### AddOnExecuteMsg

Ƭ **AddOnExecuteMsg**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `update_config` | { `memory_address?`: `string` \| ``null``  } |
| `update_config.memory_address?` | `string` \| ``null`` |

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:45](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L45)

___

### AddOnQueryMsg

Ƭ **AddOnQueryMsg**: { `config`: {}  } \| { `admin`: {}  }

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:94](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L94)

___

### Addr

Ƭ **Addr**: `string`

This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
and run the @cosmwasm/ts-codegen generate command to regenerate this file.

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:7](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L7)

___

### AssetEntry

Ƭ **AssetEntry**: `string`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:101](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L101)

___

### AssetInfoBaseForString

Ƭ **AssetInfoBaseForString**: { `native`: `string`  } \| { `cw20`: `string`  } \| { `cw1155`: [`string`, `string`]  }

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:52](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L52)

___

### Binary

Ƭ **Binary**: `string`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:51](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L51)

___

### Decimal

Ƭ **Decimal**: `string`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:62](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L62)

___

### ExecuteMsg

Ƭ **ExecuteMsg**: { `base`: [`AddOnExecuteMsg`](EtfTypes.md#addonexecutemsg)  } \| { `receive`: [`Cw20ReceiveMsg`](../interfaces/EtfTypes.Cw20ReceiveMsg.md)  } \| { `provide_liquidity`: { `asset`: [`AssetBaseForString`](../interfaces/EtfTypes.AssetBaseForString.md)  }  } \| { `update_pool`: { `assets_to_add`: `string`[] ; `assets_to_remove`: `string`[] ; `deposit_asset?`: `string` \| ``null``  }  } \| { `import`: {}  } \| { `set_fee`: { `fee`: [`Decimal`](EtfTypes.md#decimal)  }  }

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:18](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L18)

___

### QueryMsg

Ƭ **QueryMsg**: { `base`: [`AddOnQueryMsg`](EtfTypes.md#addonquerymsg)  } \| { `state`: {}  } \| { `config_validity`: {}  }

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:84](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L84)

___

### Uint128

Ƭ **Uint128**: `string`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.types.ts:50](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.types.ts#L50)