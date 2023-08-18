[@abstract-money/abstract.js](../README.md) / [Exports](../modules.md) / AbstractAccountClient

# Class: AbstractAccountClient

The AbstractAccountClient class extends the AbstractAccountQueryClient class and provides
additional functionality to interact with a specific Account deployed on Abstract.

Unlike AbstractAccountQueryClient, AbstractAccountClient can execute transactions.

This class should be used when write operations (transactions) need to be performed for the account.

**`Property`**

An instance of AbstractClient.

**`Property`**

The sender address associated with the signing account.

## Hierarchy

- [`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)

  ↳ **`AbstractAccountClient`**

## Table of contents

### Constructors

- [constructor](AbstractAccountClient.md#constructor)

### Properties

- [abstract](AbstractAccountClient.md#abstract)
- [accountId](AbstractAccountClient.md#accountid)
- [managerAddress](AbstractAccountClient.md#manageraddress)
- [proxyAddress](AbstractAccountClient.md#proxyaddress)
- [sender](AbstractAccountClient.md#sender)

### Accessors

- [managerClient](AbstractAccountClient.md#managerclient)
- [managerQueryClient](AbstractAccountClient.md#managerqueryclient)
- [proxyClient](AbstractAccountClient.md#proxyclient)
- [proxyQueryClient](AbstractAccountClient.md#proxyqueryclient)

### Methods

- [buildExecuteOnModuleMsg](AbstractAccountClient.md#buildexecuteonmodulemsg)
- [claimNamespace](AbstractAccountClient.md#claimnamespace)
- [composeExecuteOnModule](AbstractAccountClient.md#composeexecuteonmodule)
- [connectAbstractClient](AbstractAccountClient.md#connectabstractclient)
- [connectSigningClient](AbstractAccountClient.md#connectsigningclient)
- [executeOnModule](AbstractAccountClient.md#executeonmodule)
- [getBaseAsset](AbstractAccountClient.md#getbaseasset)
- [getModuleAddress](AbstractAccountClient.md#getmoduleaddress)
- [getModules](AbstractAccountClient.md#getmodules)
- [getNamespace](AbstractAccountClient.md#getnamespace)
- [getOwner](AbstractAccountClient.md#getowner)
- [managerMsgComposer](AbstractAccountClient.md#managermsgcomposer)
- [proxyMsgComposer](AbstractAccountClient.md#proxymsgcomposer)
- [queryModule](AbstractAccountClient.md#querymodule)
- [releaseNamespace](AbstractAccountClient.md#releasenamespace)
- [totalValue](AbstractAccountClient.md#totalvalue)
- [wrapModuleExecMsg](AbstractAccountClient.md#wrapmoduleexecmsg)
- [fromQueryClient](AbstractAccountClient.md#fromqueryclient)
- [load](AbstractAccountClient.md#load)

## Constructors

### constructor

• **new AbstractAccountClient**(`base`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | `IAbstractAccountClient` |

#### Overrides

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[constructor](AbstractAccountQueryClient.md#constructor)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:247](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L247)

## Properties

### abstract

• **abstract**: [`AbstractClient`](AbstractClient.md)

#### Overrides

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[abstract](AbstractAccountQueryClient.md#abstract)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:244](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L244)

___

### accountId

• **accountId**: `number`

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[accountId](AbstractAccountQueryClient.md#accountid)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:64](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L64)

___

### managerAddress

• **managerAddress**: `string`

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[managerAddress](AbstractAccountQueryClient.md#manageraddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:65](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L65)

___

### proxyAddress

• **proxyAddress**: `string`

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[proxyAddress](AbstractAccountQueryClient.md#proxyaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:66](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L66)

___

### sender

• **sender**: `string`

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:245](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L245)

## Accessors

### managerClient

• `get` **managerClient**(): [`ManagerClient`](ManagerClient.md)

Get the manager executable client.

#### Returns

[`ManagerClient`](ManagerClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:258](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L258)

___

### managerQueryClient

• `get` **managerQueryClient**(): [`ManagerQueryClient`](ManagerQueryClient.md)

Get the manager query client.

#### Returns

[`ManagerQueryClient`](ManagerQueryClient.md)

#### Inherited from

AbstractAccountQueryClient.managerQueryClient

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:99](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L99)

___

### proxyClient

• `get` **proxyClient**(): [`ProxyClient`](ProxyClient.md)

Get the proxy address.

#### Returns

[`ProxyClient`](ProxyClient.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:265](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L265)

___

### proxyQueryClient

• `get` **proxyQueryClient**(): [`ProxyQueryClient`](ProxyQueryClient.md)

Get the proxy query client.

#### Returns

[`ProxyQueryClient`](ProxyQueryClient.md)

#### Inherited from

AbstractAccountQueryClient.proxyQueryClient

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:106](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L106)

## Methods

### buildExecuteOnModuleMsg

▸ **buildExecuteOnModuleMsg**<`T`\>(`moduleId`, `execMsg`): [`ContractMsg`](../modules.md#contractmsg)

Build an execute message for a specific module.

This method takes a module ID and an execution message of generic type ContractMsg and
converts it into a message which is intended to be executed on the specified module.

Note: This method does not actually send the message; it merely prepares it to be sent.

**`Typeparam`**

T - Represents the type of the execution message, which should extend from
  ContractMsg.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ContractMsg`](../modules.md#contractmsg) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleId` | `string` | The ID of the module on which the message should be executed. |
| `execMsg` | `T` | The message to be executed. |

#### Returns

[`ContractMsg`](../modules.md#contractmsg)

A ContractMsg representing the execution message for the specified module.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:293](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L293)

___

### claimNamespace

▸ **claimNamespace**(`namespace`): `Promise`<`ExecuteResult`\>

Claim a namespace on the account.
This namespace allows you to propose modules to the module marketplace.

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | `string` |

#### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:378](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L378)

___

### composeExecuteOnModule

▸ **composeExecuteOnModule**(`«destructured»`, `funds?`): `MsgExecuteContractEncodeObject`

Compose an execute message for a specific module, given its type.

**`See`**

 - for building app requests
 - for building adapter requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | `ExecuteOnModule` | - |
| `funds?` | `Coin`[] | Optional. The funds involved in the execution. |

#### Returns

`MsgExecuteContractEncodeObject`

An encoded object representing the execution message for the specified module.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:328](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L328)

___

### connectAbstractClient

▸ **connectAbstractClient**(`abstract`): [`AbstractAccountClient`](AbstractAccountClient.md)

Upgrade the Abstract Account client to an executable client.

**`See`**

AbstractAccountClient#fromQueryClient

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `abstract` | [`AbstractClient`](AbstractClient.md) | Abstract client connected to the chain. |

#### Returns

[`AbstractAccountClient`](AbstractAccountClient.md)

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[connectAbstractClient](AbstractAccountQueryClient.md#connectabstractclient)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:202](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L202)

___

### connectSigningClient

▸ **connectSigningClient**(`signingClient`, `sender`): [`AbstractAccountClient`](AbstractAccountClient.md)

Upgrade the Abstract Account client to an executable client.

**`See`**

AbstractAccountClient#fromQueryClient

#### Parameters

| Name | Type |
| :------ | :------ |
| `signingClient` | `SigningCosmWasmClient` |
| `sender` | `string` |

#### Returns

[`AbstractAccountClient`](AbstractAccountClient.md)

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[connectSigningClient](AbstractAccountQueryClient.md#connectsigningclient)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:210](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L210)

___

### executeOnModule

▸ **executeOnModule**(`«destructured»`, `funds?`): `Promise`<`ExecuteResult`\>

Execute a message on a specific module, given its type.

**`See`**

 - for building app requests
 - for building adapter requests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `«destructured»` | `ExecuteOnModule` | - |
| `funds?` | `Coin`[] | Optional. The funds involved in the execution. |

#### Returns

`Promise`<`ExecuteResult`\>

A Promise resolving to the result of the execution.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:356](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L356)

___

### getBaseAsset

▸ **getBaseAsset**(): `Promise`<[`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr)\>

Return the asset by which the value of the Account is calculated.

#### Returns

`Promise`<[`AssetInfoBaseForAddr`](../modules/ProxyTypes.md#assetinfobaseforaddr)\>

the base asset.

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[getBaseAsset](AbstractAccountQueryClient.md#getbaseasset)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:154](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L154)

___

### getModuleAddress

▸ **getModuleAddress**(`moduleId`): `Promise`<`string`\>

Given the **moduleId**, get the address of the module installed on this Account.

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleId` | `string` |

#### Returns

`Promise`<`string`\>

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[getModuleAddress](AbstractAccountQueryClient.md#getmoduleaddress)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:162](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L162)

___

### getModules

▸ **getModules**(): `Promise`<[`ManagerModuleInfo`](../interfaces/ManagerTypes.ManagerModuleInfo.md)[]\>

Load the module information for those installed on this Account.

#### Returns

`Promise`<[`ManagerModuleInfo`](../interfaces/ManagerTypes.ManagerModuleInfo.md)[]\>

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[getModules](AbstractAccountQueryClient.md#getmodules)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:121](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L121)

___

### getNamespace

▸ **getNamespace**(): `Promise`<``null`` \| `string`\>

Load the namespace registered on the Account.

#### Returns

`Promise`<``null`` \| `string`\>

the namespace or null if no namespace is registered.

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[getNamespace](AbstractAccountQueryClient.md#getnamespace)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:133](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L133)

___

### getOwner

▸ **getOwner**(): `Promise`<``null`` \| `string`\>

Return the owner of the Account.

#### Returns

`Promise`<``null`` \| `string`\>

the owner address, or null if no owner is set.

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[getOwner](AbstractAccountQueryClient.md#getowner)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:146](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L146)

___

### managerMsgComposer

▸ **managerMsgComposer**(`sender?`): [`ManagerMessageComposer`](ManagerMessageComposer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender?` | `string` |

#### Returns

[`ManagerMessageComposer`](ManagerMessageComposer.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:269](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L269)

___

### proxyMsgComposer

▸ **proxyMsgComposer**(`sender?`): [`ProxyMessageComposer`](ProxyMessageComposer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender?` | `string` |

#### Returns

[`ProxyMessageComposer`](ProxyMessageComposer.md)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:273](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L273)

___

### queryModule

▸ **queryModule**(`«destructured»`): `Promise`<`any`\>

Query a module. Not recommended to use directly, use the module specific query methods.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `QueryModule` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[queryModule](AbstractAccountQueryClient.md#querymodule)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:189](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L189)

___

### releaseNamespace

▸ **releaseNamespace**(): `Promise`<`ExecuteResult`\>

Release a namespace from the account.
This relinquishes your control over the namespace and allows other Accounts to claim it.

#### Returns

`Promise`<`ExecuteResult`\>

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:389](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L389)

___

### totalValue

▸ **totalValue**(): `Promise`<`number`\>

Return the total value of the Abstract Account against its base asset.

#### Returns

`Promise`<`number`\>

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[totalValue](AbstractAccountQueryClient.md#totalvalue)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:113](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L113)

___

### wrapModuleExecMsg

▸ `Private` **wrapModuleExecMsg**(`execMsg`, `moduleType?`): [`ContractMsg`](../modules.md#contractmsg)

This constructs an execution message that is tailored to the specified module and its
type. It can handle 'app' and 'adapter' module types, with the message just being passed on in the
default case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `execMsg` | [`ContractMsg`](../modules.md#contractmsg) | the execution message |
| `moduleType?` | [`ModuleType`](../modules.md#moduletype) | the type of the module |

#### Returns

[`ContractMsg`](../modules.md#contractmsg)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:308](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L308)

___

### fromQueryClient

▸ `Static` **fromQueryClient**(`queryClient`, `abstract`): [`AbstractAccountClient`](AbstractAccountClient.md)

Upgrade a query client to a signing client.

This method takes an AbstractAccountQueryClient and upgrades it to an AbstractAccountClient,
which has signing capabilities.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `queryClient` | [`AbstractAccountQueryClient`](AbstractAccountQueryClient.md) | The AbstractAccountQueryClient to be upgraded. |
| `abstract` | [`AbstractClient`](AbstractClient.md) | The AbstractClient to be associated with the new AbstractAccountClient. |

#### Returns

[`AbstractAccountClient`](AbstractAccountClient.md)

A new AbstractAccountClient, upgraded from the provided AbstractAccountQueryClient.

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:410](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L410)

___

### load

▸ `Static` **load**(`abstractClient`, `accountId`): `Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

Load the abstract account client given the **accountId** and the **abstractClient**.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `abstractClient` | [`AbstractQueryClient`](AbstractQueryClient.md) | Abstract client connected to the chain. |
| `accountId` | `number` | The account id. |

#### Returns

`Promise`<[`AbstractAccountQueryClient`](AbstractAccountQueryClient.md)\>

#### Inherited from

[AbstractAccountQueryClient](AbstractAccountQueryClient.md).[load](AbstractAccountQueryClient.md#load)

#### Defined in

[packages/abstractjs/src/clients/AbstractAccountClient.ts:80](https://github.com/AbstractSDK/frontend/blob/07410073/packages/abstractjs/src/clients/AbstractAccountClient.ts#L80)
