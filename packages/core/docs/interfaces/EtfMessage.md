[@abstract-money/core](../README.md) / [Exports](../modules.md) / EtfMessage

# Interface: EtfMessage

## Implemented by

- [`EtfMessageComposer`](../classes/EtfMessageComposer.md)

## Table of contents

### Properties

- [base](EtfMessage.md#base)
- [contractAddress](EtfMessage.md#contractaddress)
- [import](EtfMessage.md#import)
- [provideLiquidity](EtfMessage.md#provideliquidity)
- [receive](EtfMessage.md#receive)
- [sender](EtfMessage.md#sender)
- [setFee](EtfMessage.md#setfee)
- [updatePool](EtfMessage.md#updatepool)

## Properties

### base

• **base**: (`funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:34](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L34)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:32](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L32)

___

### import

• **import**: (`funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:67](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L67)

___

### provideLiquidity

• **provideLiquidity**: (`__namedParameters`: { `asset`: [`AssetBaseForString`](EtfTypes.AssetBaseForString.md)  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asset` | [`AssetBaseForString`](EtfTypes.AssetBaseForString.md) |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:47](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L47)

___

### receive

• **receive**: (`__namedParameters`: { `amount`: `string` ; `msg`: `string` ; `sender`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `msg` | `string` |
| › `sender` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:35](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L35)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:33](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L33)

___

### setFee

• **setFee**: (`__namedParameters`: { `fee`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `fee` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:68](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L68)

___

### updatePool

• **updatePool**: (`__namedParameters`: { `assetsToAdd`: `string`[] ; `assetsToRemove`: `string`[] ; `depositAsset?`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `assetsToAdd` | `string`[] |
| › `assetsToRemove` | `string`[] |
| › `depositAsset?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:55](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L55)
