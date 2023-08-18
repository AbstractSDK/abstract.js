[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / ManagerInterface

# Interface: ManagerInterface

## Hierarchy

- [`ManagerReadOnlyInterface`](ManagerReadOnlyInterface.md)

  ↳ **`ManagerInterface`**

## Implemented by

- [`ManagerClient`](../classes/ManagerClient.md)

## Table of contents

### Properties

- [callback](ManagerInterface.md#callback)
- [config](ManagerInterface.md#config)
- [contractAddress](ManagerInterface.md#contractaddress)
- [execOnModule](ManagerInterface.md#execonmodule)
- [info](ManagerInterface.md#info)
- [installModule](ManagerInterface.md#installmodule)
- [moduleAddresses](ManagerInterface.md#moduleaddresses)
- [moduleInfos](ManagerInterface.md#moduleinfos)
- [moduleVersions](ManagerInterface.md#moduleversions)
- [ownership](ManagerInterface.md#ownership)
- [registerModule](ManagerInterface.md#registermodule)
- [sender](ManagerInterface.md#sender)
- [setOwner](ManagerInterface.md#setowner)
- [uninstallModule](ManagerInterface.md#uninstallmodule)
- [updateInfo](ManagerInterface.md#updateinfo)
- [updateInternalConfig](ManagerInterface.md#updateinternalconfig)
- [updateOwnership](ManagerInterface.md#updateownership)
- [updateSettings](ManagerInterface.md#updatesettings)
- [updateStatus](ManagerInterface.md#updatestatus)
- [upgrade](ManagerInterface.md#upgrade)

## Properties

### callback

• **callback**: (`fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:221](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L221)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](ManagerTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](ManagerTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](ManagerTypes.ConfigResponse.md)\>

#### Inherited from

[ManagerReadOnlyInterface](ManagerReadOnlyInterface.md).[config](ManagerReadOnlyInterface.md#config)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L49)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[ManagerReadOnlyInterface](ManagerReadOnlyInterface.md).[contractAddress](ManagerReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:113](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L113)

___

### execOnModule

• **execOnModule**: (`__namedParameters`: { `execMsg`: `string` ; `moduleId`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `execMsg` | `string` |
| › `moduleId` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:115](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L115)

___

### info

• **info**: () => `Promise`<[`InfoResponse`](ManagerTypes.InfoResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`InfoResponse`](ManagerTypes.InfoResponse.md)\>

##### Returns

`Promise`<[`InfoResponse`](ManagerTypes.InfoResponse.md)\>

#### Inherited from

[ManagerReadOnlyInterface](ManagerReadOnlyInterface.md).[info](ManagerReadOnlyInterface.md#info)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:50](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L50)

___

### installModule

• **installModule**: (`__namedParameters`: { `initMsg?`: `string` ; `module`: [`ModuleInfo`](ManagerTypes.ModuleInfo.md)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `initMsg?` | `string` |
| › `module` | [`ModuleInfo`](ManagerTypes.ModuleInfo.md) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:133](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L133)

___

### moduleAddresses

• **moduleAddresses**: (`__namedParameters`: { `ids`: `string`[]  }) => `Promise`<[`ModuleAddressesResponse`](ManagerTypes.ModuleAddressesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModuleAddressesResponse`](ManagerTypes.ModuleAddressesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

##### Returns

`Promise`<[`ModuleAddressesResponse`](ManagerTypes.ModuleAddressesResponse.md)\>

#### Inherited from

[ManagerReadOnlyInterface](ManagerReadOnlyInterface.md).[moduleAddresses](ManagerReadOnlyInterface.md#moduleaddresses)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:41](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L41)

___

### moduleInfos

• **moduleInfos**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`ModuleInfosResponse`](ManagerTypes.ModuleInfosResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModuleInfosResponse`](ManagerTypes.ModuleInfosResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`ModuleInfosResponse`](ManagerTypes.ModuleInfosResponse.md)\>

#### Inherited from

[ManagerReadOnlyInterface](ManagerReadOnlyInterface.md).[moduleInfos](ManagerReadOnlyInterface.md#moduleinfos)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:42](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L42)

___

### moduleVersions

• **moduleVersions**: (`__namedParameters`: { `ids`: `string`[]  }) => `Promise`<[`ModuleVersionsResponse`](ManagerTypes.ModuleVersionsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ModuleVersionsResponse`](ManagerTypes.ModuleVersionsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

##### Returns

`Promise`<[`ModuleVersionsResponse`](ManagerTypes.ModuleVersionsResponse.md)\>

#### Inherited from

[ManagerReadOnlyInterface](ManagerReadOnlyInterface.md).[moduleVersions](ManagerReadOnlyInterface.md#moduleversions)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:40](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L40)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](ManagerTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](ManagerTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](ManagerTypes.OwnershipForString.md)\>

#### Inherited from

[ManagerReadOnlyInterface](ManagerReadOnlyInterface.md).[ownership](ManagerReadOnlyInterface.md#ownership)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:51](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L51)

___

### registerModule

• **registerModule**: (`__namedParameters`: { `module`: [`Module`](ManagerTypes.Module.md) ; `moduleAddr`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `module` | [`Module`](ManagerTypes.Module.md) |
| › `moduleAddr` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:145](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L145)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:114](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L114)

___

### setOwner

• **setOwner**: (`__namedParameters`: { `owner`: [`GovernanceDetailsForString`](../modules/ManagerTypes.md#governancedetailsforstring)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `owner` | [`GovernanceDetailsForString`](../modules/ManagerTypes.md#governancedetailsforstring) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:191](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L191)

___

### uninstallModule

• **uninstallModule**: (`__namedParameters`: { `moduleId`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `moduleId` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:157](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L157)

___

### updateInfo

• **updateInfo**: (`__namedParameters`: { `description?`: `string` ; `link?`: `string` ; `name?`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description?` | `string` |
| › `link?` | `string` |
| › `name?` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:177](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L177)

___

### updateInternalConfig

• **updateInternalConfig**: (`msg`: `string`, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`msg`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:127](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L127)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/ManagerTypes.md#action), `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/ManagerTypes.md#action) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:226](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L226)

___

### updateSettings

• **updateSettings**: (`__namedParameters`: { `ibcEnabled?`: `boolean`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ibcEnabled?` | `boolean` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:211](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L211)

___

### updateStatus

• **updateStatus**: (`__namedParameters`: { `isSuspended?`: `boolean`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `isSuspended?` | `boolean` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:201](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L201)

___

### upgrade

• **upgrade**: (`__namedParameters`: { `modules`: [`ModuleInfo`](ManagerTypes.ModuleInfo.md)[][]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `modules` | [`ModuleInfo`](ManagerTypes.ModuleInfo.md)[][] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:167](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L167)
