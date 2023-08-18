[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / FactoryClient

# Class: FactoryClient

## Hierarchy

- [`FactoryQueryClient`](FactoryQueryClient.md)

  ↳ **`FactoryClient`**

## Implements

- [`FactoryInterface`](../interfaces/FactoryInterface.md)

## Table of contents

### Constructors

- [constructor](FactoryClient.md#constructor)

### Properties

- [client](FactoryClient.md#client)
- [contractAddress](FactoryClient.md#contractaddress)
- [sender](FactoryClient.md#sender)

### Methods

- [config](FactoryClient.md#config)
- [createAccount](FactoryClient.md#createaccount)
- [ownership](FactoryClient.md#ownership)
- [updateConfig](FactoryClient.md#updateconfig)
- [updateOwnership](FactoryClient.md#updateownership)

## Constructors

### constructor

• **new FactoryClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[FactoryQueryClient](FactoryQueryClient.md).[constructor](FactoryQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:95](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L95)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[FactoryQueryClient](FactoryQueryClient.md).[client](FactoryQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:91](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L91)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[FactoryInterface](../interfaces/FactoryInterface.md).[contractAddress](../interfaces/FactoryInterface.md#contractaddress)

#### Overrides

[FactoryQueryClient](FactoryQueryClient.md).[contractAddress](FactoryQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:93](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L93)

___

### sender

• **sender**: `string`

#### Implementation of

[FactoryInterface](../interfaces/FactoryInterface.md).[sender](../interfaces/FactoryInterface.md#sender)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:92](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L92)

## Methods

### config

▸ **config**(): `Promise`<[`ConfigResponse`](../interfaces/FactoryTypes.ConfigResponse.md)\>

#### Returns

`Promise`<[`ConfigResponse`](../interfaces/FactoryTypes.ConfigResponse.md)\>

#### Implementation of

FactoryInterface.config

#### Inherited from

[FactoryQueryClient](FactoryQueryClient.md).[config](FactoryQueryClient.md#config)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:39](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L39)

___

### createAccount

▸ **createAccount**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `description?` | `string` | `undefined` |
| › `governance` | [`GovernanceDetailsForString`](../modules/FactoryTypes.md#governancedetailsforstring) | `undefined` |
| › `link?` | `string` | `undefined` |
| › `name` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

FactoryInterface.createAccount

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:134](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L134)

___

### ownership

▸ **ownership**(): `Promise`<[`OwnershipForString`](../interfaces/FactoryTypes.OwnershipForString.md)\>

#### Returns

`Promise`<[`OwnershipForString`](../interfaces/FactoryTypes.OwnershipForString.md)\>

#### Implementation of

FactoryInterface.ownership

#### Inherited from

[FactoryQueryClient](FactoryQueryClient.md).[ownership](FactoryQueryClient.md#ownership)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:44](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L44)

___

### updateConfig

▸ **updateConfig**(`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `ansHostContract?` | `string` | `undefined` |
| › `moduleFactoryAddress?` | `string` | `undefined` |
| › `versionControlContract?` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

FactoryInterface.updateConfig

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:105](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L105)

___

### updateOwnership

▸ **updateOwnership**(`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `action` | [`Action`](../modules/FactoryTypes.md#action) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `_funds?` | `Coin`[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

FactoryInterface.updateOwnership

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:166](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/native/factory/Factory.client.ts#L166)
