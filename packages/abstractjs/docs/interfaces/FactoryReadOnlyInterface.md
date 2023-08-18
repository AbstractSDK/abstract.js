[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / FactoryReadOnlyInterface

# Interface: FactoryReadOnlyInterface

## Hierarchy

- **`FactoryReadOnlyInterface`**

  ↳ [`FactoryInterface`](FactoryInterface.md)

## Implemented by

- [`FactoryQueryClient`](../classes/FactoryQueryClient.md)

## Table of contents

### Properties

- [config](FactoryReadOnlyInterface.md#config)
- [contractAddress](FactoryReadOnlyInterface.md#contractaddress)
- [ownership](FactoryReadOnlyInterface.md#ownership)

## Properties

### config

• **config**: () => `Promise`<[`ConfigResponse`](FactoryTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](FactoryTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](FactoryTypes.ConfigResponse.md)\>

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:12](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L12)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:11](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L11)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](FactoryTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](FactoryTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](FactoryTypes.OwnershipForString.md)\>

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:13](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L13)
