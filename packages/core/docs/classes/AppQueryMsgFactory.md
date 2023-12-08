[@abstract-money/core](../README.md) / [Exports](../modules.md) / AppQueryMsgFactory

# Class: AppQueryMsgFactory

## Table of contents

### Constructors

- [constructor](AppQueryMsgFactory.md#constructor)

### Methods

- [admin](AppQueryMsgFactory.md#admin)
- [config](AppQueryMsgFactory.md#config)
- [queryApp](AppQueryMsgFactory.md#queryapp)

## Constructors

### constructor

• **new AppQueryMsgFactory**()

## Methods

### admin

▸ `Static` **admin**(): [`AppQueryMsg`](../modules.md#appquerymsg)<`never`\>

Base app admin query.

#### Returns

[`AppQueryMsg`](../modules.md#appquerymsg)<`never`\>

#### Defined in

[packages/abstractjs/src/modules/apps/App.msg-factory.ts:74](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/App.msg-factory.ts#L74)

___

### config

▸ `Static` **config**(): [`AppQueryMsg`](../modules.md#appquerymsg)<`never`\>

Base app config query.

#### Returns

[`AppQueryMsg`](../modules.md#appquerymsg)<`never`\>

#### Defined in

[packages/abstractjs/src/modules/apps/App.msg-factory.ts:65](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/App.msg-factory.ts#L65)

___

### queryApp

▸ `Static` **queryApp**<`TAppMsg`\>(`request`): [`AppQueryMsg`](../modules.md#appquerymsg)<`TAppMsg`\>

Query an app module.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TAppMsg` | extends [`ContractMsg`](../modules.md#contractmsg) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `TAppMsg` | request msg for the given app |

#### Returns

[`AppQueryMsg`](../modules.md#appquerymsg)<`TAppMsg`\>

#### Defined in

[packages/abstractjs/src/modules/apps/App.msg-factory.ts:59](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/modules/apps/App.msg-factory.ts#L59)
