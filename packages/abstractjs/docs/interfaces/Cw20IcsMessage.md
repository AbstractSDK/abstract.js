[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20IcsMessage

# Interface: Cw20IcsMessage

## Implemented by

- [`Cw20IcsMessageComposer`](../classes/Cw20IcsMessageComposer.md)

## Table of contents

### Properties

- [allow](Cw20IcsMessage.md#allow)
- [contractAddress](Cw20IcsMessage.md#contractaddress)
- [receive](Cw20IcsMessage.md#receive)
- [sender](Cw20IcsMessage.md#sender)
- [transfer](Cw20IcsMessage.md#transfer)
- [updateAdmin](Cw20IcsMessage.md#updateadmin)

## Properties

### allow

• **allow**: (`__namedParameters`: { `contract`: `string` ; `gasLimit?`: `number`  }, `funds?`: [`Coin`](Cw20IcsTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `contract` | `string` |
| › `gasLimit?` | `number` |
| `funds?` | [`Coin`](Cw20IcsTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:60](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L60)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:34](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L34)

___

### receive

• **receive**: (`__namedParameters`: { `amount`: `string` ; `msg`: `string` ; `sender`: `string`  }, `funds?`: [`Coin`](Cw20IcsTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `msg` | `string` |
| › `sender` | `string` |
| `funds?` | [`Coin`](Cw20IcsTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:36](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L36)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:35](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L35)

___

### transfer

• **transfer**: (`__namedParameters`: { `channel`: `string` ; `remoteAddress`: `string` ; `timeout?`: `number`  }, `funds?`: [`Coin`](Cw20IcsTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `channel` | `string` |
| › `remoteAddress` | `string` |
| › `timeout?` | `number` |
| `funds?` | [`Coin`](Cw20IcsTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:48](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L48)

___

### updateAdmin

• **updateAdmin**: (`__namedParameters`: { `admin`: `string`  }, `funds?`: [`Coin`](Cw20IcsTypes.Coin.md)[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin` | `string` |
| `funds?` | [`Coin`](Cw20IcsTypes.Coin.md)[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts:70](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw20Ics.message-composer.ts#L70)
