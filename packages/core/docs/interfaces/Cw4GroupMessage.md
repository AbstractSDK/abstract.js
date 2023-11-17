[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw4GroupMessage

# Interface: Cw4GroupMessage

## Implemented by

- [`Cw4GroupMessageComposer`](../classes/Cw4GroupMessageComposer.md)

## Table of contents

### Properties

- [addHook](Cw4GroupMessage.md#addhook)
- [contractAddress](Cw4GroupMessage.md#contractaddress)
- [removeHook](Cw4GroupMessage.md#removehook)
- [sender](Cw4GroupMessage.md#sender)
- [updateAdmin](Cw4GroupMessage.md#updateadmin)
- [updateMembers](Cw4GroupMessage.md#updatemembers)

## Properties

### addHook

• **addHook**: (`__namedParameters`: { `addr`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:44](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L44)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:24](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L24)

___

### removeHook

• **removeHook**: (`__namedParameters`: { `addr`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:52](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L52)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:25](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L25)

___

### updateAdmin

• **updateAdmin**: (`__namedParameters`: { `admin?`: `string`  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin?` | `string` |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:26](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L26)

___

### updateMembers

• **updateMembers**: (`__namedParameters`: { `add`: [`Member`](Cw4GroupTypes.Member.md)[] ; `remove`: `string`[]  }, `funds?`: `Coin`[]) => `MsgExecuteContractEncodeObject`

#### Type declaration

▸ (`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `add` | [`Member`](Cw4GroupTypes.Member.md)[] |
| › `remove` | `string`[] |
| `funds?` | `Coin`[] |

##### Returns

`MsgExecuteContractEncodeObject`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts:34](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.message-composer.ts#L34)
