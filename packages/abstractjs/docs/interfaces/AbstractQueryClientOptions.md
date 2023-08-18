[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AbstractQueryClientOptions

# Interface: AbstractQueryClientOptions

Options for the [AbstractQueryClient](../classes/AbstractQueryClient.md)

**`Property`**

Whether to use the [BatchCosmWasmClient](../classes/BatchCosmWasmClient.md) instead of the CosmWasmClient.

**`Property`**

Override the API URL for accessing Abstract.

**`Property`**

Options for the [BatchCosmWasmClient](../classes/BatchCosmWasmClient.md).

**`Property`**

The RPC URL to use for the CosmWasmClient.

## Table of contents

### Properties

- [batchClientOptions](AbstractQueryClientOptions.md#batchclientoptions)
- [overrideApiUrl](AbstractQueryClientOptions.md#overrideapiurl)
- [rpcUrl](AbstractQueryClientOptions.md#rpcurl)
- [useBatchClient](AbstractQueryClientOptions.md#usebatchclient)

## Properties

### batchClientOptions

• `Optional` **batchClientOptions**: `BatchCosmWasmClientOptions`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:63](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L63)

___

### overrideApiUrl

• `Optional` **overrideApiUrl**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:62](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L62)

___

### rpcUrl

• `Optional` **rpcUrl**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:64](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L64)

___

### useBatchClient

• `Optional` **useBatchClient**: `boolean`

#### Defined in

[packages/abstractjs/src/clients/AbstractClient.ts:61](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/clients/AbstractClient.ts#L61)
