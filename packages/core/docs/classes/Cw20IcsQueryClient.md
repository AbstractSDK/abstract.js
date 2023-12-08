[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw20IcsQueryClient

# Class: Cw20IcsQueryClient

## Hierarchy

- **`Cw20IcsQueryClient`**

  ↳ [`Cw20IcsClient`](Cw20IcsClient.md)

## Implements

- [`Cw20IcsReadOnlyInterface`](../interfaces/Cw20IcsReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](Cw20IcsQueryClient.md#constructor)

### Properties

- [client](Cw20IcsQueryClient.md#client)
- [contractAddress](Cw20IcsQueryClient.md#contractaddress)

### Methods

- [admin](Cw20IcsQueryClient.md#admin)
- [allowed](Cw20IcsQueryClient.md#allowed)
- [channel](Cw20IcsQueryClient.md#channel)
- [config](Cw20IcsQueryClient.md#config)
- [listAllowed](Cw20IcsQueryClient.md#listallowed)
- [listChannels](Cw20IcsQueryClient.md#listchannels)
- [port](Cw20IcsQueryClient.md#port)

## Constructors

### constructor

• **new Cw20IcsQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:52](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L52)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L49)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw20IcsReadOnlyInterface](../interfaces/Cw20IcsReadOnlyInterface.md).[contractAddress](../interfaces/Cw20IcsReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:50](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L50)

## Methods

### admin

▸ **admin**(): `Promise`<[`AdminResponse`](../interfaces/Cw20IcsTypes.AdminResponse.md)\>

#### Returns

`Promise`<[`AdminResponse`](../interfaces/Cw20IcsTypes.AdminResponse.md)\>

#### Implementation of

Cw20IcsReadOnlyInterface.admin

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:86](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L86)

___

### allowed

▸ **allowed**(`«destructured»`): `Promise`<[`AllowedResponse`](../interfaces/Cw20IcsTypes.AllowedResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `contract` | `string` |

#### Returns

`Promise`<[`AllowedResponse`](../interfaces/Cw20IcsTypes.AllowedResponse.md)\>

#### Implementation of

Cw20IcsReadOnlyInterface.allowed

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:91](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L91)

___

### channel

▸ **channel**(`«destructured»`): `Promise`<[`ChannelResponse`](../interfaces/Cw20IcsTypes.ChannelResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |

#### Returns

`Promise`<[`ChannelResponse`](../interfaces/Cw20IcsTypes.ChannelResponse.md)\>

#### Implementation of

Cw20IcsReadOnlyInterface.channel

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L74)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/Cw20IcsTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/Cw20IcsTypes.ConfigResponse.md)\>

#### Implementation of

Cw20IcsReadOnlyInterface.config

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:81](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L81)

___

### listAllowed

▸ **listAllowed**(`«destructured»`): `Promise`<[`ListAllowedResponse`](../interfaces/Cw20IcsTypes.ListAllowedResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`ListAllowedResponse`](../interfaces/Cw20IcsTypes.ListAllowedResponse.md)\>

#### Implementation of

Cw20IcsReadOnlyInterface.listAllowed

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:98](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L98)

___

### listChannels

▸ **listChannels**(): `Promise`<[`ListChannelsResponse`](../interfaces/Cw20IcsTypes.ListChannelsResponse.md)\>

#### Returns

`Promise`<[`ListChannelsResponse`](../interfaces/Cw20IcsTypes.ListChannelsResponse.md)\>

#### Implementation of

Cw20IcsReadOnlyInterface.listChannels

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:69](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L69)

___

### port

▸ **port**(): `Promise`<[`PortResponse`](../interfaces/Cw20IcsTypes.PortResponse.md)\>

#### Returns

`Promise`<[`PortResponse`](../interfaces/Cw20IcsTypes.PortResponse.md)\>

#### Implementation of

Cw20IcsReadOnlyInterface.port

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L64)
