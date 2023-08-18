[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / EtfReadOnlyInterface

# Interface: EtfReadOnlyInterface

## Hierarchy

- **`EtfReadOnlyInterface`**

  ↳ [`EtfInterface`](EtfInterface.md)

## Implemented by

- [`EtfQueryClient`](../classes/EtfQueryClient.md)

## Table of contents

### Properties

- [configValidity](EtfReadOnlyInterface.md#configvalidity)
- [contractAddress](EtfReadOnlyInterface.md#contractaddress)
- [state](EtfReadOnlyInterface.md#state)

## Properties

### configValidity

• **configValidity**: () => `Promise`<[`ConfigValidityResponse`](EtfTypes.ConfigValidityResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigValidityResponse`](EtfTypes.ConfigValidityResponse.md)\>

##### Returns

`Promise`<[`ConfigValidityResponse`](EtfTypes.ConfigValidityResponse.md)\>

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:32](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L32)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:30](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L30)

___

### state

• **state**: () => `Promise`<[`StateResponse`](EtfTypes.StateResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`StateResponse`](EtfTypes.StateResponse.md)\>

##### Returns

`Promise`<[`StateResponse`](EtfTypes.StateResponse.md)\>

#### Defined in

[packages/abstractjs/src/modules/apps/etf/Etf.client.ts:31](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/etf/Etf.client.ts#L31)
