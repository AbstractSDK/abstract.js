"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.21.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtfClient = exports.EtfQueryClient = void 0;
class EtfQueryClient {
    constructor(client, contractAddress) {
        Object.defineProperty(this, "client", {
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
        Object.defineProperty(this, "base", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    base: {}
                });
            })
        });
        Object.defineProperty(this, "app", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    app: {}
                });
            })
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.base = this.base.bind(this);
        this.app = this.app.bind(this);
    }
}
exports.EtfQueryClient = EtfQueryClient;
class EtfClient extends EtfQueryClient {
    constructor(client, sender, contractAddress) {
        super(client, contractAddress);
        Object.defineProperty(this, "client", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        Object.defineProperty(this, "base", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    base: {}
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "app", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    app: {}
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "ibcCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ id, msg }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    ibc_callback: {
                        id,
                        msg
                    }
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "receive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ amount, msg, sender }, fee = "auto", memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    receive: {
                        amount,
                        msg,
                        sender
                    }
                }, fee, memo, funds);
            })
        });
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.base = this.base.bind(this);
        this.app = this.app.bind(this);
        this.ibcCallback = this.ibcCallback.bind(this);
        this.receive = this.receive.bind(this);
    }
}
exports.EtfClient = EtfClient;
//# sourceMappingURL=Etf.client.js.map