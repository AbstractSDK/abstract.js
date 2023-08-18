[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AppExecuteMsgFactory

# Class: AppExecuteMsgFactory

Helper class to build messages to send to Abstract modules.

## Table of contents

### Constructors

- [constructor](AppExecuteMsgFactory.md#constructor)

### Methods

- [executeApp](AppExecuteMsgFactory.md#executeapp)
- [updateConfig](AppExecuteMsgFactory.md#updateconfig)

## Constructors

### constructor

• **new AppExecuteMsgFactory**()

## Methods

### executeApp

▸ `Static` **executeApp**<`TAppMsg`\>(`moduleMsg`): [`AppExecuteMsg`](../modules.md#appexecutemsg)<`TAppMsg`\>

Make a request to an app module.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAppMsg` | extends [`ContractMsg`](../modules.md#contractmsg) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleMsg` | `TAppMsg` |

#### Returns

[`AppExecuteMsg`](../modules.md#appexecutemsg)<`TAppMsg`\>

#### Defined in

[packages/abstractjs/src/modules/apps/App.msg-factory.ts:34](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/apps/App.msg-factory.ts#L34)

___

### updateConfig

▸ `Static` **updateConfig**(`«destructured»`): [`AppExecuteMsg`](../modules.md#appexecutemsg)<`never`\>

Update an app module's config.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ansHostAddress` | `undefined` \| ``null`` \| `string` |

#### Returns

[`AppExecuteMsg`](../modules.md#appexecutemsg)<`never`\>

#### Defined in

[packages/abstractjs/src/modules/apps/App.msg-factory.ts:41](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/apps/App.msg-factory.ts#L41)
