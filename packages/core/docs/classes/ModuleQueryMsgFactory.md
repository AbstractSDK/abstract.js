[@abstract-money/core](../README.md) / [Exports](../modules.md) / ModuleQueryMsgFactory

# Class: ModuleQueryMsgFactory

Build a base query msg for an Abstract module. Works for all modules.

## Table of contents

### Constructors

- [constructor](ModuleQueryMsgFactory.md#constructor)

### Methods

- [base](ModuleQueryMsgFactory.md#base)
- [module](ModuleQueryMsgFactory.md#module)

## Constructors

### constructor

• **new ModuleQueryMsgFactory**()

## Methods

### base

▸ `Static` **base**<`TBaseMsg`\>(`baseMsg`): [`ModuleExecuteMsg`](../modules.md#moduleexecutemsg)<`TBaseMsg`, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBaseMsg` | extends `ModuleBaseQueryMsg` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseMsg` | `TBaseMsg` |

#### Returns

[`ModuleExecuteMsg`](../modules.md#moduleexecutemsg)<`TBaseMsg`, `never`\>

#### Defined in

[packages/abstractjs/src/modules/Module.msg-factory.ts:40](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/Module.msg-factory.ts#L40)

___

### module

▸ `Static` **module**<`TAppMsg`\>(`appMsg`): [`ModuleExecuteMsg`](../modules.md#moduleexecutemsg)<`never`, `TAppMsg`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAppMsg` | extends [`ContractMsg`](../modules.md#contractmsg) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `appMsg` | `TAppMsg` |

#### Returns

[`ModuleExecuteMsg`](../modules.md#moduleexecutemsg)<`never`, `TAppMsg`\>

#### Defined in

[packages/abstractjs/src/modules/Module.msg-factory.ts:48](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/Module.msg-factory.ts#L48)
