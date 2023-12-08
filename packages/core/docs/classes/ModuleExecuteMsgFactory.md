[@abstract-money/core](../README.md) / [Exports](../modules.md) / ModuleExecuteMsgFactory

# Class: ModuleExecuteMsgFactory

## Table of contents

### Constructors

- [constructor](ModuleExecuteMsgFactory.md#constructor)

### Methods

- [base](ModuleExecuteMsgFactory.md#base)
- [module](ModuleExecuteMsgFactory.md#module)

## Constructors

### constructor

• **new ModuleExecuteMsgFactory**()

## Methods

### base

▸ `Static` **base**<`TBaseMsg`\>(`baseMsg`): [`ModuleExecuteMsg`](../modules.md#moduleexecutemsg)<`TBaseMsg`, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBaseMsg` | extends `ModuleBaseExecuteMsg` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `baseMsg` | `TBaseMsg` |

#### Returns

[`ModuleExecuteMsg`](../modules.md#moduleexecutemsg)<`TBaseMsg`, `never`\>

#### Defined in

[packages/abstractjs/src/modules/Module.msg-factory.ts:18](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/Module.msg-factory.ts#L18)

___

### module

▸ `Static` **module**<`TModuleMsg`\>(`moduleMsg`): [`ModuleExecuteMsg`](../modules.md#moduleexecutemsg)<`never`, `TModuleMsg`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TModuleMsg` | extends [`ContractMsg`](../modules.md#contractmsg) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleMsg` | `TModuleMsg` |

#### Returns

[`ModuleExecuteMsg`](../modules.md#moduleexecutemsg)<`never`, `TModuleMsg`\>

#### Defined in

[packages/abstractjs/src/modules/Module.msg-factory.ts:26](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/Module.msg-factory.ts#L26)
