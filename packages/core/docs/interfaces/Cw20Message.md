[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw20Message

# Interface: Cw20Message

## Implemented by

- [`Cw20MessageComposer`](../classes/Cw20MessageComposer.md)

## Table of contents

### Properties

- [burn](Cw20Message.md#burn)
- [burnFrom](Cw20Message.md#burnfrom)
- [contractAddress](Cw20Message.md#contractaddress)
- [decreaseAllowance](Cw20Message.md#decreaseallowance)
- [increaseAllowance](Cw20Message.md#increaseallowance)
- [mint](Cw20Message.md#mint)
- [send](Cw20Message.md#send)
- [sendFrom](Cw20Message.md#sendfrom)
- [sender](Cw20Message.md#sender)
- [transfer](Cw20Message.md#transfer)
- [transferFrom](Cw20Message.md#transferfrom)
- [updateMarketing](Cw20Message.md#updatemarketing)
- [updateMinter](Cw20Message.md#updateminter)
- [uploadLogo](Cw20Message.md#uploadlogo)

## Properties

### burn

• **burn**: (`__namedParameters`: { `amount`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L49)

___

### burnFrom

• **burnFrom**: (`__namedParameters`: { `amount`: `string` ; `owner`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `owner` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:119](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L119)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:37](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L37)

___

### decreaseAllowance

• **decreaseAllowance**: (`__namedParameters`: { `amount`: `string` ; `expires?`: [`Expiration`](../modules/Cw20Types.md#expiration) ; `spender`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `expires?` | [`Expiration`](../modules/Cw20Types.md#expiration) |
| › `spender` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:81](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L81)

___

### increaseAllowance

• **increaseAllowance**: (`__namedParameters`: { `amount`: `string` ; `expires?`: [`Expiration`](../modules/Cw20Types.md#expiration) ; `spender`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `expires?` | [`Expiration`](../modules/Cw20Types.md#expiration) |
| › `spender` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:69](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L69)

___

### mint

• **mint**: (`__namedParameters`: { `amount`: `string` ; `recipient`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `recipient` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:129](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L129)

___

### send

• **send**: (`__namedParameters`: { `amount`: `string` ; `contract`: `string` ; `msg`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `contract` | `string` |
| › `msg` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:57](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L57)

___

### sendFrom

• **sendFrom**: (`__namedParameters`: { `amount`: `string` ; `contract`: `string` ; `msg`: `string` ; `owner`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `contract` | `string` |
| › `msg` | `string` |
| › `owner` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:105](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L105)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:38](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L38)

___

### transfer

• **transfer**: (`__namedParameters`: { `amount`: `string` ; `recipient`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `recipient` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:39](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L39)

___

### transferFrom

• **transferFrom**: (`__namedParameters`: { `amount`: `string` ; `owner`: `string` ; `recipient`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `owner` | `string` |
| › `recipient` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:93](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L93)

___

### updateMarketing

• **updateMarketing**: (`__namedParameters`: { `description?`: `string` ; `marketing?`: `string` ; `project?`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description?` | `string` |
| › `marketing?` | `string` |
| › `project?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:147](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L147)

___

### updateMinter

• **updateMinter**: (`__namedParameters`: { `newMinter`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newMinter` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:139](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L139)

___

### uploadLogo

• **uploadLogo**: (`funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20.message-composer.ts:159](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20.message-composer.ts#L159)
