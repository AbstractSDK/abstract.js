[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw20IcsInterface

# Interface: Cw20IcsInterface

## Hierarchy

- [`Cw20IcsReadOnlyInterface`](Cw20IcsReadOnlyInterface.md)

  ↳ **`Cw20IcsInterface`**

## Implemented by

- [`Cw20IcsClient`](../classes/Cw20IcsClient.md)

## Table of contents

### Properties

- [admin](Cw20IcsInterface.md#admin)
- [allow](Cw20IcsInterface.md#allow)
- [allowed](Cw20IcsInterface.md#allowed)
- [channel](Cw20IcsInterface.md#channel)
- [config](Cw20IcsInterface.md#config)
- [contractAddress](Cw20IcsInterface.md#contractaddress)
- [listAllowed](Cw20IcsInterface.md#listallowed)
- [listChannels](Cw20IcsInterface.md#listchannels)
- [port](Cw20IcsInterface.md#port)
- [receive](Cw20IcsInterface.md#receive)
- [sender](Cw20IcsInterface.md#sender)
- [transfer](Cw20IcsInterface.md#transfer)
- [updateAdmin](Cw20IcsInterface.md#updateadmin)

## Properties

### admin

• **admin**: () => `Promise`<[`AdminResponse`](Cw20IcsTypes.AdminResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`AdminResponse`](Cw20IcsTypes.AdminResponse.md)\>

##### Returns

`Promise`<[`AdminResponse`](Cw20IcsTypes.AdminResponse.md)\>

#### Inherited from

[Cw20IcsReadOnlyInterface](Cw20IcsReadOnlyInterface.md).[admin](Cw20IcsReadOnlyInterface.md#admin)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:38](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L38)

___

### allow

• **allow**: (`__namedParameters`: { `contract`: `string` ; `gasLimit?`: `number`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: readonly [`Coin`](Cw20IcsTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `contract` | `string` |
| › `gasLimit?` | `number` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | readonly [`Coin`](Cw20IcsTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:144](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L144)

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

#### Inherited from

[Cw20IcsReadOnlyInterface](Cw20IcsReadOnlyInterface.md).[allowed](Cw20IcsReadOnlyInterface.md#allowed)

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

#### Inherited from

[Cw20IcsReadOnlyInterface](Cw20IcsReadOnlyInterface.md).[channel](Cw20IcsReadOnlyInterface.md#channel)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:36](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L36)

___

### config

• **config**: () => `Promise`<[`ConfigResponse`](Cw20IcsTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](Cw20IcsTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](Cw20IcsTypes.ConfigResponse.md)\>

#### Inherited from

[Cw20IcsReadOnlyInterface](Cw20IcsReadOnlyInterface.md).[config](Cw20IcsReadOnlyInterface.md#config)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:37](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L37)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[Cw20IcsReadOnlyInterface](Cw20IcsReadOnlyInterface.md).[contractAddress](Cw20IcsReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:114](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L114)

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

#### Inherited from

[Cw20IcsReadOnlyInterface](Cw20IcsReadOnlyInterface.md).[listAllowed](Cw20IcsReadOnlyInterface.md#listallowed)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:40](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L40)

___

### listChannels

• **listChannels**: () => `Promise`<[`ListChannelsResponse`](Cw20IcsTypes.ListChannelsResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ListChannelsResponse`](Cw20IcsTypes.ListChannelsResponse.md)\>

##### Returns

`Promise`<[`ListChannelsResponse`](Cw20IcsTypes.ListChannelsResponse.md)\>

#### Inherited from

[Cw20IcsReadOnlyInterface](Cw20IcsReadOnlyInterface.md).[listChannels](Cw20IcsReadOnlyInterface.md#listchannels)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:35](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L35)

___

### port

• **port**: () => `Promise`<[`PortResponse`](Cw20IcsTypes.PortResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`PortResponse`](Cw20IcsTypes.PortResponse.md)\>

##### Returns

`Promise`<[`PortResponse`](Cw20IcsTypes.PortResponse.md)\>

#### Inherited from

[Cw20IcsReadOnlyInterface](Cw20IcsReadOnlyInterface.md).[port](Cw20IcsReadOnlyInterface.md#port)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:34](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L34)

___

### receive

• **receive**: (`__namedParameters`: { `amount`: `string` ; `msg`: `string` ; `sender`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: readonly [`Coin`](Cw20IcsTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `amount` | `string` |
| › `msg` | `string` |
| › `sender` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | readonly [`Coin`](Cw20IcsTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:116](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L116)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:115](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L115)

___

### transfer

• **transfer**: (`__namedParameters`: { `channel`: `string` ; `remoteAddress`: `string` ; `timeout?`: `number`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: readonly [`Coin`](Cw20IcsTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `channel` | `string` |
| › `remoteAddress` | `string` |
| › `timeout?` | `number` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | readonly [`Coin`](Cw20IcsTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:130](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L130)

___

### updateAdmin

• **updateAdmin**: (`__namedParameters`: { `admin`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: readonly [`Coin`](Cw20IcsTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `admin` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | readonly [`Coin`](Cw20IcsTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw20Ics.client.ts:156](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw20Ics.client.ts#L156)
