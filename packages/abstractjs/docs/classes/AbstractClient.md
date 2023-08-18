[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AbstractClient

# Class: AbstractClient

The AbstractClient class extends the functionality of the AbstractQueryClient.

In addition to the query functionality provided by [AbstractQueryClient](AbstractQueryClient.md), AbstractClient
also supports executing transactions.

Use this class when you need to perform both read and write operations.

**`See`**

- For connecting to the blockchain.
Provides access to the Abstract Name Service ([AnsClient](AnsClient.md)), Version Control
  ([VcClient](VcClient.md)), and Account Factory ([FactoryClient](FactoryClient.md)) clients.

## Hierarchy

- [`AbstractQueryClient`](AbstractQueryClient.md)

  ↳ **`AbstractClient`**

## Table of contents

### Constructors

- [constructor](AbstractClient.md#constructor)

### Properties

- [ansHostAddress](AbstractClient.md#anshostaddress)
- [client](AbstractClient.md#client)
- [factoryAddress](AbstractClient.md#factoryaddress)
- [sender](AbstractClient.md#sender)
- [versionControlAddress](AbstractClient.md#versioncontroladdress)

### Accessors

- [ansClient](AbstractClient.md#ansclient)
- [ansQueryClient](AbstractClient.md#ansqueryclient)
- [factoryClient](AbstractClient.md#factoryclient)
- [factoryQueryClient](AbstractClient.md#factoryqueryclient)
- [vcClient](AbstractClient.md#vcclient)
- [vcQueryClient](AbstractClient.md#vcqueryclient)
- [versionControlClient](AbstractClient.md#versioncontrolclient)
- [versionControlQueryClient](AbstractClient.md#versioncontrolqueryclient)

### Methods

- [ansMsgComposer](AbstractClient.md#ansmsgcomposer)
- [connectSigningClient](AbstractClient.md#connectsigningclient)
- [factoryMsgComposer](AbstractClient.md#factorymsgcomposer)
- [filterAccounts](AbstractClient.md#filteraccounts)
- [loadAccount](AbstractClient.md#loadaccount)
- [versionControlMessageComposer](AbstractClient.md#versioncontrolmessagecomposer)
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

[packages/abstractjs/src/clients/AbstractClient.ts:275](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L275)

## Properties

### ansHostAddress

• `Readonly` **ansHostAddress**: `string`

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[ansHostAddress](AbstractQueryClient.md#anshostaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:66](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L66)

___

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[AbstractQueryClient](AbstractQueryClient.md).[client](AbstractQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:272](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L272)

___

### factoryAddress

• `Readonly` **factoryAddress**: `string`

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[factoryAddress](AbstractQueryClient.md#factoryaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:65](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L65)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:273](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L273)

___

### versionControlAddress

• `Readonly` **versionControlAddress**: `string`

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[versionControlAddress](AbstractQueryClient.md#versioncontroladdress)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L64)

## Accessors

### ansClient

• `get` **ansClient**(): [`AnsClient`](AnsClient.md)

Get the Abstract name service client.

#### Returns

[`AnsClient`](AnsClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:285](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L285)

___

### ansQueryClient

• `get` **ansQueryClient**(): [`AnsQueryClient`](AnsQueryClient.md)

Get the Abstract Name Service query client.

#### Returns

[`AnsQueryClient`](AnsQueryClient.md)

#### Inherited from

AbstractQueryClient.ansQueryClient

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:187](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L187)

___

### factoryClient

• `get` **factoryClient**(): [`FactoryClient`](FactoryClient.md)

Get the Abstract account factory client.

#### Returns

[`FactoryClient`](FactoryClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:307](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L307)

___

### factoryQueryClient

• `get` **factoryQueryClient**(): [`FactoryQueryClient`](FactoryQueryClient.md)

Get the Abstract account factory query client.

#### Returns

[`FactoryQueryClient`](FactoryQueryClient.md)

#### Inherited from

AbstractQueryClient.factoryQueryClient

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:180](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L180)

___

### vcClient

• `get` **vcClient**(): [`VcClient`](VcClient.md)

Get the version control client.

**`See`**

AbstractQueryClient#versionControlClient

#### Returns

[`VcClient`](VcClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:300](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L300)

___

### vcQueryClient

• `get` **vcQueryClient**(): [`VcQueryClient`](VcQueryClient.md)

Get the version control query client.

**`See`**

AbstractQueryClient#versionControlQueryClient

#### Returns

[`VcQueryClient`](VcQueryClient.md)

#### Inherited from

AbstractQueryClient.vcQueryClient

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:173](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L173)

___

### versionControlClient

• `get` **versionControlClient**(): [`VcClient`](VcClient.md)

Get the version control client.

#### Returns

[`VcClient`](VcClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:292](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L292)

___

### versionControlQueryClient

• `get` **versionControlQueryClient**(): [`VcQueryClient`](VcQueryClient.md)

Get the version control query client.

#### Returns

[`VcQueryClient`](VcQueryClient.md)

#### Inherited from

AbstractQueryClient.versionControlQueryClient

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:165](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L165)

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

[packages/abstractjs/src/clients/AbstractClient.ts:323](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L323)

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

[packages/abstractjs/src/clients/AbstractClient.ts:246](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L246)

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

[packages/abstractjs/src/clients/AbstractClient.ts:315](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L315)

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

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[loadAccount](AbstractQueryClient.md#loadaccount)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:196](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L196)

___

### versionControlMessageComposer

▸ **versionControlMessageComposer**(`sender?`): [`AnsHostMessageComposer`](AnsHostMessageComposer.md)

Get the version control message composer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sender?` | `string` | override the sender |

#### Returns

[`AnsHostMessageComposer`](AnsHostMessageComposer.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:331](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L331)

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

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[connect](AbstractQueryClient.md#connect)

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

#### Inherited from

[AbstractQueryClient](AbstractQueryClient.md).[connectToChain](AbstractQueryClient.md#connecttochain)

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:124](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L124)

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

[packages/abstractjs/src/clients/AbstractClient.ts:338](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractClient.ts#L338)
