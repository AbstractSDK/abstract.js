[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / VersionControlInterface

# Interface: VersionControlInterface

## Hierarchy

- [`VersionControlReadOnlyInterface`](VersionControlReadOnlyInterface.md)

  ↳ **`VersionControlInterface`**

## Implemented by

- [`VersionControlClient`](../classes/VersionControlClient.md)

## Table of contents

### Properties

- [accountBase](VersionControlInterface.md#accountbase)
- [addAccount](VersionControlInterface.md#addaccount)
- [approveOrRejectModules](VersionControlInterface.md#approveorrejectmodules)
- [claimNamespaces](VersionControlInterface.md#claimnamespaces)
- [config](VersionControlInterface.md#config)
- [contractAddress](VersionControlInterface.md#contractaddress)
- [moduleList](VersionControlInterface.md#modulelist)
- [modules](VersionControlInterface.md#modules)
- [namespace](VersionControlInterface.md#namespace)
- [namespaceList](VersionControlInterface.md#namespacelist)
- [namespaces](VersionControlInterface.md#namespaces)
- [ownership](VersionControlInterface.md#ownership)
- [proposeModules](VersionControlInterface.md#proposemodules)
- [removeModule](VersionControlInterface.md#removemodule)
- [removeNamespaces](VersionControlInterface.md#removenamespaces)
- [sender](VersionControlInterface.md#sender)
- [setFactory](VersionControlInterface.md#setfactory)
- [setModuleMonetization](VersionControlInterface.md#setmodulemonetization)
- [updateConfig](VersionControlInterface.md#updateconfig)
- [updateOwnership](VersionControlInterface.md#updateownership)
- [yankModule](VersionControlInterface.md#yankmodule)

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

#### Inherited from

[VersionControlReadOnlyInterface](VersionControlReadOnlyInterface.md).[accountBase](VersionControlReadOnlyInterface.md#accountbase)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:45](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L45)

___

### addAccount

• **addAccount**: (`__namedParameters`: { `accountBase`: [`AccountBase`](VersionControlTypes.AccountBase.md) ; `accountId`: `number`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountBase` | [`AccountBase`](VersionControlTypes.AccountBase.md) |
| › `accountId` | `number` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:241](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L241)

___

### approveOrRejectModules

• **approveOrRejectModules**: (`__namedParameters`: { `approves`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[] ; `rejects`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `approves` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[] |
| › `rejects` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:207](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L207)

___

### claimNamespaces

• **claimNamespaces**: (`__namedParameters`: { `accountId`: `number` ; `namespaces`: `string`[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `accountId` | `number` |
| › `namespaces` | `string`[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:219](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L219)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](VersionControlTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](VersionControlTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](VersionControlTypes.ConfigResponse.md)\>

#### Inherited from

[VersionControlReadOnlyInterface](VersionControlReadOnlyInterface.md).[config](VersionControlReadOnlyInterface.md#config)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L49)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[VersionControlReadOnlyInterface](VersionControlReadOnlyInterface.md).[contractAddress](VersionControlReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:161](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L161)

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

#### Inherited from

[VersionControlReadOnlyInterface](VersionControlReadOnlyInterface.md).[moduleList](VersionControlReadOnlyInterface.md#modulelist)

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

#### Inherited from

[VersionControlReadOnlyInterface](VersionControlReadOnlyInterface.md).[modules](VersionControlReadOnlyInterface.md#modules)

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

#### Inherited from

[VersionControlReadOnlyInterface](VersionControlReadOnlyInterface.md).[namespace](VersionControlReadOnlyInterface.md#namespace)

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

#### Inherited from

[VersionControlReadOnlyInterface](VersionControlReadOnlyInterface.md).[namespaceList](VersionControlReadOnlyInterface.md#namespacelist)

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

#### Inherited from

[VersionControlReadOnlyInterface](VersionControlReadOnlyInterface.md).[namespaces](VersionControlReadOnlyInterface.md#namespaces)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:47](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L47)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](VersionControlTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](VersionControlTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](VersionControlTypes.OwnershipForString.md)\>

#### Inherited from

[VersionControlReadOnlyInterface](VersionControlReadOnlyInterface.md).[ownership](VersionControlReadOnlyInterface.md#ownership)

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:68](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L68)

___

### proposeModules

• **proposeModules**: (`__namedParameters`: { `modules`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[][]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)[][] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:183](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L183)

___

### removeModule

• **removeModule**: (`__namedParameters`: { `module`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:163](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L163)

___

### removeNamespaces

• **removeNamespaces**: (`__namedParameters`: { `namespaces`: `string`[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `namespaces` | `string`[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:231](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L231)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:162](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L162)

___

### setFactory

• **setFactory**: (`__namedParameters`: { `newFactory`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `newFactory` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:267](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L267)

___

### setModuleMonetization

• **setModuleMonetization**: (`__namedParameters`: { `moduleName`: `string` ; `monetization`: [`Monetization`](../modules/VersionControlTypes.md#monetization) ; `namespace`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleName` | `string` |
| › `monetization` | [`Monetization`](../modules/VersionControlTypes.md#monetization) |
| › `namespace` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:193](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L193)

___

### updateConfig

• **updateConfig**: (`__namedParameters`: { `allowDirectModuleRegistration?`: `boolean` ; `namespaceLimit?`: `number` ; `namespaceRegistrationFee?`: [`Coin`](VersionControlTypes.Coin.md)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `allowDirectModuleRegistration?` | `boolean` |
| › `namespaceLimit?` | `number` |
| › `namespaceRegistrationFee?` | [`Coin`](VersionControlTypes.Coin.md) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:253](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L253)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/VersionControlTypes.md#action), `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/VersionControlTypes.md#action) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:277](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L277)

___

### yankModule

• **yankModule**: (`__namedParameters`: { `module`: [`ModuleInfo`](VersionControlTypes.ModuleInfo.md)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: [`Coin`](VersionControlTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`ModuleInfo`](VersionControlTypes.ModuleInfo.md) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | [`Coin`](VersionControlTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/version-control/VersionControl.client.ts:173](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/version-control/VersionControl.client.ts#L173)
