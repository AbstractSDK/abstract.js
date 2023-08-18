[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AbstractClient

# Class: AbstractClient

The AbstractClient class extends the functionality of the AbstractQueryClient.

In addition to the query functionality provided by [AbstractQueryClient](AbstractQueryClient.md), AbstractClient
also supports executing transactions.

Use this class when you need to perform both read and write operations.

**`See`**

- For connecting to the blockchain.
Provides access to the Abstract Name Service ([AnsClient](AnsClient.md)), Registry
  ([RegistryClient](RegistryClient.md)), and Account Factory ([FactoryClient](FactoryClient.md)) clients.

## Hierarchy

- [`AbstractQueryClient`](AbstractQueryClient.md)

  ↳ **`AbstractClient`**

## Table of contents

### Constructors

- [constructor](AbstractClient.md#constructor)

### Properties

- [accountCache](AbstractClient.md#accountcache)
- [ansHostAddress](AbstractClient.md#anshostaddress)
- [client](AbstractClient.md#client)
- [factoryAddress](AbstractClient.md#factoryaddress)
- [registryAddress](AbstractClient.md#registryaddress)
- [sender](AbstractClient.md#sender)

### Accessors

- [ansClient](AbstractClient.md#ansclient)
- [ansQueryClient](AbstractClient.md#ansqueryclient)
- [factoryClient](AbstractClient.md#factoryclient)
- [factoryQueryClient](AbstractClient.md#factoryqueryclient)
- [registryClient](AbstractClient.md#registryclient)
- [registryQueryClient](AbstractClient.md#registryqueryclient)

### Methods

- [ansMsgComposer](AbstractClient.md#ansmsgcomposer)
- [clearAccountCache](AbstractClient.md#clearaccountcache)
- [connectSigningClient](AbstractClient.md#connectsigningclient)
- [createAccount](AbstractClient.md#createaccount)
- [createAccountWithGovernance](AbstractClient.md#createaccountwithgovernance)
- [factoryMsgComposer](AbstractClient.md#factorymsgcomposer)
- [filterAccounts](AbstractClient.md#filteraccounts)
- [loadAccount](AbstractClient.md#loadaccount)
- [loadAccounts](AbstractClient.md#loadaccounts)
- [registryMsgComposer](AbstractClient.md#registrymsgcomposer)
- [connect](AbstractClient.md#connect)
- [connectToChain](AbstractClient.md#connecttochain)
- [fromQueryClient](AbstractClient.md#fromqueryclient)

## Constructors

### constructor

• **new AbstractClient**(`base`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | `IAbstractClient` |

#### Overrides

[AbstractQueryClient](AbstractQueryClient.md).[constructor](AbstractQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:345](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L345)

## Properties

### accountCache

• **accountCache**: `Map`<`number`, [`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[accountCache](AbstractQueryClient.md#accountcache)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:90](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L90)

___

### ansHostAddress

• `Readonly` **ansHostAddress**: `string`

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[ansHostAddress](AbstractQueryClient.md#anshostaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:89](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L89)

___

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[AbstractQueryClient](AbstractQueryClient.md).[client](AbstractQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:342](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L342)

___

### factoryAddress

• `Readonly` **factoryAddress**: `string`

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[factoryAddress](AbstractQueryClient.md#factoryaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:88](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L88)

___

### registryAddress

• `Readonly` **registryAddress**: `string`

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[registryAddress](AbstractQueryClient.md#registryaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:87](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L87)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:343](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L343)

## Accessors

### ansClient

• `get` **ansClient**(): [`AnsClient`](AnsClient.md)

Get the Abstract name service client.

#### Returns

[`AnsClient`](AnsClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:355](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L355)

___

### ansQueryClient

• `get` **ansQueryClient**(): [`AnsQueryClient`](AnsQueryClient.md)

Get the Abstract Name Service query client.

#### Returns

[`AnsQueryClient`](AnsQueryClient.md)

#### Inherited from

AbstractQueryClient.ansQueryClient

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:217](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L217)

___

### factoryClient

• `get` **factoryClient**(): [`FactoryClient`](FactoryClient.md)

Get the Abstract account factory client.

#### Returns

[`FactoryClient`](FactoryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:369](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L369)

___

### factoryQueryClient

• `get` **factoryQueryClient**(): [`FactoryQueryClient`](FactoryQueryClient.md)

Get the Abstract account factory query client.

#### Returns

[`FactoryQueryClient`](FactoryQueryClient.md)

#### Inherited from

AbstractQueryClient.factoryQueryClient

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:210](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L210)

___

### registryClient

• `get` **registryClient**(): [`RegistryClient`](RegistryClient.md)

Get the registry client.

#### Returns

[`RegistryClient`](RegistryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:362](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L362)

___

### registryQueryClient

• `get` **registryQueryClient**(): [`RegistryQueryClient`](RegistryQueryClient.md)

Get the registry query client.

#### Returns

[`RegistryQueryClient`](RegistryQueryClient.md)

#### Inherited from

AbstractQueryClient.registryQueryClient

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:203](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L203)

## Methods

### ansMsgComposer

▸ **ansMsgComposer**(`sender?`): [`AnsHostMessageComposer`](AnsHostMessageComposer.md)

Get the Abstract Name Service message composer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sender?` | `string` | override the sender |

#### Returns

[`AnsHostMessageComposer`](AnsHostMessageComposer.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:385](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L385)

___

### clearAccountCache

▸ **clearAccountCache**(): `void`

Clear the account cache.

#### Returns

`void`

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[clearAccountCache](AbstractQueryClient.md#clearaccountcache)

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

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[connectSigningClient](AbstractQueryClient.md#connectsigningclient)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:309](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L309)

___

### createAccount

▸ **createAccount**(`owner`, `name`, `description?`, `link?`): `Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

Creates a new account with the given owner as the monarch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `owner` | `string` | The owner of the account. |
| `name` | `string` | The name of the account. |
| `description?` | `string` | (Optional) The description of the account. |
| `link?` | `string` | (Optional) The link associated with the account. Must be a valid URL. |

#### Returns

`Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

A promise that resolves to an [AbstractAccountQueryClient](AbstractAccountQueryClient.md).

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:405](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L405)

___

### createAccountWithGovernance

▸ **createAccountWithGovernance**(`governance`, `name`, `description?`, `link?`): `Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

Creates a new account with governance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `governance` | [`GovernanceDetailsForString`](../modules/FactoryTypes.md#governancedetailsforstring) | The governance details for the account. |
| `name` | `string` | The name of the account. |
| `description?` | `string` | (Optional) The description of the account. |
| `link?` | `string` | (Optional) The link associated with the account. Must be a valid URL. |

#### Returns

`Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

A promise that resolves to an [AbstractAccountQueryClient](AbstractAccountQueryClient.md).

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:431](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L431)

___

### factoryMsgComposer

▸ **factoryMsgComposer**(`sender?`): [`FactoryMessageComposer`](FactoryMessageComposer.md)

Get the Abstract account factory message composer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sender?` | `string` | override the sender |

#### Returns

[`FactoryMessageComposer`](FactoryMessageComposer.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:377](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L377)

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

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[filterAccounts](AbstractQueryClient.md#filteraccounts)

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

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[loadAccount](AbstractQueryClient.md#loadaccount)

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

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[loadAccounts](AbstractQueryClient.md#loadaccounts)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:244](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L244)

___

### registryMsgComposer

▸ **registryMsgComposer**(`sender?`): [`RegistryMessageComposer`](RegistryMessageComposer.md)

Get the registry message composer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sender?` | `string` | override the sender |

#### Returns

[`RegistryMessageComposer`](RegistryMessageComposer.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:393](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L393)

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

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[connect](AbstractQueryClient.md#connect)

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

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[connectToChain](AbstractQueryClient.md#connecttochain)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:152](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L152)

___

### fromQueryClient

▸ `Static` **fromQueryClient**(`queryClient`, `signingClient`, `sender`): [`AbstractClient`](AbstractClient.md)

Upgrade a query client to a signing client.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryClient` | [`AbstractQueryClient`](AbstractQueryClient.md) |
| `signingClient` | `SigningCosmWasmClient` |
| `sender` | `string` |

#### Returns

[`AbstractClient`](AbstractClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:470](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L470)
