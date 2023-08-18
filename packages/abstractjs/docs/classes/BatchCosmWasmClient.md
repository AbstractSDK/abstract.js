[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / BatchCosmWasmClient

# Class: BatchCosmWasmClient

BatchCosmWasmClient is an extension of CosmWasmClient that allows batch processing of rpc requests.

## Hierarchy

- `CosmWasmClient`

  ↳ **`BatchCosmWasmClient`**

## Table of contents

### Constructors

- [constructor](BatchCosmWasmClient.md#constructor)

### Properties

- [\_batchSizeLimit](BatchCosmWasmClient.md#_batchsizelimit)
- [\_dispatchInterval](BatchCosmWasmClient.md#_dispatchinterval)

### Accessors

- [batchSizeLimit](BatchCosmWasmClient.md#batchsizelimit)
- [dispatchInterval](BatchCosmWasmClient.md#dispatchinterval)

### Methods

- [broadcastTx](BatchCosmWasmClient.md#broadcasttx)
- [broadcastTxSync](BatchCosmWasmClient.md#broadcasttxsync)
- [disconnect](BatchCosmWasmClient.md#disconnect)
- [forceGetQueryClient](BatchCosmWasmClient.md#forcegetqueryclient)
- [forceGetTmClient](BatchCosmWasmClient.md#forcegettmclient)
- [getAccount](BatchCosmWasmClient.md#getaccount)
- [getBalance](BatchCosmWasmClient.md#getbalance)
- [getBlock](BatchCosmWasmClient.md#getblock)
- [getChainId](BatchCosmWasmClient.md#getchainid)
- [getCodeDetails](BatchCosmWasmClient.md#getcodedetails)
- [getCodes](BatchCosmWasmClient.md#getcodes)
- [getContract](BatchCosmWasmClient.md#getcontract)
- [getContractCodeHistory](BatchCosmWasmClient.md#getcontractcodehistory)
- [getContracts](BatchCosmWasmClient.md#getcontracts)
- [getContractsByCreator](BatchCosmWasmClient.md#getcontractsbycreator)
- [getHeight](BatchCosmWasmClient.md#getheight)
- [getQueryClient](BatchCosmWasmClient.md#getqueryclient)
- [getSequence](BatchCosmWasmClient.md#getsequence)
- [getTmClient](BatchCosmWasmClient.md#gettmclient)
- [getTx](BatchCosmWasmClient.md#gettx)
- [queryContractRaw](BatchCosmWasmClient.md#querycontractraw)
- [queryContractSmart](BatchCosmWasmClient.md#querycontractsmart)
- [searchTx](BatchCosmWasmClient.md#searchtx)
- [connect](BatchCosmWasmClient.md#connect)
- [create](BatchCosmWasmClient.md#create)

## Constructors

### constructor

• **new BatchCosmWasmClient**(`tmClient`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tmClient` | `undefined` \| `Tendermint34Client` |
| `options?` | `BatchCosmWasmClientOptions` |

#### Overrides

CosmWasmClient.constructor

#### Defined in

packages/cosmwasm/lib/BatchCosmWasmClient.d.ts:14

## Properties

### \_batchSizeLimit

• `Private` `Readonly` **\_batchSizeLimit**: `any`

#### Defined in

packages/cosmwasm/lib/BatchCosmWasmClient.d.ts:12

___

### \_dispatchInterval

• `Private` `Readonly` **\_dispatchInterval**: `any`

#### Defined in

packages/cosmwasm/lib/BatchCosmWasmClient.d.ts:13

## Accessors

### batchSizeLimit

• `get` **batchSizeLimit**(): `number`

Get the batch size limit.

#### Returns

`number`

The batch size limit.

#### Defined in

packages/cosmwasm/lib/BatchCosmWasmClient.d.ts:26

___

### dispatchInterval

• `get` **dispatchInterval**(): `number`

Get the dispatch interval.

#### Returns

`number`

The dispatch interval.

#### Defined in

packages/cosmwasm/lib/BatchCosmWasmClient.d.ts:31

## Methods

### broadcastTx

▸ **broadcastTx**(`tx`, `timeoutMs?`, `pollIntervalMs?`): `Promise`<`DeliverTxResponse`\>

Broadcasts a signed transaction to the network and monitors its inclusion in a block.

If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
an error is thrown.

If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.

If the transaction is included in a block, a `DeliverTxResponse` is returned. The caller then
usually needs to check for execution success or failure.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |
| `timeoutMs?` | `number` |
| `pollIntervalMs?` | `number` |

#### Returns

`Promise`<`DeliverTxResponse`\>

#### Inherited from

CosmWasmClient.broadcastTx

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:83

___

### broadcastTxSync

▸ **broadcastTxSync**(`tx`): `Promise`<`string`\>

Broadcasts a signed transaction to the network without monitoring it.

If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
an error is thrown.

If the transaction is broadcasted, a `string` containing the hash of the transaction is returned. The caller then
usually needs to check if the transaction was included in a block and was successful.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | `Uint8Array` |

#### Returns

`Promise`<`string`\>

Returns the hash of the transaction

#### Inherited from

CosmWasmClient.broadcastTxSync

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:95

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Inherited from

CosmWasmClient.disconnect

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:71

___

### forceGetQueryClient

▸ `Protected` **forceGetQueryClient**(): `QueryClient` & `AuthExtension` & `BankExtension` & `TxExtension` & `WasmExtension`

#### Returns

`QueryClient` & `AuthExtension` & `BankExtension` & `TxExtension` & `WasmExtension`

#### Inherited from

CosmWasmClient.forceGetQueryClient

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:62

___

### forceGetTmClient

▸ `Protected` **forceGetTmClient**(): `TendermintClient`

#### Returns

`TendermintClient`

#### Inherited from

CosmWasmClient.forceGetTmClient

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:60

___

### getAccount

▸ **getAccount**(`searchAddress`): `Promise`<``null`` \| `Account`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `searchAddress` | `string` |

#### Returns

`Promise`<``null`` \| `Account`\>

#### Inherited from

CosmWasmClient.getAccount

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:65

___

### getBalance

▸ **getBalance**(`address`, `searchDenom`): `Promise`<`Coin`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `searchDenom` | `string` |

#### Returns

`Promise`<`Coin`\>

#### Inherited from

CosmWasmClient.getBalance

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:68

___

### getBlock

▸ **getBlock**(`height?`): `Promise`<`Block`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `height?` | `number` |

#### Returns

`Promise`<`Block`\>

#### Inherited from

CosmWasmClient.getBlock

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:67

___

### getChainId

▸ **getChainId**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

CosmWasmClient.getChainId

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:63

___

### getCodeDetails

▸ **getCodeDetails**(`codeId`): `Promise`<`CodeDetails`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeId` | `number` |

#### Returns

`Promise`<`CodeDetails`\>

#### Inherited from

CosmWasmClient.getCodeDetails

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:103

___

### getCodes

▸ **getCodes**(): `Promise`<readonly `Code`[]\>

getCodes() returns all codes and is just looping through all pagination pages.

This is potentially inefficient and advanced apps should consider creating
their own query client to handle pagination together with the app's screens.

#### Returns

`Promise`<readonly `Code`[]\>

#### Inherited from

CosmWasmClient.getCodes

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:102

___

### getContract

▸ **getContract**(`address`): `Promise`<`Contract`\>

Throws an error if no contract was found at the address

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

CosmWasmClient.getContract

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:119

___

### getContractCodeHistory

▸ **getContractCodeHistory**(`address`): `Promise`<readonly `ContractCodeHistoryEntry`[]\>

Throws an error if no contract was found at the address

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<readonly `ContractCodeHistoryEntry`[]\>

#### Inherited from

CosmWasmClient.getContractCodeHistory

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:123

___

### getContracts

▸ **getContracts**(`codeId`): `Promise`<readonly `string`[]\>

getContracts() returns all contract instances for one code and is just looping through all pagination pages.

This is potentially inefficient and advanced apps should consider creating
their own query client to handle pagination together with the app's screens.

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeId` | `number` |

#### Returns

`Promise`<readonly `string`[]\>

#### Inherited from

CosmWasmClient.getContracts

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:110

___

### getContractsByCreator

▸ **getContractsByCreator**(`creator`): `Promise`<`string`[]\>

Returns a list of contract addresses created by the given creator.
This just loops through all pagination pages.

#### Parameters

| Name | Type |
| :------ | :------ |
| `creator` | `string` |

#### Returns

`Promise`<`string`[]\>

#### Inherited from

CosmWasmClient.getContractsByCreator

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:115

___

### getHeight

▸ **getHeight**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Inherited from

CosmWasmClient.getHeight

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:64

___

### getQueryClient

▸ `Protected` **getQueryClient**(): `undefined` \| `QueryClient` & `AuthExtension` & `BankExtension` & `TxExtension` & `WasmExtension`

#### Returns

`undefined` \| `QueryClient` & `AuthExtension` & `BankExtension` & `TxExtension` & `WasmExtension`

#### Inherited from

CosmWasmClient.getQueryClient

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:61

___

### getSequence

▸ **getSequence**(`address`): `Promise`<`SequenceResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<`SequenceResponse`\>

#### Inherited from

CosmWasmClient.getSequence

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:66

___

### getTmClient

▸ `Protected` **getTmClient**(): `undefined` \| `TendermintClient`

#### Returns

`undefined` \| `TendermintClient`

#### Inherited from

CosmWasmClient.getTmClient

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:59

___

### getTx

▸ **getTx**(`id`): `Promise`<``null`` \| `IndexedTx`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<``null`` \| `IndexedTx`\>

#### Inherited from

CosmWasmClient.getTx

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:69

___

### queryContractRaw

▸ **queryContractRaw**(`address`, `key`): `Promise`<``null`` \| `Uint8Array`\>

Returns the data at the key if present (raw contract dependent storage data)
or null if no data at this key.

Promise is rejected when contract does not exist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `key` | `Uint8Array` |

#### Returns

`Promise`<``null`` \| `Uint8Array`\>

#### Inherited from

CosmWasmClient.queryContractRaw

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:130

___

### queryContractSmart

▸ **queryContractSmart**(`address`, `queryMsg`): `Promise`<`any`\>

Makes a smart query on the contract, returns the parsed JSON document.

Promise is rejected when contract does not exist.
Promise is rejected for invalid query format.
Promise is rejected for invalid response format.

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `queryMsg` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

CosmWasmClient.queryContractSmart

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:138

___

### searchTx

▸ **searchTx**(`query`): `Promise`<`IndexedTx`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `SearchTxQuery` |

#### Returns

`Promise`<`IndexedTx`[]\>

#### Inherited from

CosmWasmClient.searchTx

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:70

___

### connect

▸ `Static` **connect**(`endpoint`, `options?`): `Promise`<`CosmWasmClient`\>

Connect to a endpoint with a new BatchCosmWasmClient.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `endpoint` | `string` \| `HttpEndpoint` | The endpoint to connect to. |
| `options?` | `BatchCosmWasmClientOptions` | The options for the HTTP Batch Client. |

#### Returns

`Promise`<`CosmWasmClient`\>

The new BatchCosmWasmClient.

#### Overrides

CosmWasmClient.connect

#### Defined in

packages/cosmwasm/lib/BatchCosmWasmClient.d.ts:21

___

### create

▸ `Static` **create**(`tmClient`): `Promise`<`CosmWasmClient`\>

Creates an instance from a manually created Tendermint client.
Use this to use `Tendermint37Client` instead of `Tendermint34Client`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tmClient` | `TendermintClient` |

#### Returns

`Promise`<`CosmWasmClient`\>

#### Inherited from

CosmWasmClient.create

#### Defined in

node_modules/.pnpm/@cosmjs+cosmwasm-stargate@0.31.0/node_modules/@cosmjs/cosmwasm-stargate/build/cosmwasmclient.d.ts:57
