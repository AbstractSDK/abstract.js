[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / EtfMessageComposer

# Class: EtfMessageComposer

## Implements

- [`EtfMessage`](../interfaces/EtfMessage.md)

## Table of contents

### Constructors

- [constructor](EtfMessageComposer.md#constructor)

### Properties

- [contractAddress](EtfMessageComposer.md#contractaddress)
- [sender](EtfMessageComposer.md#sender)

### Methods

- [base](EtfMessageComposer.md#base)
- [import](EtfMessageComposer.md#import)
- [provideLiquidity](EtfMessageComposer.md#provideliquidity)
- [receive](EtfMessageComposer.md#receive)
- [setFee](EtfMessageComposer.md#setfee)
- [updatePool](EtfMessageComposer.md#updatepool)

## Constructors

### constructor

• **new EtfMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:81](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L81)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[EtfMessage](../interfaces/EtfMessage.md).[contractAddress](../interfaces/EtfMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:79](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L79)

___

### sender

• **sender**: `string`

#### Implementation of

[EtfMessage](../interfaces/EtfMessage.md).[sender](../interfaces/EtfMessage.md#sender)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:78](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L78)

## Methods

### base

▸ **base**(`funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

EtfMessage.base

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:92](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L92)

___

### import

▸ **import**(`funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

EtfMessage.import

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:191](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L191)

___

### provideLiquidity

▸ **provideLiquidity**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `asset` | [`AssetBaseForString`](../interfaces/EtfTypes.AssetBaseForString.md) |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

EtfMessage.provideLiquidity

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:137](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L137)

___

### receive

▸ **receive**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `msg` | `string` |
| › `sender` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

EtfMessage.receive

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:107](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L107)

___

### setFee

▸ **setFee**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `fee` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

EtfMessage.setFee

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:206](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L206)

___

### updatePool

▸ **updatePool**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `assetsToAdd` | `string`[] |
| › `assetsToRemove` | `string`[] |
| › `depositAsset?` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

EtfMessage.updatePool

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts:161](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.message-composer.ts#L161)
