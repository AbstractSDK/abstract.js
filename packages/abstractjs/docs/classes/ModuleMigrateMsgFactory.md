[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ModuleMigrateMsgFactory

# Class: ModuleMigrateMsgFactory

## Table of contents

### Constructors

- [constructor](ModuleMigrateMsgFactory.md#constructor)

### Methods

- [app](ModuleMigrateMsgFactory.md#app)

## Constructors

### constructor

• **new ModuleMigrateMsgFactory**()

## Methods

### app

▸ `Static` **app**<`TAppMsg`\>(`appMigrateMsg?`): [`ModuleMigrateMsg`](../modules.md#modulemigratemsg)<[`AppBaseMigrateMsg`](../modules.md#appbasemigratemsg), `Record`<`string`, `never`\> \| `TAppMsg`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAppMsg` | extends [`ContractMsg`](../modules.md#contractmsg) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `appMigrateMsg?` | `TAppMsg` |

#### Returns

[`ModuleMigrateMsg`](../modules.md#modulemigratemsg)<[`AppBaseMigrateMsg`](../modules.md#appbasemigratemsg), `Record`<`string`, `never`\> \| `TAppMsg`\>

#### Defined in

[packages/abstractjs/src/modules/Module.msg-factory.ts:86](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/Module.msg-factory.ts#L86)
