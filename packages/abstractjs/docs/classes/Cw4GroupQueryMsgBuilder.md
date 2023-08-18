[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw4GroupQueryMsgBuilder

# Class: Cw4GroupQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](Cw4GroupQueryMsgBuilder.md#constructor)

### Methods

- [admin](Cw4GroupQueryMsgBuilder.md#admin)
- [hooks](Cw4GroupQueryMsgBuilder.md#hooks)
- [listMembers](Cw4GroupQueryMsgBuilder.md#listmembers)
- [member](Cw4GroupQueryMsgBuilder.md#member)
- [totalWeight](Cw4GroupQueryMsgBuilder.md#totalweight)

## Constructors

### constructor

• **new Cw4GroupQueryMsgBuilder**()

## Methods

### admin

▸ `Static` **admin**(): [`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts:89](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts#L89)

___

### hooks

▸ `Static` **hooks**(): [`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts:135](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts#L135)

___

### listMembers

▸ `Static` **listMembers**(`«destructured»`): [`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts:99](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts#L99)

___

### member

▸ `Static` **member**(`«destructured»`): [`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| › `atHeight` | `undefined` \| ``null`` \| `number` |

#### Returns

[`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts:117](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts#L117)

___

### totalWeight

▸ `Static` **totalWeight**(): [`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/Cw4GroupTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts:94](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw4Group.msg-builder.ts#L94)
