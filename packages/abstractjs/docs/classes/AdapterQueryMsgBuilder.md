[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AdapterQueryMsgBuilder

# Class: AdapterQueryMsgBuilder

## Table of contents

### Constructors

- [constructor](AdapterQueryMsgBuilder.md#constructor)

### Methods

- [authorizedAddresses](AdapterQueryMsgBuilder.md#authorizedaddresses)
- [config](AdapterQueryMsgBuilder.md#config)
- [query](AdapterQueryMsgBuilder.md#query)

## Constructors

### constructor

• **new AdapterQueryMsgBuilder**()

## Methods

### authorizedAddresses

▸ `Static` **authorizedAddresses**(`proxyAddress?`): [`AdapterQueryMsg`](../modules.md#adapterquerymsg)<`never`\>

Base adapter authorized addresses query.

#### Parameters

| Name | Type |
| :------ | :------ |
| `proxyAddress?` | `string` |

#### Returns

[`AdapterQueryMsg`](../modules.md#adapterquerymsg)<`never`\>

#### Defined in

[packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts:81](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts#L81)

___

### config

▸ `Static` **config**(): [`AdapterQueryMsg`](../modules.md#adapterquerymsg)<`never`\>

Base adapter config query.

#### Returns

[`AdapterQueryMsg`](../modules.md#adapterquerymsg)<`never`\>

#### Defined in

[packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts:92](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts#L92)

___

### query

▸ `Static` **query**<`TAppMsg`\>(`request`): [`AdapterQueryMsg`](../modules.md#adapterquerymsg)<`TAppMsg`\>

Query an adatper module.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAppMsg` | extends [`ContractMsg`](../modules.md#contractmsg) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `TAppMsg` | request msg for the given api |

#### Returns

[`AdapterQueryMsg`](../modules.md#adapterquerymsg)<`TAppMsg`\>

#### Defined in

[packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts:73](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts#L73)
