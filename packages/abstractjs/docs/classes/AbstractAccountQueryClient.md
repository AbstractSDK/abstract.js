[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AbstractAccountQueryClient

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

- [\_owner](AbstractAccountQueryClient.md#_owner)
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

[packages/abstractjs/src/clients/AbstractAccountClient.ts:69](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L69)

## Properties

### \_owner

• `Optional` **\_owner**: ``null`` \| `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:67](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L67)

___

### abstract

• **abstract**: [`AbstractQueryClient`](AbstractQueryClient.md)

#### Implementation of

IAbstractAccountQueryClient.abstract

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:63](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L63)

___

### accountId

• **accountId**: `number`

#### Implementation of

IAbstractAccountQueryClient.accountId

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:64](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L64)

___

### managerAddress

• **managerAddress**: `string`

#### Implementation of

IAbstractAccountQueryClient.managerAddress

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:65](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L65)

___

### proxyAddress

• **proxyAddress**: `string`

#### Implementation of

IAbstractAccountQueryClient.proxyAddress

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:66](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L66)

## Accessors

### managerQueryClient

• `get` **managerQueryClient**(): [`ManagerQueryClient`](ManagerQueryClient.md)

Get the manager query client.

#### Returns

[`ManagerQueryClient`](ManagerQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:100](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L100)

___

### proxyQueryClient

• `get` **proxyQueryClient**(): [`ProxyQueryClient`](ProxyQueryClient.md)

Get the proxy query client.

#### Returns

[`ProxyQueryClient`](ProxyQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:107](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L107)

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

[packages/abstractjs/src/clients/AbstractAccountClient.ts:219](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L219)

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

[packages/abstractjs/src/clients/AbstractAccountClient.ts:227](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L227)

___

### getBaseAsset

▸ **getBaseAsset**(): `Promise`<[`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr)\>

Return the asset by which the value of the Account is calculated.

#### Returns

`Promise`<[`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr)\>

the base asset.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:167](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L167)

___

### getModuleAddress

▸ **getModuleAddress**(`moduleId`): `Promise`<``null`` \| `string`\>

Given the **moduleId**, get the address of the module installed on this Account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

null if not installed

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:176](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L176)

___

### getModules

▸ **getModules**(): `Promise`<[`ManagerModuleInfo`](../interfaces/ManagerTypes.ManagerModuleInfo.md)[]\>

Load the module information for those installed on this Account.

#### Returns

`Promise`<[`ManagerModuleInfo`](../interfaces/ManagerTypes.ManagerModuleInfo.md)[]\>

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:122](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L122)

___

### getNamespace

▸ **getNamespace**(): `Promise`<``null`` \| `string`\>

Load the namespace registered on the Account.

#### Returns

`Promise`<``null`` \| `string`\>

the namespace or null if no namespace is registered.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:134](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L134)

___

### getOwner

▸ **getOwner**(`invalidateCache?`): `Promise`<``null`` \| `string`\>

Return the owner of the Account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `invalidateCache?` | `boolean` | If true, refetch the owner from the managerQueryClient. |

#### Returns

`Promise`<``null`` \| `string`\>

The owner address, or null if no owner is set.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:149](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L149)

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

[packages/abstractjs/src/clients/AbstractAccountClient.ts:203](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L203)

___

### totalValue

▸ **totalValue**(): `Promise`<`number`\>

Return the total value of the Abstract Account against its base asset.

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:114](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L114)

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

[packages/abstractjs/src/clients/AbstractAccountClient.ts:190](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L190)

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

[packages/abstractjs/src/clients/AbstractAccountClient.ts:81](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractAccountClient.ts#L81)
