[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20ExecuteMsgBuilder

# Class: Cw20ExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](Cw20ExecuteMsgBuilder.md#constructor)

### Methods

- [burn](Cw20ExecuteMsgBuilder.md#burn)
- [burnFrom](Cw20ExecuteMsgBuilder.md#burnfrom)
- [decreaseAllowance](Cw20ExecuteMsgBuilder.md#decreaseallowance)
- [increaseAllowance](Cw20ExecuteMsgBuilder.md#increaseallowance)
- [mint](Cw20ExecuteMsgBuilder.md#mint)
- [send](Cw20ExecuteMsgBuilder.md#send)
- [sendFrom](Cw20ExecuteMsgBuilder.md#sendfrom)
- [transfer](Cw20ExecuteMsgBuilder.md#transfer)
- [transferFrom](Cw20ExecuteMsgBuilder.md#transferfrom)
- [updateMarketing](Cw20ExecuteMsgBuilder.md#updatemarketing)
- [updateMinter](Cw20ExecuteMsgBuilder.md#updateminter)
- [uploadLogo](Cw20ExecuteMsgBuilder.md#uploadlogo)

## Constructors

### constructor

• **new Cw20ExecuteMsgBuilder**()

## Methods

### burn

▸ `Static` **burn**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:29](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L29)

___

### burnFrom

▸ `Static` **burnFrom**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `owner` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:147](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L147)

___

### decreaseAllowance

▸ `Static` **decreaseAllowance**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `expires` | `undefined` \| ``null`` \| [`Expiration`](../modules/Cw20Types.md#expiration) |
| › `spender` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:85](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L85)

___

### increaseAllowance

▸ `Static` **increaseAllowance**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `expires` | `undefined` \| ``null`` \| [`Expiration`](../modules/Cw20Types.md#expiration) |
| › `spender` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:65](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L65)

___

### mint

▸ `Static` **mint**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `recipient` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:165](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L165)

___

### send

▸ `Static` **send**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `contract` | `string` |
| › `msg` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:45](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L45)

___

### sendFrom

▸ `Static` **sendFrom**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `contract` | `string` |
| › `msg` | `string` |
| › `owner` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:125](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L125)

___

### transfer

▸ `Static` **transfer**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `recipient` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:11](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L11)

___

### transferFrom

▸ `Static` **transferFrom**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `owner` | `string` |
| › `recipient` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:105](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L105)

___

### updateMarketing

▸ `Static` **updateMarketing**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `undefined` \| ``null`` \| `string` |
| › `marketing` | `undefined` \| ``null`` \| `string` |
| › `project` | `undefined` \| ``null`` \| `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:199](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L199)

___

### updateMinter

▸ `Static` **updateMinter**(`«destructured»`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newMinter` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:183](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L183)

___

### uploadLogo

▸ `Static` **uploadLogo**(`logo`): [`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logo` | [`Logo`](../modules/Cw20Types.md#logo) |

#### Returns

[`ExecuteMsg`](../modules/Cw20Types.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts:219](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.msg-builder.ts#L219)
