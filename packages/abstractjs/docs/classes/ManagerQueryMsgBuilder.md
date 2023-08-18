[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ManagerQueryMsgBuilder

# Class: ManagerQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](ManagerQueryMsgBuilder.md#constructor)

### Methods

- [config](ManagerQueryMsgBuilder.md#config)
- [info](ManagerQueryMsgBuilder.md#info)
- [moduleAddresses](ManagerQueryMsgBuilder.md#moduleaddresses)
- [moduleInfos](ManagerQueryMsgBuilder.md#moduleinfos)
- [moduleVersions](ManagerQueryMsgBuilder.md#moduleversions)
- [ownership](ManagerQueryMsgBuilder.md#ownership)

## Constructors

### constructor

• **new ManagerQueryMsgBuilder**()

## Methods

### config

▸ `Static` **config**(): [`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:259](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L259)

___

### info

▸ `Static` **info**(): [`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:264](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L264)

___

### moduleAddresses

▸ `Static` **moduleAddresses**(`«destructured»`): [`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

#### Returns

[`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:225](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L225)

___

### moduleInfos

▸ `Static` **moduleInfos**(`«destructured»`): [`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit` | `undefined` \| ``null`` \| `number` |
| › `startAfter` | `undefined` \| ``null`` \| `string` |

#### Returns

[`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:241](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L241)

___

### moduleVersions

▸ `Static` **moduleVersions**(`«destructured»`): [`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

#### Returns

[`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:209](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L209)

___

### ownership

▸ `Static` **ownership**(): [`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Returns

[`QueryMsg`](../modules/ManagerTypes.md#querymsg)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.msg-builder.ts:269](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/account/manager/Manager.msg-builder.ts#L269)
