[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20IcsReadOnlyInterface

# Interface: Cw20IcsReadOnlyInterface

## Hierarchy

- **`Cw20IcsReadOnlyInterface`**

  ↳ [`Cw20IcsInterface`](Cw20IcsInterface.md)

## Implemented by

- [`Cw20IcsQueryClient`](../classes/Cw20IcsQueryClient.md)

## Table of contents

### Properties

- [admin](Cw20IcsReadOnlyInterface.md#admin)
- [allowed](Cw20IcsReadOnlyInterface.md#allowed)
- [channel](Cw20IcsReadOnlyInterface.md#channel)
- [config](Cw20IcsReadOnlyInterface.md#config)
- [contractAddress](Cw20IcsReadOnlyInterface.md#contractaddress)
- [listAllowed](Cw20IcsReadOnlyInterface.md#listallowed)
- [listChannels](Cw20IcsReadOnlyInterface.md#listchannels)
- [port](Cw20IcsReadOnlyInterface.md#port)

## Properties

### admin

• **admin**: () => `Promise`<[`AdminResponse`](Cw20IcsTypes.AdminResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`AdminResponse`](Cw20IcsTypes.AdminResponse.md)\>

##### Returns

`Promise`<[`AdminResponse`](Cw20IcsTypes.AdminResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:38](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L38)

___

### allowed

• **allowed**: (`__namedParameters`: { `contract`: `string`  }) => `Promise`<[`AllowedResponse`](Cw20IcsTypes.AllowedResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`AllowedResponse`](Cw20IcsTypes.AllowedResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `contract` | `string` |

##### Returns

`Promise`<[`AllowedResponse`](Cw20IcsTypes.AllowedResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:39](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L39)

___

### channel

• **channel**: (`__namedParameters`: { `id`: `string`  }) => `Promise`<[`ChannelResponse`](Cw20IcsTypes.ChannelResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ChannelResponse`](Cw20IcsTypes.ChannelResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `id` | `string` |

##### Returns

`Promise`<[`ChannelResponse`](Cw20IcsTypes.ChannelResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:36](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L36)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](Cw20IcsTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](Cw20IcsTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](Cw20IcsTypes.ConfigResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:37](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L37)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:33](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L33)

___

### listAllowed

• **listAllowed**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`ListAllowedResponse`](Cw20IcsTypes.ListAllowedResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ListAllowedResponse`](Cw20IcsTypes.ListAllowedResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`ListAllowedResponse`](Cw20IcsTypes.ListAllowedResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:40](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L40)

___

### listChannels

• **listChannels**: () => `Promise`<[`ListChannelsResponse`](Cw20IcsTypes.ListChannelsResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ListChannelsResponse`](Cw20IcsTypes.ListChannelsResponse.md)\>

##### Returns

`Promise`<[`ListChannelsResponse`](Cw20IcsTypes.ListChannelsResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:35](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L35)

___

### port

• **port**: () => `Promise`<[`PortResponse`](Cw20IcsTypes.PortResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`PortResponse`](Cw20IcsTypes.PortResponse.md)\>

##### Returns

`Promise`<[`PortResponse`](Cw20IcsTypes.PortResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:34](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L34)
