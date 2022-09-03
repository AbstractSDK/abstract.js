"use strict";
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyMessageComposer = void 0;
const tx_1 = require("cosmjs-types/cosmwasm/wasm/v1/tx");
const encoding_1 = require("@cosmjs/encoding");
class ProxyMessageComposer {
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
        Object.defineProperty(this, "setAdmin", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ admin, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            set_admin: {
                                admin,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "moduleAction", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ msgs, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            module_action: {
                                msgs,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "addModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ module, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            add_module: {
                                module,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "removeModule", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ module, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            remove_module: {
                                module,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        Object.defineProperty(this, "updateAssets", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ toAdd, toRemove, }, funds) => {
                return {
                    typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                    value: tx_1.MsgExecuteContract.fromPartial({
                        sender: this.sender,
                        contract: this.contractAddress,
                        msg: (0, encoding_1.toUtf8)(JSON.stringify({
                            update_assets: {
                                to_add: toAdd,
                                to_remove: toRemove,
                            },
                        })),
                        funds,
                    }),
                };
            }
        });
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.setAdmin = this.setAdmin.bind(this);
        this.moduleAction = this.moduleAction.bind(this);
        this.addModule = this.addModule.bind(this);
        this.removeModule = this.removeModule.bind(this);
        this.updateAssets = this.updateAssets.bind(this);
    }
}
exports.ProxyMessageComposer = ProxyMessageComposer;
//# sourceMappingURL=Proxy.message-composer.js.map