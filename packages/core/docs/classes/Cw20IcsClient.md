[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw20IcsClient

# Class: Cw20IcsClient

## Hierarchy

- [`Cw20IcsQueryClient`](Cw20IcsQueryClient.md)

  ↳ **`Cw20IcsClient`**

## Implements

- [`Cw20IcsInterface`](../interfaces/Cw20IcsInterface.md)

## Table of contents

### Constructors

- [constructor](Cw20IcsClient.md#constructor)

### Properties

- [client](Cw20IcsClient.md#client)
- [contractAddress](Cw20IcsClient.md#contractaddress)
- [sender](Cw20IcsClient.md#sender)

### Methods

- [admin](Cw20IcsClient.md#admin)
- [allow](Cw20IcsClient.md#allow)
- [allowed](Cw20IcsClient.md#allowed)
- [channel](Cw20IcsClient.md#channel)
- [config](Cw20IcsClient.md#config)
- [listAllowed](Cw20IcsClient.md#listallowed)
- [listChannels](Cw20IcsClient.md#listchannels)
- [port](Cw20IcsClient.md#port)
- [receive](Cw20IcsClient.md#receive)
- [transfer](Cw20IcsClient.md#transfer)
- [updateAdmin](Cw20IcsClient.md#updateadmin)

## Constructors

### constructor

• **new Cw20IcsClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[constructor](Cw20IcsQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:172](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L172)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[client](Cw20IcsQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:168](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L168)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw20IcsInterface](../interfaces/Cw20IcsInterface.md).[contractAddress](../interfaces/Cw20IcsInterface.md#contractaddress)

#### Overrides

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[contractAddress](Cw20IcsQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:170](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L170)

___

### sender

• **sender**: `string`

#### Implementation of

[Cw20IcsInterface](../interfaces/Cw20IcsInterface.md).[sender](../interfaces/Cw20IcsInterface.md#sender)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:169](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L169)

## Methods

### admin

▸ **admin**(): `Promise`<[`AdminResponse`](../interfaces/Cw20IcsTypes.AdminResponse.md)\>

#### Returns

`Promise`<[`AdminResponse`](../interfaces/Cw20IcsTypes.AdminResponse.md)\>

#### Implementation of

Cw20IcsInterface.admin

#### Inherited from

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[admin](Cw20IcsQueryClient.md#admin)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:86](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L86)

___

### allow

▸ **allow**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `contract` | `string` | `undefined` |
| › `gasLimit?` | `number` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | readonly [`Coin`](../interfaces/Cw20IcsTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20IcsInterface.allow

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:241](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L241)

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

Cw20IcsInterface.allowed

#### Inherited from

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[allowed](Cw20IcsQueryClient.md#allowed)

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

Cw20IcsInterface.channel

#### Inherited from

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[channel](Cw20IcsQueryClient.md#channel)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L74)

___

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/Cw20IcsTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/Cw20IcsTypes.ConfigResponse.md)\>

#### Implementation of

Cw20IcsInterface.config

#### Inherited from

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[config](Cw20IcsQueryClient.md#config)

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

Cw20IcsInterface.listAllowed

#### Inherited from

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[listAllowed](Cw20IcsQueryClient.md#listallowed)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:98](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L98)

___

### listChannels

▸ **listChannels**(): `Promise`<[`ListChannelsResponse`](../interfaces/Cw20IcsTypes.ListChannelsResponse.md)\>

#### Returns

`Promise`<[`ListChannelsResponse`](../interfaces/Cw20IcsTypes.ListChannelsResponse.md)\>

#### Implementation of

Cw20IcsInterface.listChannels

#### Inherited from

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[listChannels](Cw20IcsQueryClient.md#listchannels)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:69](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L69)

___

### port

▸ **port**(): `Promise`<[`PortResponse`](../interfaces/Cw20IcsTypes.PortResponse.md)\>

#### Returns

`Promise`<[`PortResponse`](../interfaces/Cw20IcsTypes.PortResponse.md)\>

#### Implementation of

Cw20IcsInterface.port

#### Inherited from

[Cw20IcsQueryClient](Cw20IcsQueryClient.md).[port](Cw20IcsQueryClient.md#port)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L64)

___

### receive

▸ **receive**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `amount` | `string` | `undefined` |
| › `msg` | `string` | `undefined` |
| › `sender` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | readonly [`Coin`](../interfaces/Cw20IcsTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20IcsInterface.receive

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:183](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L183)

___

### transfer

▸ **transfer**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `channel` | `string` | `undefined` |
| › `remoteAddress` | `string` | `undefined` |
| › `timeout?` | `number` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | readonly [`Coin`](../interfaces/Cw20IcsTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20IcsInterface.transfer

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:212](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L212)

___

### updateAdmin

▸ **updateAdmin**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `admin` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | readonly [`Coin`](../interfaces/Cw20IcsTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw20IcsInterface.updateAdmin

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:267](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L267)
