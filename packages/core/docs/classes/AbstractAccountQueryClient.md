[@abstract-money/core](../README.md) / [Exports](../modules.md) / AbstractAccountQueryClient

# Class: AbstractAccountQueryClient

The AbstractAccountQueryClient class provides an interface to interact with a specific account.
It takes an instance of an AbstractQueryClient and an account ID to initialize.

The class exposes methods to query information about an account on the blockchain.

**`Property`**

An instance of AbstractQueryClient.

**`Property`**

The id of the account this client is responsible for.

**`Property`**

The manager address associated with the account.

**`Property`**

The proxy address associated with the account.

## Hierarchy

- **`AbstractAccountQueryClient`**

  ↳ [`AbstractAccountClient`](AbstractAccountClient.md)

## Implements

- `IAbstractAccountQueryClient`

## Table of contents

### Constructors

- [constructor](AbstractAccountQueryClient.md#constructor)

### Properties

- [abstract](AbstractAccountQueryClient.md#abstract)
- [accountId](AbstractAccountQueryClient.md#accountid)
- [managerAddress](AbstractAccountQueryClient.md#manageraddress)
- [proxyAddress](AbstractAccountQueryClient.md#proxyaddress)

### Accessors

- [managerQueryClient](AbstractAccountQueryClient.md#managerqueryclient)
- [proxyQueryClient](AbstractAccountQueryClient.md#proxyqueryclient)

### Methods

- [connectAbstractClient](AbstractAccountQueryClient.md#connectabstractclient)
- [connectSigningClient](AbstractAccountQueryClient.md#connectsigningclient)
- [getBaseAsset](AbstractAccountQueryClient.md#getbaseasset)
- [getModuleAddress](AbstractAccountQueryClient.md#getmoduleaddress)
- [getModules](AbstractAccountQueryClient.md#getmodules)
- [getNamespace](AbstractAccountQueryClient.md#getnamespace)
- [getOwner](AbstractAccountQueryClient.md#getowner)
- [queryModule](AbstractAccountQueryClient.md#querymodule)
- [totalValue](AbstractAccountQueryClient.md#totalvalue)
- [wrapModuleQueryMsg](AbstractAccountQueryClient.md#wrapmodulequerymsg)
- [load](AbstractAccountQueryClient.md#load)

## Constructors

### constructor

• **new AbstractAccountQueryClient**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `IAbstractAccountQueryClient` |

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:68](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L68)

## Properties

### abstract

• **abstract**: [`AbstractQueryClient`](AbstractQueryClient.md)

#### Implementation of

IAbstractAccountQueryClient.abstract

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:63](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L63)

___

### accountId

• **accountId**: `number`

#### Implementation of

IAbstractAccountQueryClient.accountId

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L64)

___

### managerAddress

• **managerAddress**: `string`

#### Implementation of

IAbstractAccountQueryClient.managerAddress

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:65](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L65)

___

### proxyAddress

• **proxyAddress**: `string`

#### Implementation of

IAbstractAccountQueryClient.proxyAddress

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:66](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L66)

## Accessors

### managerQueryClient

• `get` **managerQueryClient**(): [`ManagerQueryClient`](ManagerQueryClient.md)

Get the manager query client.

#### Returns

[`ManagerQueryClient`](ManagerQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:99](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L99)

___

### proxyQueryClient

• `get` **proxyQueryClient**(): [`ProxyQueryClient`](ProxyQueryClient.md)

Get the proxy query client.

#### Returns

[`ProxyQueryClient`](ProxyQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:106](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L106)

## Methods

### connectAbstractClient

▸ **connectAbstractClient**(`abstract`): [`AbstractAccountClient`](AbstractAccountClient.md)

Upgrade the Abstract Account client to an executable client.

**`See`**

AbstractAccountClient#fromQueryClient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `abstract` | [`AbstractClient`](AbstractClient.md) | Abstract client connected to the chain. |

#### Returns

[`AbstractAccountClient`](AbstractAccountClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:202](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L202)

___

### connectSigningClient

▸ **connectSigningClient**(`signingClient`, `sender`): [`AbstractAccountClient`](AbstractAccountClient.md)

Upgrade the Abstract Account client to an executable client.

**`See`**

AbstractAccountClient#fromQueryClient

#### Parameters

| Name | Type |
| :------ | :------ |
| `signingClient` | `SigningCosmWasmClient` |
| `sender` | `string` |

#### Returns

[`AbstractAccountClient`](AbstractAccountClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:210](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L210)

___

### getBaseAsset

▸ **getBaseAsset**(): `Promise`<[`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr)\>

Return the asset by which the value of the Account is calculated.

#### Returns

`Promise`<[`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr)\>

the base asset.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:154](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L154)

___

### getModuleAddress

▸ **getModuleAddress**(`moduleId`): `Promise`<`string`\>

Given the **moduleId**, get the address of the module installed on this Account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:162](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L162)

___

### getModules

▸ **getModules**(): `Promise`<[`ManagerModuleInfo`](../interfaces/ManagerTypes.ManagerModuleInfo.md)[]\>

Load the module information for those installed on this Account.

#### Returns

`Promise`<[`ManagerModuleInfo`](../interfaces/ManagerTypes.ManagerModuleInfo.md)[]\>

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:121](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L121)

___

### getNamespace

▸ **getNamespace**(): `Promise`<``null`` \| `string`\>

Load the namespace registered on the Account.

#### Returns

`Promise`<``null`` \| `string`\>

the namespace or null if no namespace is registered.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:133](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L133)

___

### getOwner

▸ **getOwner**(): `Promise`<``null`` \| `string`\>

Return the owner of the Account.

#### Returns

`Promise`<``null`` \| `string`\>

the owner address, or null if no owner is set.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:146](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L146)

___

### queryModule

▸ **queryModule**(`«destructured»`): `Promise`<`any`\>

Query a module. Not recommended to use directly, use the module specific query methods.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `QueryModule` |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:189](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L189)

___

### totalValue

▸ **totalValue**(): `Promise`<`number`\>

Return the total value of the Abstract Account against its base asset.

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:113](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L113)

___

### wrapModuleQueryMsg

▸ `Private` **wrapModuleQueryMsg**(`queryMsg`, `moduleType?`): [`ContractMsg`](../modules.md#contractmsg)

This constructs a query message that is tailored to the specified module and its
type. It can handle 'app' and 'adapter' module types, with the message just being passed on in the
default case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryMsg` | [`ContractMsg`](../modules.md#contractmsg) | the query message |
| `moduleType?` | [`ModuleType`](../modules.md#moduletype) | the type of the module |

#### Returns

[`ContractMsg`](../modules.md#contractmsg)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:176](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L176)

___

### load

▸ `Static` **load**(`abstractClient`, `accountId`): `Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

Load the abstract account client given the **accountId** and the **abstractClient**.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `abstractClient` | [`AbstractQueryClient`](AbstractQueryClient.md) | Abstract client connected to the chain. |
| `accountId` | `number` | The account id. |

#### Returns

`Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:80](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L80)
