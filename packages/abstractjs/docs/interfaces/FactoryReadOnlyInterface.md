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

[packages/abstractjs/src/native/factory/Factory.client.ts:25](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L25)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:24](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L24)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](FactoryTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](FactoryTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](FactoryTypes.OwnershipForString.md)\>

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:26](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L26)
