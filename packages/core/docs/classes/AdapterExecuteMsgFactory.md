[@abstract-money/core](../README.md) / [Exports](../modules.md) / AdapterExecuteMsgFactory

# Class: AdapterExecuteMsgFactory

## Table of contents

### Constructors

- [constructor](AdapterExecuteMsgFactory.md#constructor)

### Methods

- [executeAdapter](AdapterExecuteMsgFactory.md#executeadapter)
- [updateAuthorizedAddresses](AdapterExecuteMsgFactory.md#updateauthorizedaddresses)

## Constructors

### constructor

• **new AdapterExecuteMsgFactory**()

## Methods

### executeAdapter

▸ `Static` **executeAdapter**<`TAppMsg`\>(`«destructured»`): [`AdapterExecuteMsg`](../modules.md#adapterexecutemsg)<`TAppMsg`\>

Make a request to an adapter module.

#### Type parameters

| Name |
| :------ |
| `TAppMsg` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proxyAddress` | `undefined` \| ``null`` \| `string` |
| › `request` | `TAppMsg` |

#### Returns

[`AdapterExecuteMsg`](../modules.md#adapterexecutemsg)<`TAppMsg`\>

#### Defined in

[packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts:37](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts#L37)

___

### updateAuthorizedAddresses

▸ `Static` **updateAuthorizedAddresses**(`«destructured»`): [`AdapterExecuteMsg`](../modules.md#adapterexecutemsg)<`never`\>

Update the traders on an adapter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `toAdd` | `undefined` \| ``null`` \| `string`[] |
| › `toRemove` | `undefined` \| ``null`` \| `string`[] |

#### Returns

[`AdapterExecuteMsg`](../modules.md#adapterexecutemsg)<`never`\>

#### Defined in

[packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts:50](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/adapters/Adapter.msg-builder.ts#L50)
