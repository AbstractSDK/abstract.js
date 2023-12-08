[@abstract-money/core](../README.md) / [Exports](../modules.md) / ManagerClient

# Class: ManagerClient

## Hierarchy

- [`ManagerQueryClient`](ManagerQueryClient.md)

  ↳ **`ManagerClient`**

## Implements

- [`ManagerInterface`](../interfaces/ManagerInterface.md)

## Table of contents

### Constructors

- [constructor](ManagerClient.md#constructor)

### Properties

- [client](ManagerClient.md#client)
- [contractAddress](ManagerClient.md#contractaddress)
- [sender](ManagerClient.md#sender)

### Methods

- [callback](ManagerClient.md#callback)
- [config](ManagerClient.md#config)
- [execOnModule](ManagerClient.md#execonmodule)
- [info](ManagerClient.md#info)
- [installModule](ManagerClient.md#installmodule)
- [moduleAddresses](ManagerClient.md#moduleaddresses)
- [moduleInfos](ManagerClient.md#moduleinfos)
- [moduleVersions](ManagerClient.md#moduleversions)
- [ownership](ManagerClient.md#ownership)
- [registerModule](ManagerClient.md#registermodule)
- [setOwner](ManagerClient.md#setowner)
- [uninstallModule](ManagerClient.md#uninstallmodule)
- [updateInfo](ManagerClient.md#updateinfo)
- [updateInternalConfig](ManagerClient.md#updateinternalconfig)
- [updateOwnership](ManagerClient.md#updateownership)
- [updateSettings](ManagerClient.md#updatesettings)
- [updateStatus](ManagerClient.md#updatestatus)
- [upgrade](ManagerClient.md#upgrade)

## Constructors

### constructor

• **new ManagerClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[ManagerQueryClient](ManagerQueryClient.md).[constructor](ManagerQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:238](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L238)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[ManagerQueryClient](ManagerQueryClient.md).[client](ManagerQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:234](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L234)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[ManagerInterface](../interfaces/ManagerInterface.md).[contractAddress](../interfaces/ManagerInterface.md#contractaddress)

#### Overrides

[ManagerQueryClient](ManagerQueryClient.md).[contractAddress](ManagerQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:236](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L236)

___

### sender

• **sender**: `string`

#### Implementation of

[ManagerInterface](../interfaces/ManagerInterface.md).[sender](../interfaces/ManagerInterface.md#sender)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:235](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L235)

## Methods

### callback

▸ **callback**(`fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.callback

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:496](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L496)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/ManagerTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/ManagerTypes.ConfigResponse.md)\>

#### Implementation of

ManagerInterface.config

#### Inherited from

[ManagerQueryClient](ManagerQueryClient.md).[config](ManagerQueryClient.md#config)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:96](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L96)

___

### execOnModule

▸ **execOnModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `execMsg` | `string` | `undefined` |
| › `moduleId` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.execOnModule

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:257](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L257)

___

### info

▸ **info**(): `Promise`<[`InfoResponse`](../interfaces/ManagerTypes.InfoResponse.md)\>

#### Returns

`Promise`<[`InfoResponse`](../interfaces/ManagerTypes.InfoResponse.md)\>

#### Implementation of

ManagerInterface.info

#### Inherited from

[ManagerQueryClient](ManagerQueryClient.md).[info](ManagerQueryClient.md#info)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:101](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L101)

___

### installModule

▸ **installModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `initMsg?` | `string` | `undefined` |
| › `module` | [`ModuleInfo`](../interfaces/ManagerTypes.ModuleInfo.md) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.installModule

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:300](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L300)

___

### moduleAddresses

▸ **moduleAddresses**(`«destructured»`): `Promise`<[`ModuleAddressesResponse`](../interfaces/ManagerTypes.ModuleAddressesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

#### Returns

`Promise`<[`ModuleAddressesResponse`](../interfaces/ManagerTypes.ModuleAddressesResponse.md)\>

#### Implementation of

ManagerInterface.moduleAddresses

#### Inherited from

[ManagerQueryClient](ManagerQueryClient.md).[moduleAddresses](ManagerQueryClient.md#moduleaddresses)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:75](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L75)

___

### moduleInfos

▸ **moduleInfos**(`«destructured»`): `Promise`<[`ModuleInfosResponse`](../interfaces/ManagerTypes.ModuleInfosResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`ModuleInfosResponse`](../interfaces/ManagerTypes.ModuleInfosResponse.md)\>

#### Implementation of

ManagerInterface.moduleInfos

#### Inherited from

[ManagerQueryClient](ManagerQueryClient.md).[moduleInfos](ManagerQueryClient.md#moduleinfos)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:82](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L82)

___

### moduleVersions

▸ **moduleVersions**(`«destructured»`): `Promise`<[`ModuleVersionsResponse`](../interfaces/ManagerTypes.ModuleVersionsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ids` | `string`[] |

#### Returns

`Promise`<[`ModuleVersionsResponse`](../interfaces/ManagerTypes.ModuleVersionsResponse.md)\>

#### Implementation of

ManagerInterface.moduleVersions

#### Inherited from

[ManagerQueryClient](ManagerQueryClient.md).[moduleVersions](ManagerQueryClient.md#moduleversions)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:68](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L68)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/ManagerTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/ManagerTypes.OwnershipForString.md)\>

#### Implementation of

ManagerInterface.ownership

#### Inherited from

[ManagerQueryClient](ManagerQueryClient.md).[ownership](ManagerQueryClient.md#ownership)

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:106](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L106)

___

### registerModule

▸ **registerModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `module` | [`Module`](../interfaces/ManagerTypes.Module.md) | `undefined` |
| › `moduleAddr` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.registerModule

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:326](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L326)

___

### setOwner

▸ **setOwner**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `owner` | [`GovernanceDetailsForString`](../modules/ManagerTypes.md#governancedetailsforstring) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.setOwner

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:427](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L427)

___

### uninstallModule

▸ **uninstallModule**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `moduleId` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.uninstallModule

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:352](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L352)

___

### updateInfo

▸ **updateInfo**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `description?` | `string` | `undefined` |
| › `link?` | `string` | `undefined` |
| › `name?` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.updateInfo

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:398](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L398)

___

### updateInternalConfig

▸ **updateInternalConfig**(`msg`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.updateInternalConfig

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:283](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L283)

___

### updateOwnership

▸ **updateOwnership**(`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `action` | [`Action`](../modules/ManagerTypes.md#action) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.updateOwnership

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:512](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L512)

___

### updateSettings

▸ **updateSettings**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `ibcEnabled?` | `boolean` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.updateSettings

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:473](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L473)

___

### updateStatus

▸ **updateStatus**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `isSuspended?` | `boolean` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.updateStatus

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:450](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L450)

___

### upgrade

▸ **upgrade**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `modules` | [`ModuleInfo`](../interfaces/ManagerTypes.ModuleInfo.md)[][] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

ManagerInterface.upgrade

#### Defined in

[packages/abstractjs/src/account/manager/Manager.client.ts:375](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/account/manager/Manager.client.ts#L375)
