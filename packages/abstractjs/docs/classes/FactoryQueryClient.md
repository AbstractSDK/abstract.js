[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / FactoryQueryClient

# Class: FactoryQueryClient

## Hierarchy

- **`FactoryQueryClient`**

  ↳ [`FactoryClient`](FactoryClient.md)

## Implements

- [`FactoryReadOnlyInterface`](../interfaces/FactoryReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](FactoryQueryClient.md#constructor)

### Properties

- [client](FactoryQueryClient.md#client)
- [contractAddress](FactoryQueryClient.md#contractaddress)

### Methods

- [config](FactoryQueryClient.md#config)
- [ownership](FactoryQueryClient.md#ownership)

## Constructors

### constructor

• **new FactoryQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:32](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L32)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:29](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L29)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[FactoryReadOnlyInterface](../interfaces/FactoryReadOnlyInterface.md).[contractAddress](../interfaces/FactoryReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:30](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L30)

## Methods

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/FactoryTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/FactoryTypes.ConfigResponse.md)\>

#### Implementation of

FactoryReadOnlyInterface.config

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:39](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L39)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/FactoryTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/FactoryTypes.OwnershipForString.md)\>

#### Implementation of

FactoryReadOnlyInterface.ownership

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:44](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L44)
