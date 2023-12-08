[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw4GroupExecuteMsgBuilder

# Class: Cw4GroupExecuteMsgBuilder

## Table of contents

### Constructors

- [constructor](Cw4GroupExecuteMsgBuilder.md#constructor)

### Methods

- [addHook](Cw4GroupExecuteMsgBuilder.md#addhook)
- [removeHook](Cw4GroupExecuteMsgBuilder.md#removehook)
- [updateAdmin](Cw4GroupExecuteMsgBuilder.md#updateadmin)
- [updateMembers](Cw4GroupExecuteMsgBuilder.md#updatemembers)

## Constructors

### constructor

• **new Cw4GroupExecuteMsgBuilder**()

## Methods

### addHook

▸ `Static` **addHook**(`«destructured»`): [`ExecuteMsg`](../modules/Cw4GroupTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw4GroupTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts:55](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts#L55)

___

### removeHook

▸ `Static` **removeHook**(`«destructured»`): [`ExecuteMsg`](../modules/Cw4GroupTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw4GroupTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts:71](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts#L71)

___

### updateAdmin

▸ `Static` **updateAdmin**(`«destructured»`): [`ExecuteMsg`](../modules/Cw4GroupTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin` | `undefined` \| ``null`` \| `string` |

#### Returns

[`ExecuteMsg`](../modules/Cw4GroupTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts:21](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts#L21)

___

### updateMembers

▸ `Static` **updateMembers**(`«destructured»`): [`ExecuteMsg`](../modules/Cw4GroupTypes.md#executemsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `add` | [`Member`](../interfaces/Cw4GroupTypes.Member.md)[] |
| › `remove` | `string`[] |

#### Returns

[`ExecuteMsg`](../modules/Cw4GroupTypes.md#executemsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts:37](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts#L37)
