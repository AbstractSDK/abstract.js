[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw20IcsMessageComposer

# Class: Cw20IcsMessageComposer

## Implements

- [`Cw20IcsMessage`](../interfaces/Cw20IcsMessage.md)

## Table of contents

### Constructors

- [constructor](Cw20IcsMessageComposer.md#constructor)

### Properties

- [contractAddress](Cw20IcsMessageComposer.md#contractaddress)
- [sender](Cw20IcsMessageComposer.md#sender)

### Methods

- [allow](Cw20IcsMessageComposer.md#allow)
- [receive](Cw20IcsMessageComposer.md#receive)
- [transfer](Cw20IcsMessageComposer.md#transfer)
- [updateAdmin](Cw20IcsMessageComposer.md#updateadmin)

## Constructors

### constructor

• **new Cw20IcsMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:83](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L83)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw20IcsMessage](../interfaces/Cw20IcsMessage.md).[contractAddress](../interfaces/Cw20IcsMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:81](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L81)

___

### sender

• **sender**: `string`

#### Implementation of

[Cw20IcsMessage](../interfaces/Cw20IcsMessage.md).[sender](../interfaces/Cw20IcsMessage.md#sender)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:80](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L80)

## Methods

### allow

▸ **allow**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `contract` | `string` |
| › `gasLimit?` | `number` |
| `funds?` | [`Coin`](../interfaces/Cw20IcsTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20IcsMessage.allow

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:152](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L152)

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
| `funds?` | [`Coin`](../interfaces/Cw20IcsTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20IcsMessage.receive

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:92](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L92)

___

### transfer

▸ **transfer**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `channel` | `string` |
| › `remoteAddress` | `string` |
| › `timeout?` | `number` |
| `funds?` | [`Coin`](../interfaces/Cw20IcsTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20IcsMessage.transfer

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:122](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L122)

___

### updateAdmin

▸ **updateAdmin**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin` | `string` |
| `funds?` | [`Coin`](../interfaces/Cw20IcsTypes.Coin.md)[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw20IcsMessage.updateAdmin

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:179](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L179)
