[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20MessageComposer

# Class: Cw20MessageComposer

## Implements

- [`Cw20Message`](../interfaces/Cw20Message.md)

## Table of contents

### Constructors

- [constructor](Cw20MessageComposer.md#constructor)

### Properties

- [contractAddress](Cw20MessageComposer.md#contractaddress)
- [sender](Cw20MessageComposer.md#sender)

### Methods

- [burn](Cw20MessageComposer.md#burn)
- [burnFrom](Cw20MessageComposer.md#burnfrom)
- [decreaseAllowance](Cw20MessageComposer.md#decreaseallowance)
- [increaseAllowance](Cw20MessageComposer.md#increaseallowance)
- [mint](Cw20MessageComposer.md#mint)
- [send](Cw20MessageComposer.md#send)
- [sendFrom](Cw20MessageComposer.md#sendfrom)
- [transfer](Cw20MessageComposer.md#transfer)
- [transferFrom](Cw20MessageComposer.md#transferfrom)
- [updateMarketing](Cw20MessageComposer.md#updatemarketing)
- [updateMinter](Cw20MessageComposer.md#updateminter)
- [uploadLogo](Cw20MessageComposer.md#uploadlogo)

## Constructors

### constructor

• **new Cw20MessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:165](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L165)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw20Message](../interfaces/Cw20Message.md).[contractAddress](../interfaces/Cw20Message.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:163](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L163)

___

### sender

• **sender**: `string`

#### Implementation of

[Cw20Message](../interfaces/Cw20Message.md).[sender](../interfaces/Cw20Message.md#sender)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:162](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L162)

## Methods

### burn

▸ **burn**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.burn

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:209](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L209)

___

### burnFrom

▸ **burnFrom**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `owner` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.burnFrom

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:386](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L386)

___

### decreaseAllowance

▸ **decreaseAllowance**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `expires?` | [`Expiration`](../modules/Cw20Types.md#expiration) |
| › `spender` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.decreaseAllowance

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:293](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L293)

___

### increaseAllowance

▸ **increaseAllowance**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `expires?` | [`Expiration`](../modules/Cw20Types.md#expiration) |
| › `spender` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.increaseAllowance

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:263](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L263)

___

### mint

▸ **mint**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `recipient` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.mint

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:413](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L413)

___

### send

▸ **send**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `contract` | `string` |
| › `msg` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.send

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:233](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L233)

___

### sendFrom

▸ **sendFrom**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `contract` | `string` |
| › `msg` | `string` |
| › `owner` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.sendFrom

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:353](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L353)

___

### transfer

▸ **transfer**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `recipient` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.transfer

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:182](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L182)

___

### transferFrom

▸ **transferFrom**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `owner` | `string` |
| › `recipient` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.transferFrom

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:323](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L323)

___

### updateMarketing

▸ **updateMarketing**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description?` | `string` |
| › `marketing?` | `string` |
| › `project?` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.updateMarketing

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:464](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L464)

___

### updateMinter

▸ **updateMinter**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newMinter` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.updateMinter

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:440](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L440)

___

### uploadLogo

▸ **uploadLogo**(`funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20Message.uploadLogo

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:494](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L494)
