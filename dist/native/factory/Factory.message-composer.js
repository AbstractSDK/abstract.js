"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactoryMessageComposer = void 0;
const tx_1 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const encoding_1 = require("@cosmjs/encoding");
class FactoryMessageComposer {
    constructor(sender, contractAddress) {
        Object.defineProperty(this, "sender", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contractAddress", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "receive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ amount, msg, sender }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            receive: {
                                amount,
                                msg,
                                sender
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "updateConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ admin, memoryContract, moduleFactoryAddress, subscriptionAddress, versionControlContract }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            update_config: {
                                admin,
                                memory_contract: memoryContract,
                                module_factory_address: moduleFactoryAddress,
                                subscription_address: subscriptionAddress,
                                version_control_contract: versionControlContract
                            }
                        })),
                        funds
                    })
                };
            }
        });
        Object.defineProperty(this, "createOs", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ description, governance, link, name }, funds) => {
                return {
                    typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            create_os: {
                                description,
                                governance,
                                link,
                                name
                            }
                        })),
                        funds
                    })
                };
            }
        });
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.receive = this.receive.bind(this);
        this.updateConfig = this.updateConfig.bind(this);
        this.createOs = this.createOs.bind(this);
    }
}
exports.FactoryMessageComposer = FactoryMessageComposer;
//# sourceMappingURL=Factory.message-composer.js.map