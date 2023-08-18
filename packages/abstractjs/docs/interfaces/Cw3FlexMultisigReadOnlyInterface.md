[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw3FlexMultisigReadOnlyInterface

# Interface: Cw3FlexMultisigReadOnlyInterface

## Hierarchy

- **`Cw3FlexMultisigReadOnlyInterface`**

  ↳ [`Cw3FlexMultisigInterface`](Cw3FlexMultisigInterface.md)

## Implemented by

- [`Cw3FlexMultisigQueryClient`](../classes/Cw3FlexMultisigQueryClient.md)

## Table of contents

### Properties

- [contractAddress](Cw3FlexMultisigReadOnlyInterface.md#contractaddress)
- [listProposals](Cw3FlexMultisigReadOnlyInterface.md#listproposals)
- [listVoters](Cw3FlexMultisigReadOnlyInterface.md#listvoters)
- [listVotes](Cw3FlexMultisigReadOnlyInterface.md#listvotes)
- [proposal](Cw3FlexMultisigReadOnlyInterface.md#proposal)
- [queryVote](Cw3FlexMultisigReadOnlyInterface.md#queryvote)
- [reverseProposals](Cw3FlexMultisigReadOnlyInterface.md#reverseproposals)
- [threshold](Cw3FlexMultisigReadOnlyInterface.md#threshold)
- [voter](Cw3FlexMultisigReadOnlyInterface.md#voter)

## Properties

### contractAddress

• **contractAddress**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:47](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L47)

___

### listProposals

• **listProposals**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `number`  }) => `Promise`<[`ListProposalsResponse`](Cw3FlexMultisigTypes.ListProposalsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ListProposalsResponse`](Cw3FlexMultisigTypes.ListProposalsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `number` |

##### Returns

`Promise`<[`ListProposalsResponse`](Cw3FlexMultisigTypes.ListProposalsResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:50](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L50)

___

### listVoters

• **listVoters**: (`__namedParameters`: { `limit?`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`ListVotersResponse`](Cw3FlexMultisigTypes.ListVotersResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ListVotersResponse`](Cw3FlexMultisigTypes.ListVotersResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`ListVotersResponse`](Cw3FlexMultisigTypes.ListVotersResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:75](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L75)

___

### listVotes

• **listVotes**: (`__namedParameters`: { `limit?`: `number` ; `proposalId`: `number` ; `startAfter?`: `string`  }) => `Promise`<[`ListVotesResponse`](Cw3FlexMultisigTypes.ListVotesResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ListVotesResponse`](Cw3FlexMultisigTypes.ListVotesResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `proposalId` | `number` |
| › `startAfter?` | `string` |

##### Returns

`Promise`<[`ListVotesResponse`](Cw3FlexMultisigTypes.ListVotesResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:65](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L65)

___

### proposal

• **proposal**: (`__namedParameters`: { `proposalId`: `number`  }) => `Promise`<[`ProposalResponse`](Cw3FlexMultisigTypes.ProposalResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ProposalResponse`](Cw3FlexMultisigTypes.ProposalResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |

##### Returns

`Promise`<[`ProposalResponse`](Cw3FlexMultisigTypes.ProposalResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L49)

___

### queryVote

• **queryVote**: (`__namedParameters`: { `proposalId`: `number` ; `voter`: `string`  }) => `Promise`<[`VoteResponse`](Cw3FlexMultisigTypes.VoteResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`VoteResponse`](Cw3FlexMultisigTypes.VoteResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| › `voter` | `string` |

##### Returns

`Promise`<[`VoteResponse`](Cw3FlexMultisigTypes.VoteResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L64)

___

### reverseProposals

• **reverseProposals**: (`__namedParameters`: { `limit?`: `number` ; `startBefore?`: `number`  }) => `Promise`<[`ReverseProposalsResponse`](Cw3FlexMultisigTypes.ReverseProposalsResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`ReverseProposalsResponse`](Cw3FlexMultisigTypes.ReverseProposalsResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `limit?` | `number` |
| › `startBefore?` | `number` |

##### Returns

`Promise`<[`ReverseProposalsResponse`](Cw3FlexMultisigTypes.ReverseProposalsResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:57](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L57)

___

### threshold

• **threshold**: () => `Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

#### Type declaration

▸ (): `Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

##### Returns

`Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:48](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L48)

___

### voter

• **voter**: (`__namedParameters`: { `address`: `string`  }) => `Promise`<[`VoterResponse`](Cw3FlexMultisigTypes.VoterResponse.md)\>

#### Type declaration

▸ (`«destructured»`): `Promise`<[`VoterResponse`](Cw3FlexMultisigTypes.VoterResponse.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |

##### Returns

`Promise`<[`VoterResponse`](Cw3FlexMultisigTypes.VoterResponse.md)\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L74)
