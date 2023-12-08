[@abstract-money/core](../README.md) / [Exports](../modules.md) / VersionControlReadOnlyInterface

# Interface: VersionControlReadOnlyInterface

## Hierarchy

- **`VersionControlReadOnlyInterface`**

  ↳ [`VersionControlInterface`](VersionControlInterface.md)

## Implemented by

- [`VersionControlQueryClient`](../classes/VersionControlQueryClient.md)

## Table of contents

### Properties

- [accountBase](VersionControlReadOnlyInterface.md#accountbase)
- [config](VersionControlReadOnlyInterface.md#config)
- [contractAddress](VersionControlReadOnlyInterface.md#contractaddress)
- [moduleList](VersionControlReadOnlyInterface.md#modulelist)
- [modules](VersionControlReadOnlyInterface.md#modules)
- [namespace](VersionControlReadOnlyInterface.md#namespace)
- [namespaceList](VersionControlReadOnlyInterface.md#namespacelist)
- [namespaces](VersionControlReadOnlyInterface.md#namespaces)
- [ownership](VersionControlReadOnlyInterface.md#ownership)

## Properties

### accountBase

• **accountBase**: (`__namedParameters`: { `accountId`: `number`  }) => `Promise`<[`AccountBaseResponse`](VersionControlTypes.AccountBaseResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AccountBaseResponse`](VersionControlTypes.AccountBaseResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |

##### Returns

`Promise`<[`AccountBaseResponse`](VersionControlTypes.AccountBaseResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:45](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L45)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](VersionControlTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](VersionControlTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](VersionControlTypes.ConfigResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L49)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:44](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L44)

___

### moduleList

• **moduleList**: (`__namedParameters`: { `filter?`: [`ModuleFilter`](VersionControlTypes.ModuleFilter.md) ; `limit?`: `number` ; `startAfter?`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)  }) => `Promise`<[`ModulesListResponse`](VersionControlTypes.ModulesListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModulesListResponse`](VersionControlTypes.ModulesListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`ModuleFilter`](VersionControlTypes.ModuleFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md) |

##### Returns

`Promise`<[`ModulesListResponse`](VersionControlTypes.ModulesListResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:50](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L50)

___

### modules

• **modules**: (`__namedParameters`: { `infos`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[]  }) => `Promise`<[`ModulesResponse`](VersionControlTypes.ModulesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModulesResponse`](VersionControlTypes.ModulesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `infos` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[] |

##### Returns

`Promise`<[`ModulesResponse`](VersionControlTypes.ModulesResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:46](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L46)

___

### namespace

• **namespace**: (`__namedParameters`: { `namespace`: `string`  }) => `Promise`<[`NamespaceResponse`](VersionControlTypes.NamespaceResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`NamespaceResponse`](VersionControlTypes.NamespaceResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespace` | `string` |

##### Returns

`Promise`<[`NamespaceResponse`](VersionControlTypes.NamespaceResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:48](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L48)

___

### namespaceList

• **namespaceList**: (`__namedParameters`: { `filter?`: [`NamespaceFilter`](VersionControlTypes.NamespaceFilter.md) ; `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`NamespaceListResponse`](VersionControlTypes.NamespaceListResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`NamespaceListResponse`](VersionControlTypes.NamespaceListResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `filter?` | [`NamespaceFilter`](VersionControlTypes.NamespaceFilter.md) |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`NamespaceListResponse`](VersionControlTypes.NamespaceListResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:59](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L59)

___

### namespaces

• **namespaces**: (`__namedParameters`: { `accounts`: `number`[]  }) => `Promise`<[`NamespacesResponse`](VersionControlTypes.NamespacesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`NamespacesResponse`](VersionControlTypes.NamespacesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accounts` | `number`[] |

##### Returns

`Promise`<[`NamespacesResponse`](VersionControlTypes.NamespacesResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:47](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L47)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](VersionControlTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](VersionControlTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](VersionControlTypes.OwnershipForString.md)\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:68](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L68)
