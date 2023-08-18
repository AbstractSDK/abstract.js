[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / DexQueryMsgBuilder

# Class: DexQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](DexQueryMsgBuilder.md#constructor)

### Methods

- [simulateSwap](DexQueryMsgBuilder.md#simulateswap)

## Constructors

### constructor

• **new DexQueryMsgBuilder**()

## Methods

### simulateSwap

▸ `Static` **simulateSwap**(`«destructured»`): [`QueryMsg`](../modules/DexTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `askAsset` | `string` |
| › `dex` | `undefined` \| ``null`` \| `string` |
| › `offerAsset` | [`AnsAsset`](../interfaces/DexTypes.AnsAsset.md) |

#### Returns

[`QueryMsg`](../modules/DexTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/modules/adapters/dex/Dex.msg-builder.ts:11](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/adapters/dex/Dex.msg-builder.ts#L11)
