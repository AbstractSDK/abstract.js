[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20IcsExecuteMsgBuilder

# Class: Cw20IcsExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](Cw20IcsExecuteMsgBuilder.md#constructor)

### Methods

- [allow](Cw20IcsExecuteMsgBuilder.md#allow)
- [receive](Cw20IcsExecuteMsgBuilder.md#receive)
- [transfer](Cw20IcsExecuteMsgBuilder.md#transfer)
- [updateAdmin](Cw20IcsExecuteMsgBuilder.md#updateadmin)

## Constructors

### constructor

• **new Cw20IcsExecuteMsgBuilder**()

## Methods

### allow

▸ `Static` **allow**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20IcsTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `contract` | `string` |
| › `gasLimit` | `undefined` \| ``null`` \| `number` |

#### Returns

[`ExecuteMsg`](../modules/Cw20IcsTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:51](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L51)

___

### receive

▸ `Static` **receive**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20IcsTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `msg` | `string` |
| › `sender` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20IcsTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:11](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L11)

___

### transfer

▸ `Static` **transfer**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20IcsTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `channel` | `string` |
| › `remoteAddress` | `string` |
| › `timeout` | `undefined` \| `number` |

#### Returns

[`ExecuteMsg`](../modules/Cw20IcsTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:31](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L31)

___

### updateAdmin

▸ `Static` **updateAdmin**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20IcsTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20IcsTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts:69](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.msg-builder.ts#L69)
