"use strict";
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
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
exports.DexClient = exports.DexQueryClient = void 0;
class DexQueryClient {
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
        Object.defineProperty(this, "api", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    api: {},
                });
            })
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.api = this.api.bind(this);
    }
}
exports.DexQueryClient = DexQueryClient;
class DexClient extends DexQueryClient {
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
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ proxyAddress, request, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    request: {
                        proxy_address: proxyAddress,
                        request,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "configure", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (msg, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    configure: msg,
                }, fee, memo, funds);
            })
        });
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.request = this.request.bind(this);
        this.configure = this.configure.bind(this);
    }
}
exports.DexClient = DexClient;
//# sourceMappingURL=Dex.client.js.map