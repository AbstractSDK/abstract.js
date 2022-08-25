"use strict";
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
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
exports.SubscriptionClient = exports.SubscriptionQueryClient = void 0;
class SubscriptionQueryClient {
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
        Object.defineProperty(this, "queryBase", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    base: {},
                });
            })
        });
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    state: {},
                });
            })
        });
        Object.defineProperty(this, "config", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    config: {},
                });
            })
        });
        Object.defineProperty(this, "fee", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: () => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    fee: {},
                });
            })
        });
        Object.defineProperty(this, "subscriberState", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ osId }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    subscriber_state: {
                        os_id: osId,
                    },
                });
            })
        });
        Object.defineProperty(this, "contributorState", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ osId }) => __awaiter(this, void 0, void 0, function* () {
                return this.client.queryContractSmart(this.contractAddress, {
                    contributor_state: {
                        os_id: osId,
                    },
                });
            })
        });
        this.client = client;
        this.contractAddress = contractAddress;
        this.queryBase = this.queryBase.bind(this);
        this.state = this.state.bind(this);
        this.config = this.config.bind(this);
        this.fee = this.fee.bind(this);
        this.subscriberState = this.subscriberState.bind(this);
        this.contributorState = this.contributorState.bind(this);
    }
}
exports.SubscriptionQueryClient = SubscriptionQueryClient;
class SubscriptionClient extends SubscriptionQueryClient {
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
            value: (msg, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    base: msg,
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "receive", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ amount, msg, sender, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    receive: {
                        amount,
                        msg,
                        sender,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "pay", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ osId, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    pay: {
                        os_id: osId,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "unsubscribe", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ osIds, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    unsubscribe: {
                        os_ids: osIds,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "claimCompensation", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ osId, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    claim_compensation: {
                        os_id: osId,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "claimEmissions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ osId, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    claim_emissions: {
                        os_id: osId,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "updateContributor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ basePerBlock, contributorOsId, expirationBlock, weight, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    update_contributor: {
                        base_per_block: basePerBlock,
                        contributor_os_id: contributorOsId,
                        expiration_block: expirationBlock,
                        weight,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "removeContributor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ osId, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    remove_contributor: {
                        os_id: osId,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "updateSubscriptionConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ factoryAddress, paymentAsset, subscriptionCost, versionControlAddress, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    update_subscription_config: {
                        factory_address: factoryAddress,
                        payment_asset: paymentAsset,
                        subscription_cost: subscriptionCost,
                        version_control_address: versionControlAddress,
                    },
                }, fee, memo, funds);
            })
        });
        Object.defineProperty(this, "updateContributionConfig", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ({ emissionUserShare, emissionsAmpFactor, emissionsOffset, maxEmissionsMultiple, projectTokenInfo, protocolIncomeShare, }, fee = 'auto', memo, funds) => __awaiter(this, void 0, void 0, function* () {
                return yield this.client.execute(this.sender, this.contractAddress, {
                    update_contribution_config: {
                        emission_user_share: emissionUserShare,
                        emissions_amp_factor: emissionsAmpFactor,
                        emissions_offset: emissionsOffset,
                        max_emissions_multiple: maxEmissionsMultiple,
                        project_token_info: projectTokenInfo,
                        protocol_income_share: protocolIncomeShare,
                    },
                }, fee, memo, funds);
            })
        });
        this.client = client;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.base = this.base.bind(this);
        this.receive = this.receive.bind(this);
        this.pay = this.pay.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);
        this.claimCompensation = this.claimCompensation.bind(this);
        this.claimEmissions = this.claimEmissions.bind(this);
        this.updateContributor = this.updateContributor.bind(this);
        this.removeContributor = this.removeContributor.bind(this);
        this.updateSubscriptionConfig = this.updateSubscriptionConfig.bind(this);
        this.updateContributionConfig = this.updateContributionConfig.bind(this);
    }
}
exports.SubscriptionClient = SubscriptionClient;
//# sourceMappingURL=Subscription.client.js.map