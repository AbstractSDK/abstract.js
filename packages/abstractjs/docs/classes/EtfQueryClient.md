[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / EtfQueryClient

# Class: EtfQueryClient

## Hierarchy

- **`EtfQueryClient`**

  ↳ [`EtfClient`](EtfClient.md)

## Implements

- [`EtfReadOnlyInterface`](../interfaces/EtfReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](EtfQueryClient.md#constructor)

### Properties

- [client](EtfQueryClient.md#client)
- [contractAddress](EtfQueryClient.md#contractaddress)

### Methods

- [configValidity](EtfQueryClient.md#configvalidity)
- [state](EtfQueryClient.md#state)

## Constructors

### constructor

• **new EtfQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:38](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L38)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:35](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L35)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[EtfReadOnlyInterface](../interfaces/EtfReadOnlyInterface.md).[contractAddress](../interfaces/EtfReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:36](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L36)

## Methods

### configValidity

▸ **configValidity**(): `Promise`<[`ConfigValidityResponse`](../interfaces/EtfTypes.ConfigValidityResponse.md)\>

#### Returns

`Promise`<[`ConfigValidityResponse`](../interfaces/EtfTypes.ConfigValidityResponse.md)\>

#### Implementation of

EtfReadOnlyInterface.configValidity

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:49](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L49)

___

### state

▸ **state**(): `Promise`<[`StateResponse`](../interfaces/EtfTypes.StateResponse.md)\>

#### Returns

`Promise`<[`StateResponse`](../interfaces/EtfTypes.StateResponse.md)\>

#### Implementation of

EtfReadOnlyInterface.state

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:44](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L44)
