[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw4GroupMessageComposer

# Class: Cw4GroupMessageComposer

## Implements

- [`Cw4GroupMessage`](../interfaces/Cw4GroupMessage.md)

## Table of contents

### Constructors

- [constructor](Cw4GroupMessageComposer.md#constructor)

### Properties

- [contractAddress](Cw4GroupMessageComposer.md#contractaddress)
- [sender](Cw4GroupMessageComposer.md#sender)

### Methods

- [addHook](Cw4GroupMessageComposer.md#addhook)
- [removeHook](Cw4GroupMessageComposer.md#removehook)
- [updateAdmin](Cw4GroupMessageComposer.md#updateadmin)
- [updateMembers](Cw4GroupMessageComposer.md#updatemembers)

## Constructors

### constructor

• **new Cw4GroupMessageComposer**(`sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:65](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L65)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw4GroupMessage](../interfaces/Cw4GroupMessage.md).[contractAddress](../interfaces/Cw4GroupMessage.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:63](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L63)

___

### sender

• **sender**: `string`

#### Implementation of

[Cw4GroupMessage](../interfaces/Cw4GroupMessage.md).[sender](../interfaces/Cw4GroupMessage.md#sender)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:62](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L62)

## Methods

### addHook

▸ **addHook**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw4GroupMessage.addHook

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:125](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L125)

___

### removeHook

▸ **removeHook**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw4GroupMessage.removeHook

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:149](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L149)

___

### updateAdmin

▸ **updateAdmin**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin?` | `string` |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw4GroupMessage.updateAdmin

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L74)

___

### updateMembers

▸ **updateMembers**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `add` | [`Member`](../interfaces/Cw4GroupTypes.Member.md)[] |
| › `remove` | `string`[] |
| `funds?` | `Coin`[] |

#### Returns

`MsgExecuteContractEncodeObject`

#### Implementation of

Cw4GroupMessage.updateMembers

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:98](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L98)
