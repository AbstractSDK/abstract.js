[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / EtfExecuteMsgBuilder

# Class: EtfExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](EtfExecuteMsgBuilder.md#constructor)

### Methods

- [provideLiquidity](EtfExecuteMsgBuilder.md#provideliquidity)
- [setFee](EtfExecuteMsgBuilder.md#setfee)

## Constructors

### constructor

• **new EtfExecuteMsgBuilder**()

## Methods

### provideLiquidity

▸ `Static` **provideLiquidity**(`«destructured»`): [`ExecuteMsg`](../modules/EtfTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asset` | [`AssetBaseForString`](../interfaces/EtfTypes.AssetBaseForString.md) |

#### Returns

[`ExecuteMsg`](../modules/EtfTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.msg-builder.ts:11](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.msg-builder.ts#L11)

___

### setFee

▸ `Static` **setFee**(`«destructured»`): [`ExecuteMsg`](../modules/EtfTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `fee` | `string` |

#### Returns

[`ExecuteMsg`](../modules/EtfTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.msg-builder.ts:27](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.msg-builder.ts#L27)
