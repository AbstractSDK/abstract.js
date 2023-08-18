[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ModuleInitMsgFactory

# Class: ModuleInitMsgFactory

## Table of contents

### Constructors

- [constructor](ModuleInitMsgFactory.md#constructor)

### Methods

- [adapter](ModuleInitMsgFactory.md#adapter)
- [app](ModuleInitMsgFactory.md#app)

## Constructors

### constructor

• **new ModuleInitMsgFactory**()

## Methods

### adapter

▸ `Static` **adapter**<`TAppMsg`\>(`ansHostAddress`, `registryAddress`, `adapterInitMsg`): [`ModuleInstantiateMsg`](../modules.md#moduleinstantiatemsg)<[`AdapterBaseInitMsg`](../modules.md#adapterbaseinitmsg), `TAppMsg`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAppMsg` | extends [`ContractMsg`](../modules.md#contractmsg) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ansHostAddress` | `string` |
| `registryAddress` | `string` |
| `adapterInitMsg` | `TAppMsg` |

#### Returns

[`ModuleInstantiateMsg`](../modules.md#moduleinstantiatemsg)<[`AdapterBaseInitMsg`](../modules.md#adapterbaseinitmsg), `TAppMsg`\>

#### Defined in

[packages/abstractjs/src/modules/Module.msg-factory.ts:70](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/Module.msg-factory.ts#L70)

___

### app

▸ `Static` **app**<`TAppMsg`\>(`ansHostAddress`, `appModuleInitMsg`): [`ModuleInstantiateMsg`](../modules.md#moduleinstantiatemsg)<[`AppBaseInitMsg`](../modules.md#appbaseinitmsg), `TAppMsg`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAppMsg` | extends [`ContractMsg`](../modules.md#contractmsg) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ansHostAddress` | `string` |
| `appModuleInitMsg` | `TAppMsg` |

#### Returns

[`ModuleInstantiateMsg`](../modules.md#moduleinstantiatemsg)<[`AppBaseInitMsg`](../modules.md#appbaseinitmsg), `TAppMsg`\>

#### Defined in

[packages/abstractjs/src/modules/Module.msg-factory.ts:58](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/Module.msg-factory.ts#L58)
