[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AbstractQueryClient

# Class: AbstractQueryClient

The AbstractQueryClient class provides an interface to interact with the blockchain.

This client provides base functionality for querying data from the blockchain,
but does not support write operations (transactions).

It provides access to various sub-clients that interact with specific parts of the blockchain,
like the Abstract Name Service, Registry, and Account Factory.

To perform write operations, use the [AbstractClient](AbstractClient.md) class.

**`Property`**

An instance of CosmWasmClient, used for blockchain interactions.

**`Property`**

The address of the registry contract.

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

- [accountCache](AbstractQueryClient.md#accountcache)
- [ansHostAddress](AbstractQueryClient.md#anshostaddress)
- [client](AbstractQueryClient.md#client)
- [factoryAddress](AbstractQueryClient.md#factoryaddress)
- [registryAddress](AbstractQueryClient.md#registryaddress)

### Accessors

- [ansQueryClient](AbstractQueryClient.md#ansqueryclient)
- [factoryQueryClient](AbstractQueryClient.md#factoryqueryclient)
- [registryQueryClient](AbstractQueryClient.md#registryqueryclient)

### Methods

- [clearAccountCache](AbstractQueryClient.md#clearaccountcache)
- [connectSigningClient](AbstractQueryClient.md#connectsigningclient)
- [filterAccounts](AbstractQueryClient.md#filteraccounts)
- [loadAccount](AbstractQueryClient.md#loadaccount)
- [loadAccounts](AbstractQueryClient.md#loadaccounts)
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

[packages/abstractjs/src/clients/AbstractClient.ts:92](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L92)

## Properties

### accountCache

• **accountCache**: `Map`<`number`, [`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:90](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L90)

___

### ansHostAddress

• `Readonly` **ansHostAddress**: `string`

#### Implementation of

[IAbstractQueryClient](../interfaces/IAbstractQueryClient.md).[ansHostAddress](../interfaces/IAbstractQueryClient.md#anshostaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:89](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L89)

___

### client

• **client**: `CosmWasmClient`

#### Implementation of

[IAbstractQueryClient](../interfaces/IAbstractQueryClient.md).[client](../interfaces/IAbstractQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:86](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L86)

___

### factoryAddress

• `Readonly` **factoryAddress**: `string`

#### Implementation of

[IAbstractQueryClient](../interfaces/IAbstractQueryClient.md).[factoryAddress](../interfaces/IAbstractQueryClient.md#factoryaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:88](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L88)

___

### registryAddress

• `Readonly` **registryAddress**: `string`

#### Implementation of

[IAbstractQueryClient](../interfaces/IAbstractQueryClient.md).[registryAddress](../interfaces/IAbstractQueryClient.md#registryaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:87](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L87)

## Accessors

### ansQueryClient

• `get` **ansQueryClient**(): [`AnsQueryClient`](AnsQueryClient.md)

Get the Abstract Name Service query client.

#### Returns

[`AnsQueryClient`](AnsQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:217](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L217)

___

### factoryQueryClient

• `get` **factoryQueryClient**(): [`FactoryQueryClient`](FactoryQueryClient.md)

Get the Abstract account factory query client.

#### Returns

[`FactoryQueryClient`](FactoryQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:210](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L210)

___

### registryQueryClient

• `get` **registryQueryClient**(): [`RegistryQueryClient`](RegistryQueryClient.md)

Get the registry query client.

#### Returns

[`RegistryQueryClient`](RegistryQueryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:203](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L203)

## Methods

### clearAccountCache

▸ **clearAccountCache**(): `void`

Clear the account cache.

#### Returns

`void`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:319](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L319)

___

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

[packages/abstractjs/src/clients/AbstractClient.ts:309](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L309)

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

[packages/abstractjs/src/clients/AbstractClient.ts:266](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L266)

___

### loadAccount

▸ **loadAccount**(`accountId`, `refetch?`): `Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

Load an Account query client.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `number` |  |
| `refetch?` | `boolean` | If true, the account will be loaded from the blockchain, even if it is already in the cache. |

#### Returns

`Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:227](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L227)

___

### loadAccounts

▸ **loadAccounts**(`startAfter?`, `count?`): `Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)[]\>

Load all accounts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `startAfter?` | `number` |
| `count?` | `number` |

#### Returns

`Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)[]\>

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:244](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L244)

___

### connect

▸ `Static` **connect**(`endpoint`, `registryAddress`, `version?`, `options?`): `Promise`<[`AbstractQueryClient`](AbstractQueryClient.md)\>

Connect to a specific instance of Abstract via its Registry address.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `endpoint` | `string` \| `HttpEndpoint` | `undefined` |  |
| `registryAddress` | `string` | `undefined` |  |
| `version?` | `string` | `undefined` | the version of abstract to load |
| `options` | [`AbstractQueryClientOptions`](../interfaces/AbstractQueryClientOptions.md) | `DEFAULT_ABSTRACT_QUERY_CLIENT_OPTIONS` | options for the query client |

#### Returns

`Promise`<[`AbstractQueryClient`](AbstractQueryClient.md)\>

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:113](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L113)

___

### connectToChain

▸ `Static` **connectToChain**(`chainId`, `options?`): `Promise`<[`AbstractQueryClient`](AbstractQueryClient.md)\>

Connect to Abstract on a specific chain. This will query the Abstract API to find the
addresses of the deployed contracts on the chain.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `chainId` | `string` | `undefined` | The chain ID to connect to. For example, 'juno-1'. |
| `options` | [`AbstractQueryClientOptions`](../interfaces/AbstractQueryClientOptions.md) | `DEFAULT_ABSTRACT_QUERY_CLIENT_OPTIONS` | Options for the query client. Allows overriding of certain defaults such as the RPC url. |

#### Returns

`Promise`<[`AbstractQueryClient`](AbstractQueryClient.md)\>

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:152](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L152)
