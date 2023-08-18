[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AbstractQueryClient

# Class: AbstractQueryClient

The AbstractQueryClient class provides an interface to interact with the blockchain.

This client provides base functionality for querying data from the blockchain,
but does not support write operations (transactions).

It provides access to various sub-clients that interact with specific parts of the blockchain,
like the Abstract Name Service, Version Control, and Account Factory.

To perform write operations, use the [AbstractClient](AbstractClient.md) class.

**`Property`**

An instance of CosmWasmClient, used for blockchain interactions.

**`Property`**

The address of the version control contract.

**`Property`**

The address of the Abstract Name Service host.

**`Property`**

The address of the Account Factory.

## Hierarchy

- **`AbstractQueryClient`**

  ↳ [`AbstractClient`](AbstractClient.md)

## Implements

- [`IAbstractQueryClient`](../interfaces/IAbstractQueryClient.md)

## Table of contents

### Constructors

- [constructor](AbstractQueryClient.md#constructor)

### Properties

- [ansHostAddress](AbstractQueryClient.md#anshostaddress)
- [client](AbstractQueryClient.md#client)
- [factoryAddress](AbstractQueryClient.md#factoryaddress)
- [versionControlAddress](AbstractQueryClient.md#versioncontroladdress)

### Accessors

- [ansQueryClient](AbstractQueryClient.md#ansqueryclient)
- [factoryQueryClient](AbstractQueryClient.md#factoryqueryclient)
- [vcQueryClient](AbstractQueryClient.md#vcqueryclient)
- [versionControlQueryClient](AbstractQueryClient.md#versioncontrolqueryclient)

### Methods

- [connectSigningClient](AbstractQueryClient.md#connectsigningclient)
- [filterAccounts](AbstractQueryClient.md#filteraccounts)
- [loadAccount](AbstractQueryClient.md#loadaccount)
- [connect](AbstractQueryClient.md#connect)
- [connectToChain](AbstractQueryClient.md#connecttochain)

## Constructors

### constructor

• **new AbstractQueryClient**(`«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Omit`<[`IAbstractQueryClient`](../interfaces/IAbstractQueryClient.md), ``"connectSigningClient"``\> |

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:68](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L68)

## Properties

### ansHostAddress

• `Readonly` **ansHostAddress**: `string`

#### Implementation of

[IAbstractQueryClient](../interfaces/IAbstractQueryClient.md).[ansHostAddress](../interfaces/IAbstractQueryClient.md#anshostaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:66](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L66)

___

### client

• **client**: `CosmWasmClient`

#### Implementation of

[IAbstractQueryClient](../interfaces/IAbstractQueryClient.md).[client](../interfaces/IAbstractQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:63](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L63)

___

### factoryAddress

• `Readonly` **factoryAddress**: `string`

#### Implementation of

[IAbstractQueryClient](../interfaces/IAbstractQueryClient.md).[factoryAddress](../interfaces/IAbstractQueryClient.md#factoryaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:65](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L65)

___

### versionControlAddress

• `Readonly` **versionControlAddress**: `string`

#### Implementation of

[IAbstractQueryClient](../interfaces/IAbstractQueryClient.md).[versionControlAddress](../interfaces/IAbstractQueryClient.md#versioncontroladdress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L64)

## Accessors

### ansQueryClient

• `get` **ansQueryClient**(): [`AnsQueryClient`](AnsQueryClient.md)

Get the Abstract Name Service query client.

#### Returns

[`AnsQueryClient`](AnsQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:187](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L187)

___

### factoryQueryClient

• `get` **factoryQueryClient**(): [`FactoryQueryClient`](FactoryQueryClient.md)

Get the Abstract account factory query client.

#### Returns

[`FactoryQueryClient`](FactoryQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:180](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L180)

___

### vcQueryClient

• `get` **vcQueryClient**(): [`VcQueryClient`](VcQueryClient.md)

Get the version control query client.

**`See`**

AbstractQueryClient#versionControlQueryClient

#### Returns

[`VcQueryClient`](VcQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:173](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L173)

___

### versionControlQueryClient

• `get` **versionControlQueryClient**(): [`VcQueryClient`](VcQueryClient.md)

Get the version control query client.

#### Returns

[`VcQueryClient`](VcQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:165](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L165)

## Methods

### connectSigningClient

▸ **connectSigningClient**(`signingClient`, `sender`): [`AbstractClient`](AbstractClient.md)

Upgrade the abstract client to an executable client.

**`See`**

AbstractClient#fromQueryClient

#### Parameters

| Name | Type |
| :------ | :------ |
| `signingClient` | `SigningCosmWasmClient` |
| `sender` | `string` |

#### Returns

[`AbstractClient`](AbstractClient.md)

#### Implementation of

[IAbstractQueryClient](../interfaces/IAbstractQueryClient.md).[connectSigningClient](../interfaces/IAbstractQueryClient.md#connectsigningclient)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:246](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L246)

___

### filterAccounts

▸ **filterAccounts**(`filter`): `Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)[]\>

Filter the list of Accounts by the given filter.
This method is extremely inefficient if querying live (as opposed to archive) nodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter` | [`AccountFilter`](../interfaces/AccountFilter.md) |

#### Returns

`Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)[]\>

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:205](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L205)

___

### loadAccount

▸ **loadAccount**(`accountId`): `Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

Load an Account query client.

**`Todo`**

cache the accounts in memory

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `number` |

#### Returns

`Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:196](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L196)

___

### connect

▸ `Static` **connect**(`endpoint`, `versionControlAddress`, `version?`): `Promise`<[`AbstractQueryClient`](AbstractQueryClient.md)\>

Connect to a specific instance of Abstract via its Version Control address.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` \| `HttpEndpoint` |  |
| `versionControlAddress` | `string` |  |
| `version?` | `string` | the version of abstract to load |

#### Returns

`Promise`<[`AbstractQueryClient`](AbstractQueryClient.md)\>

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:88](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L88)

___

### connectToChain

▸ `Static` **connectToChain**(`chainId`): `Promise`<[`AbstractQueryClient`](AbstractQueryClient.md)\>

Connect to Abstract on a specific chain.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chainId` | `string` | The chain ID to connect to. For example, 'juno-1'. |

#### Returns

`Promise`<[`AbstractQueryClient`](AbstractQueryClient.md)\>

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:124](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L124)
