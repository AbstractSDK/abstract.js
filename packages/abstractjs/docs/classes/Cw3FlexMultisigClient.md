[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / Cw3FlexMultisigClient

# Class: Cw3FlexMultisigClient

## Hierarchy

- [`Cw3FlexMultisigQueryClient`](Cw3FlexMultisigQueryClient.md)

  ↳ **`Cw3FlexMultisigClient`**

## Implements

- [`Cw3FlexMultisigInterface`](../interfaces/Cw3FlexMultisigInterface.md)

## Table of contents

### Constructors

- [constructor](Cw3FlexMultisigClient.md#constructor)

### Properties

- [client](Cw3FlexMultisigClient.md#client)
- [contractAddress](Cw3FlexMultisigClient.md#contractaddress)
- [sender](Cw3FlexMultisigClient.md#sender)

### Methods

- [close](Cw3FlexMultisigClient.md#close)
- [execute](Cw3FlexMultisigClient.md#execute)
- [listProposals](Cw3FlexMultisigClient.md#listproposals)
- [listVoters](Cw3FlexMultisigClient.md#listvoters)
- [listVotes](Cw3FlexMultisigClient.md#listvotes)
- [memberChangedHook](Cw3FlexMultisigClient.md#memberchangedhook)
- [proposal](Cw3FlexMultisigClient.md#proposal)
- [propose](Cw3FlexMultisigClient.md#propose)
- [queryVote](Cw3FlexMultisigClient.md#queryvote)
- [reverseProposals](Cw3FlexMultisigClient.md#reverseproposals)
- [threshold](Cw3FlexMultisigClient.md#threshold)
- [vote](Cw3FlexMultisigClient.md#vote)
- [voter](Cw3FlexMultisigClient.md#voter)

## Constructors

### constructor

• **new Cw3FlexMultisigClient**(`client`, `sender`, `contractAddress`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | `SigningCosmWasmClient` |
| `sender` | `string` |
| `contractAddress` | `string` |

#### Overrides

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[constructor](Cw3FlexMultisigQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:263](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L263)

## Properties

### client

• **client**: `SigningCosmWasmClient`

#### Overrides

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[client](Cw3FlexMultisigQueryClient.md#client)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:259](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L259)

___

### contractAddress

• **contractAddress**: `string`

#### Implementation of

[Cw3FlexMultisigInterface](../interfaces/Cw3FlexMultisigInterface.md).[contractAddress](../interfaces/Cw3FlexMultisigInterface.md#contractaddress)

#### Overrides

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[contractAddress](Cw3FlexMultisigQueryClient.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:261](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L261)

___

### sender

• **sender**: `string`

#### Implementation of

[Cw3FlexMultisigInterface](../interfaces/Cw3FlexMultisigInterface.md).[sender](../interfaces/Cw3FlexMultisigInterface.md#sender)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:260](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L260)

## Methods

### close

▸ **close**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `proposalId` | `number` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw3FlexMultisigInterface.close

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:356](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L356)

___

### execute

▸ **execute**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `proposalId` | `number` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw3FlexMultisigInterface.execute

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:333](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L333)

___

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

Cw3FlexMultisigInterface.listProposals

#### Inherited from

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[listProposals](Cw3FlexMultisigQueryClient.md#listproposals)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:112](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L112)

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

Cw3FlexMultisigInterface.listVoters

#### Inherited from

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[listVoters](Cw3FlexMultisigQueryClient.md#listvoters)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:178](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L178)

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

Cw3FlexMultisigInterface.listVotes

#### Inherited from

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[listVotes](Cw3FlexMultisigQueryClient.md#listvotes)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:154](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L154)

___

### memberChangedHook

▸ **memberChangedHook**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `diffs` | [`MemberDiff`](../interfaces/Cw3FlexMultisigTypes.MemberDiff.md)[] | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw3FlexMultisigInterface.memberChangedHook

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:379](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L379)

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

Cw3FlexMultisigInterface.proposal

#### Inherited from

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[proposal](Cw3FlexMultisigQueryClient.md#proposal)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:105](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L105)

___

### propose

▸ **propose**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `description` | `string` | `undefined` |
| › `latest?` | [`Expiration`](../modules/Cw3FlexMultisigTypes.md#expiration) | `undefined` |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/Cw3FlexMultisigTypes.md#cosmosmsgforempty)[] | `undefined` |
| › `title` | `string` | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw3FlexMultisigInterface.propose

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:275](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L275)

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

Cw3FlexMultisigInterface.queryVote

#### Inherited from

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[queryVote](Cw3FlexMultisigQueryClient.md#queryvote)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:140](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L140)

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

Cw3FlexMultisigInterface.reverseProposals

#### Inherited from

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[reverseProposals](Cw3FlexMultisigQueryClient.md#reverseproposals)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:126](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L126)

___

### threshold

▸ **threshold**(): `Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

#### Returns

`Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

#### Implementation of

Cw3FlexMultisigInterface.threshold

#### Inherited from

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[threshold](Cw3FlexMultisigQueryClient.md#threshold)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:100](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L100)

___

### vote

▸ **vote**(`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | `Object` | `undefined` |
| › `proposalId` | `number` | `undefined` |
| › `vote` | [`Vote`](../modules/Cw3FlexMultisigTypes.md#vote) | `undefined` |
| `fee` | `number` \| ``"auto"`` \| `StdFee` | `'auto'` |
| `memo?` | `string` | `undefined` |
| `funds?` | [`Coin`](../interfaces/Cw3FlexMultisigTypes.Coin.md)[] | `undefined` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Implementation of

Cw3FlexMultisigInterface.vote

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:307](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L307)

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

Cw3FlexMultisigInterface.voter

#### Inherited from

[Cw3FlexMultisigQueryClient](Cw3FlexMultisigQueryClient.md).[voter](Cw3FlexMultisigQueryClient.md#voter)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:171](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L171)
