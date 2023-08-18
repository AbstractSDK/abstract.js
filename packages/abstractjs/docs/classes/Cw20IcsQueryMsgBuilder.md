[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20IcsQueryMsgBuilder

# Class: Cw20IcsQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](Cw20IcsQueryMsgBuilder.md#constructor)

### Methods

- [admin](Cw20IcsQueryMsgBuilder.md#admin)
- [allowed](Cw20IcsQueryMsgBuilder.md#allowed)
- [channel](Cw20IcsQueryMsgBuilder.md#channel)
- [config](Cw20IcsQueryMsgBuilder.md#config)
- [listAllowed](Cw20IcsQueryMsgBuilder.md#listallowed)
- [listChannels](Cw20IcsQueryMsgBuilder.md#listchannels)
- [port](Cw20IcsQueryMsgBuilder.md#port)

## Constructors

### constructor

• **new Cw20IcsQueryMsgBuilder**()

## Methods

### admin

▸ `Static` **admin**(): [`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:118](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L118)

___

### allowed

▸ `Static` **allowed**(`«destructured»`): [`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `contract` | `string` |

#### Returns

[`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:123](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L123)

___

### channel

▸ `Static` **channel**(`«destructured»`): [`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |

#### Returns

[`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:97](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L97)

___

### config

▸ `Static` **config**(): [`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:113](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L113)

___

### listAllowed

▸ `Static` **listAllowed**(`«destructured»`): [`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:139](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L139)

___

### listChannels

▸ `Static` **listChannels**(): [`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:92](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L92)

___

### port

▸ `Static` **port**(): [`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw20IcsTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:87](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L87)
