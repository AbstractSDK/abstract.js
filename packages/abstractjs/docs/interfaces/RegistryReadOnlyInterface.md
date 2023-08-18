[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / RegistryReadOnlyInterface

# Interface: RegistryReadOnlyInterface

## Hierarchy

- **`RegistryReadOnlyInterface`**

  ↳ [`RegistryInterface`](RegistryInterface.md)

## Table of contents

### Properties

- [accountBase](RegistryReadOnlyInterface.md#accountbase)
- [config](RegistryReadOnlyInterface.md#config)
- [contractAddress](RegistryReadOnlyInterface.md#contractaddress)
- [moduleList](RegistryReadOnlyInterface.md#modulelist)
- [modules](RegistryReadOnlyInterface.md#modules)
- [namespace](RegistryReadOnlyInterface.md#namespace)
- [namespaceList](RegistryReadOnlyInterface.md#namespacelist)
- [namespaces](RegistryReadOnlyInterface.md#namespaces)
- [ownership](RegistryReadOnlyInterface.md#ownership)

## Properties

### accountBase

• **accountBase**: (`__namedParameters`: { `accountId`: `number`  }) => `Promise`<[`AccountBaseResponse`](RegistryTypes.AccountBaseResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AccountBaseResponse`](RegistryTypes.AccountBaseResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |

##### Returns

`Promise`<[`AccountBaseResponse`](RegistryTypes.AccountBaseResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:44](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L44)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](RegistryTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](RegistryTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](RegistryTypes.ConfigResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:48](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L48)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:43](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L43)

___

### moduleList

• **moduleList**: (`__namedParameters`: { `filter?`: [`ModuleFilter`](RegistryTypes.ModuleFilter.md) ; `limit?`: `number` ; `startAfter?`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)  }) => `Promise`<[`ModulesListResponse`](RegistryTypes.ModulesListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModulesListResponse`](RegistryTypes.ModulesListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`ModuleFilter`](RegistryTypes.ModuleFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md) |

##### Returns

`Promise`<[`ModulesListResponse`](RegistryTypes.ModulesListResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:49](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L49)

___

### modules

• **modules**: (`__namedParameters`: { `infos`: [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[]  }) => `Promise`<[`ModulesResponse`](RegistryTypes.ModulesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModulesResponse`](RegistryTypes.ModulesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`ModuleInfo`](RegistryTypes.ModuleInfo.md)[] |

##### Returns

`Promise`<[`ModulesResponse`](RegistryTypes.ModulesResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:45](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L45)

___

### namespace

• **namespace**: (`__namedParameters`: { `namespace`: `string`  }) => `Promise`<[`NamespaceResponse`](RegistryTypes.NamespaceResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`NamespaceResponse`](RegistryTypes.NamespaceResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespace` | `string` |

##### Returns

`Promise`<[`NamespaceResponse`](RegistryTypes.NamespaceResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:47](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L47)

___

### namespaceList

• **namespaceList**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`NamespaceListResponse`](RegistryTypes.NamespaceListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`NamespaceListResponse`](RegistryTypes.NamespaceListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`NamespaceListResponse`](RegistryTypes.NamespaceListResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:58](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L58)

___

### namespaces

• **namespaces**: (`__namedParameters`: { `accounts`: `number`[]  }) => `Promise`<[`NamespacesResponse`](RegistryTypes.NamespacesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`NamespacesResponse`](RegistryTypes.NamespacesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | `number`[] |

##### Returns

`Promise`<[`NamespacesResponse`](RegistryTypes.NamespacesResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:46](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L46)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](RegistryTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](RegistryTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](RegistryTypes.OwnershipForString.md)\>

#### Defined in

[packages/abstractjs/src/native/registry/Registry.client.ts:65](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/registry/Registry.client.ts#L65)
