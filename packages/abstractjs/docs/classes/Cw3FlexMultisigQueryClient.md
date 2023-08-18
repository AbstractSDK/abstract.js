[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw3FlexMultisigQueryClient

# Class: Cw3FlexMultisigQueryClient

## Hierarchy

- **`Cw3FlexMultisigQueryClient`**

  ↳ [`Cw3FlexMultisigClient`](Cw3FlexMultisigClient.md)

## Implements

- [`Cw3FlexMultisigReadOnlyInterface`](../interfaces/Cw3FlexMultisigReadOnlyInterface.md)

## Table of contents

### Constructors

- [constructor](Cw3FlexMultisigQueryClient.md#constructor)

### Properties

- [client](Cw3FlexMultisigQueryClient.md#client)
- [contractAddress](Cw3FlexMultisigQueryClient.md#contractaddress)

### Methods

- [listProposals](Cw3FlexMultisigQueryClient.md#listproposals)
- [listVoters](Cw3FlexMultisigQueryClient.md#listvoters)
- [listVotes](Cw3FlexMultisigQueryClient.md#listvotes)
- [proposal](Cw3FlexMultisigQueryClient.md#proposal)
- [queryVote](Cw3FlexMultisigQueryClient.md#queryvote)
- [reverseProposals](Cw3FlexMultisigQueryClient.md#reverseproposals)
- [threshold](Cw3FlexMultisigQueryClient.md#threshold)
- [voter](Cw3FlexMultisigQueryClient.md#voter)

## Constructors

### constructor

• **new Cw3FlexMultisigQueryClient**(`client`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `CosmWasmClient` |
| `contractAddress` | `string` |

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:87](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L87)

## Properties

### client

• **client**: `CosmWasmClient`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:84](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L84)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw3FlexMultisigReadOnlyInterface](../interfaces/Cw3FlexMultisigReadOnlyInterface.md).[contractAddress](../interfaces/Cw3FlexMultisigReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:85](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L85)

## Methods

### listProposals

▸ **listProposals**(`«destructured»`): `Promise`<[`ListProposalsResponse`](../interfaces/Cw3FlexMultisigTypes.ListProposalsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `number` |

#### Returns

`Promise`<[`ListProposalsResponse`](../interfaces/Cw3FlexMultisigTypes.ListProposalsResponse.md)\>

#### Implementation of

Cw3FlexMultisigReadOnlyInterface.listProposals

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:112](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L112)

___

### listVoters

▸ **listVoters**(`«destructured»`): `Promise`<[`ListVotersResponse`](../interfaces/Cw3FlexMultisigTypes.ListVotersResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`ListVotersResponse`](../interfaces/Cw3FlexMultisigTypes.ListVotersResponse.md)\>

#### Implementation of

Cw3FlexMultisigReadOnlyInterface.listVoters

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:178](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L178)

___

### listVotes

▸ **listVotes**(`«destructured»`): `Promise`<[`ListVotesResponse`](../interfaces/Cw3FlexMultisigTypes.ListVotesResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `proposalId` | `number` |
| › `startAfter?` | `string` |

#### Returns

`Promise`<[`ListVotesResponse`](../interfaces/Cw3FlexMultisigTypes.ListVotesResponse.md)\>

#### Implementation of

Cw3FlexMultisigReadOnlyInterface.listVotes

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:154](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L154)

___

### proposal

▸ **proposal**(`«destructured»`): `Promise`<[`ProposalResponse`](../interfaces/Cw3FlexMultisigTypes.ProposalResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |

#### Returns

`Promise`<[`ProposalResponse`](../interfaces/Cw3FlexMultisigTypes.ProposalResponse.md)\>

#### Implementation of

Cw3FlexMultisigReadOnlyInterface.proposal

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:105](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L105)

___

### queryVote

▸ **queryVote**(`«destructured»`): `Promise`<[`VoteResponse`](../interfaces/Cw3FlexMultisigTypes.VoteResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| › `voter` | `string` |

#### Returns

`Promise`<[`VoteResponse`](../interfaces/Cw3FlexMultisigTypes.VoteResponse.md)\>

#### Implementation of

Cw3FlexMultisigReadOnlyInterface.queryVote

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:140](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L140)

___

### reverseProposals

▸ **reverseProposals**(`«destructured»`): `Promise`<[`ReverseProposalsResponse`](../interfaces/Cw3FlexMultisigTypes.ReverseProposalsResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startBefore?` | `number` |

#### Returns

`Promise`<[`ReverseProposalsResponse`](../interfaces/Cw3FlexMultisigTypes.ReverseProposalsResponse.md)\>

#### Implementation of

Cw3FlexMultisigReadOnlyInterface.reverseProposals

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:126](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L126)

___

### threshold

▸ **threshold**(): `Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

#### Returns

`Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

#### Implementation of

Cw3FlexMultisigReadOnlyInterface.threshold

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:100](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L100)

___

### voter

▸ **voter**(`«destructured»`): `Promise`<[`VoterResponse`](../interfaces/Cw3FlexMultisigTypes.VoterResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |

#### Returns

`Promise`<[`VoterResponse`](../interfaces/Cw3FlexMultisigTypes.VoterResponse.md)\>

#### Implementation of

Cw3FlexMultisigReadOnlyInterface.voter

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:171](https://github.com/Abstract-OS/abstract.js/blob/c46b309/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L171)
