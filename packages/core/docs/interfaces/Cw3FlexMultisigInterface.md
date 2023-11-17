[@abstract-money/core](../README.md) / [Exports](../modules.md) / Cw3FlexMultisigInterface

# Interface: Cw3FlexMultisigInterface

## Hierarchy

- [`Cw3FlexMultisigReadOnlyInterface`](Cw3FlexMultisigReadOnlyInterface.md)

  ↳ **`Cw3FlexMultisigInterface`**

## Implemented by

- [`Cw3FlexMultisigClient`](../classes/Cw3FlexMultisigClient.md)

## Table of contents

### Properties

- [close](Cw3FlexMultisigInterface.md#close)
- [contractAddress](Cw3FlexMultisigInterface.md#contractaddress)
- [execute](Cw3FlexMultisigInterface.md#execute)
- [listProposals](Cw3FlexMultisigInterface.md#listproposals)
- [listVoters](Cw3FlexMultisigInterface.md#listvoters)
- [listVotes](Cw3FlexMultisigInterface.md#listvotes)
- [memberChangedHook](Cw3FlexMultisigInterface.md#memberchangedhook)
- [proposal](Cw3FlexMultisigInterface.md#proposal)
- [propose](Cw3FlexMultisigInterface.md#propose)
- [queryVote](Cw3FlexMultisigInterface.md#queryvote)
- [reverseProposals](Cw3FlexMultisigInterface.md#reverseproposals)
- [sender](Cw3FlexMultisigInterface.md#sender)
- [threshold](Cw3FlexMultisigInterface.md#threshold)
- [vote](Cw3FlexMultisigInterface.md#vote)
- [voter](Cw3FlexMultisigInterface.md#voter)

## Properties

### close

• **close**: (`__namedParameters`: { `proposalId`: `number`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:234](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L234)

___

### contractAddress

• **contractAddress**: `string`

#### Overrides

[Cw3FlexMultisigReadOnlyInterface](Cw3FlexMultisigReadOnlyInterface.md).[contractAddress](Cw3FlexMultisigReadOnlyInterface.md#contractaddress)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:194](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L194)

___

### execute

• **execute**: (`__namedParameters`: { `proposalId`: `number`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:224](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L224)

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

#### Inherited from

[Cw3FlexMultisigReadOnlyInterface](Cw3FlexMultisigReadOnlyInterface.md).[listProposals](Cw3FlexMultisigReadOnlyInterface.md#listproposals)

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

#### Inherited from

[Cw3FlexMultisigReadOnlyInterface](Cw3FlexMultisigReadOnlyInterface.md).[listVoters](Cw3FlexMultisigReadOnlyInterface.md#listvoters)

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

#### Inherited from

[Cw3FlexMultisigReadOnlyInterface](Cw3FlexMultisigReadOnlyInterface.md).[listVotes](Cw3FlexMultisigReadOnlyInterface.md#listvotes)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:65](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L65)

___

### memberChangedHook

• **memberChangedHook**: (`__namedParameters`: { `diffs`: [`MemberDiff`](Cw3FlexMultisigTypes.MemberDiff.md)[]  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `diffs` | [`MemberDiff`](Cw3FlexMultisigTypes.MemberDiff.md)[] |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:244](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L244)

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

#### Inherited from

[Cw3FlexMultisigReadOnlyInterface](Cw3FlexMultisigReadOnlyInterface.md).[proposal](Cw3FlexMultisigReadOnlyInterface.md#proposal)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:49](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L49)

___

### propose

• **propose**: (`__namedParameters`: { `description`: `string` ; `latest?`: [`Expiration`](../modules/Cw3FlexMultisigTypes.md#expiration) ; `msgs`: [`CosmosMsgForEmpty`](../modules/Cw3FlexMultisigTypes.md#cosmosmsgforempty)[] ; `title`: `string`  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `description` | `string` |
| › `latest?` | [`Expiration`](../modules/Cw3FlexMultisigTypes.md#expiration) |
| › `msgs` | [`CosmosMsgForEmpty`](../modules/Cw3FlexMultisigTypes.md#cosmosmsgforempty)[] |
| › `title` | `string` |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:196](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L196)

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

#### Inherited from

[Cw3FlexMultisigReadOnlyInterface](Cw3FlexMultisigReadOnlyInterface.md).[queryVote](Cw3FlexMultisigReadOnlyInterface.md#queryvote)

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

#### Inherited from

[Cw3FlexMultisigReadOnlyInterface](Cw3FlexMultisigReadOnlyInterface.md).[reverseProposals](Cw3FlexMultisigReadOnlyInterface.md#reverseproposals)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:57](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L57)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:195](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L195)

___

### threshold

• **threshold**: () => `Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

#### Type declaration

▸ (): `Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

##### Returns

`Promise`<[`ThresholdResponse`](../modules/Cw3FlexMultisigTypes.md#thresholdresponse)\>

#### Inherited from

[Cw3FlexMultisigReadOnlyInterface](Cw3FlexMultisigReadOnlyInterface.md).[threshold](Cw3FlexMultisigReadOnlyInterface.md#threshold)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:48](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L48)

___

### vote

• **vote**: (`__namedParameters`: { `proposalId`: `number` ; `vote`: [`Vote`](../modules/Cw3FlexMultisigTypes.md#vote)  }, `fee?`: `number` \| ``"auto"`` \| `StdFee`, `memo?`: `string`, `funds?`: [`Coin`](Cw3FlexMultisigTypes.Coin.md)[]) => `Promise`<`ExecuteResult`\>

#### Type declaration

▸ (`«destructured»`, `fee?`, `memo?`, `funds?`): `Promise`<`ExecuteResult`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `proposalId` | `number` |
| › `vote` | [`Vote`](../modules/Cw3FlexMultisigTypes.md#vote) |
| `fee?` | `number` \| ``"auto"`` \| `StdFee` |
| `memo?` | `string` |
| `funds?` | [`Coin`](Cw3FlexMultisigTypes.Coin.md)[] |

##### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:212](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L212)

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

#### Inherited from

[Cw3FlexMultisigReadOnlyInterface](Cw3FlexMultisigReadOnlyInterface.md).[voter](Cw3FlexMultisigReadOnlyInterface.md#voter)

#### Defined in

[packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/cw-plus/Cw3FlexMultisig.client.ts#L74)
