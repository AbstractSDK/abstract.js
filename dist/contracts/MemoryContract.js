"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.5.8.
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
exports.MemoryQueryClient = void 0;
class MemoryQueryClient {
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
        Object.defineProperty(this, "assets", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ names }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    assets: {
                        names
                    }
                });
            })
        });
        Object.defineProperty(this, "contracts", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ names }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    contracts: {
                        names
                    }
                });
            })
        });
        Object.defineProperty(this, "contractList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ iterLimit, lastContract }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    contract_list: {
                        iter_limit: iterLimit,
                        last_contract: lastContract
                    }
                });
            })
        });
        Object.defineProperty(this, "assetList", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ iterLimit, lastAssetName }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    asset_list: {
                        iter_limit: iterLimit,
                        last_asset_name: lastAssetName
                    }
                });
            })
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.assets = this.assets.bind(this);
        this.contracts = this.contracts.bind(this);
        this.contractList = this.contractList.bind(this);
        this.assetList = this.assetList.bind(this);
    }
}
exports.MemoryQueryClient = MemoryQueryClient;
//# sourceMappingURL=MemoryContract.js.map