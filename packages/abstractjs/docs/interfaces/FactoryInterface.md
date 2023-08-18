[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / FactoryInterface

# Interface: FactoryInterface

## Hierarchy

- [`FactoryReadOnlyInterface`](FactoryReadOnlyInterface.md)

  ↳ **`FactoryInterface`**

## Implemented by

- [`FactoryClient`](../classes/FactoryClient.md)

## Table of contents

### Properties

- [config](FactoryInterface.md#config)
- [contractAddress](FactoryInterface.md#contractaddress)
- [createAccount](FactoryInterface.md#createaccount)
- [ownership](FactoryInterface.md#ownership)
- [sender](FactoryInterface.md#sender)
- [updateConfig](FactoryInterface.md#updateconfig)
- [updateOwnership](FactoryInterface.md#updateownership)

## Properties

### config

• **config**: () => `Promise`<[`ConfigResponse`](FactoryTypes.ConfigResponse.md)\>

#### Type declaration

▸ (): `Promise`<[`ConfigResponse`](FactoryTypes.ConfigResponse.md)\>

##### Returns

`Promise`<[`ConfigResponse`](FactoryTypes.ConfigResponse.md)\>

#### Inherited from

[FactoryReadOnlyInterface](FactoryReadOnlyInterface.md).[config](FactoryReadOnlyInterface.md#config)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:12](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L12)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[FactoryReadOnlyInterface](FactoryReadOnlyInterface.md).[contractAddress](FactoryReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:38](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L38)

___

### createAccount

• **createAccount**: (`__namedParameters`: { `description?`: `string` ; `governance`: [`GovernanceDetailsForString`](../modules/FactoryTypes.md#governancedetailsforstring) ; `link?`: `string` ; `name`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description?` | `string` |
| › `governance` | [`GovernanceDetailsForString`](../modules/FactoryTypes.md#governancedetailsforstring) |
| › `link?` | `string` |
| › `name` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L49)

___

### ownership

• **ownership**: () => `Promise`<[`OwnershipForString`](FactoryTypes.OwnershipForString.md)\>

#### Type declaration

▸ (): `Promise`<[`OwnershipForString`](FactoryTypes.OwnershipForString.md)\>

##### Returns

`Promise`<[`OwnershipForString`](FactoryTypes.OwnershipForString.md)\>

#### Inherited from

[FactoryReadOnlyInterface](FactoryReadOnlyInterface.md).[ownership](FactoryReadOnlyInterface.md#ownership)

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:13](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L13)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:39](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L39)

___

### updateConfig

• **updateConfig**: (`__namedParameters`: { `ansHostContract?`: `string` ; `moduleFactoryAddress?`: `string` ; `versionControlContract?`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `ansHostContract?` | `string` |
| › `moduleFactoryAddress?` | `string` |
| › `versionControlContract?` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:40](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L40)

___

### updateOwnership

• **updateOwnership**: (`action`: [`Action`](../modules/FactoryTypes.md#action), `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `_funds?`: `Coin`[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`action`, `fee?`, `memo?`, `_funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../modules/FactoryTypes.md#action) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `_funds?` | `Coin`[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/native/factory/Factory.client.ts:60](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/native/factory/Factory.client.ts#L60)
