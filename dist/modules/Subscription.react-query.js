"use strict";
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSubscriptionBaseMutation = exports.useSubscriptionReceiveMutation = exports.useSubscriptionPayMutation = exports.useSubscriptionUnsubscribeMutation = exports.useSubscriptionClaimCompensationMutation = exports.useSubscriptionClaimEmissionsMutation = exports.useSubscriptionUpdateContributorMutation = exports.useSubscriptionRemoveContributorMutation = exports.useSubscriptionUpdateSubscriptionConfigMutation = exports.useSubscriptionUpdateContributionConfigMutation = exports.useSubscriptionBaseQuery = exports.useSubscriptionStateQuery = exports.useSubscriptionConfigQuery = exports.useSubscriptionFeeQuery = exports.useSubscriptionSubscriberStateQuery = exports.useSubscriptionContributorStateQuery = exports.subscriptionQueryKeys = void 0;
const react_query_1 = require("@tanstack/react-query");
exports.subscriptionQueryKeys = {
    contract: [
        {
            contract: 'subscription',
        },
    ],
    address: (contractAddress) => [Object.assign(Object.assign({}, exports.subscriptionQueryKeys.contract[0]), { address: contractAddress })],
    base: (contractAddress, args) => [Object.assign(Object.assign({}, exports.subscriptionQueryKeys.address(contractAddress)[0]), { method: 'base', args })],
    state: (contractAddress, args) => [Object.assign(Object.assign({}, exports.subscriptionQueryKeys.address(contractAddress)[0]), { method: 'state', args })],
    config: (contractAddress, args) => [Object.assign(Object.assign({}, exports.subscriptionQueryKeys.address(contractAddress)[0]), { method: 'config', args })],
    fee: (contractAddress, args) => [Object.assign(Object.assign({}, exports.subscriptionQueryKeys.address(contractAddress)[0]), { method: 'fee', args })],
    subscriberState: (contractAddress, args) => [
        Object.assign(Object.assign({}, exports.subscriptionQueryKeys.address(contractAddress)[0]), { method: 'subscriber_state', args }),
    ],
    contributorState: (contractAddress, args) => [
        Object.assign(Object.assign({}, exports.subscriptionQueryKeys.address(contractAddress)[0]), { method: 'contributor_state', args }),
    ],
};
function useSubscriptionContributorStateQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.subscriptionQueryKeys.contributorState(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.contributorState({
            osId: args.osId,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useSubscriptionContributorStateQuery = useSubscriptionContributorStateQuery;
function useSubscriptionSubscriberStateQuery({ client, args, options, }) {
    return (0, react_query_1.useQuery)(exports.subscriptionQueryKeys.subscriberState(client === null || client === void 0 ? void 0 : client.contractAddress, args), () => client
        ? client.subscriberState({
            osId: args.osId,
        })
        : Promise.reject(new Error('Invalid client')), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useSubscriptionSubscriberStateQuery = useSubscriptionSubscriberStateQuery;
function useSubscriptionFeeQuery({ client, options, }) {
    return (0, react_query_1.useQuery)(exports.subscriptionQueryKeys.fee(client === null || client === void 0 ? void 0 : client.contractAddress), () => (client ? client.fee() : Promise.reject(new Error('Invalid client'))), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useSubscriptionFeeQuery = useSubscriptionFeeQuery;
function useSubscriptionConfigQuery({ client, options, }) {
    return (0, react_query_1.useQuery)(exports.subscriptionQueryKeys.config(client === null || client === void 0 ? void 0 : client.contractAddress), () => (client ? client.config() : Promise.reject(new Error('Invalid client'))), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useSubscriptionConfigQuery = useSubscriptionConfigQuery;
function useSubscriptionStateQuery({ client, options, }) {
    return (0, react_query_1.useQuery)(exports.subscriptionQueryKeys.state(client === null || client === void 0 ? void 0 : client.contractAddress), () => (client ? client.state() : Promise.reject(new Error('Invalid client'))), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useSubscriptionStateQuery = useSubscriptionStateQuery;
function useSubscriptionBaseQuery({ client, options, }) {
    return (0, react_query_1.useQuery)(exports.subscriptionQueryKeys.base(client === null || client === void 0 ? void 0 : client.contractAddress), () => (client ? client.queryBase() : Promise.reject(new Error('Invalid client'))), Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useSubscriptionBaseQuery = useSubscriptionBaseQuery;
function useSubscriptionUpdateContributionConfigMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateContributionConfig(msg, fee, memo, funds), options);
}
exports.useSubscriptionUpdateContributionConfigMutation = useSubscriptionUpdateContributionConfigMutation;
function useSubscriptionUpdateSubscriptionConfigMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateSubscriptionConfig(msg, fee, memo, funds), options);
}
exports.useSubscriptionUpdateSubscriptionConfigMutation = useSubscriptionUpdateSubscriptionConfigMutation;
function useSubscriptionRemoveContributorMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.removeContributor(msg, fee, memo, funds), options);
}
exports.useSubscriptionRemoveContributorMutation = useSubscriptionRemoveContributorMutation;
function useSubscriptionUpdateContributorMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateContributor(msg, fee, memo, funds), options);
}
exports.useSubscriptionUpdateContributorMutation = useSubscriptionUpdateContributorMutation;
function useSubscriptionClaimEmissionsMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.claimEmissions(msg, fee, memo, funds), options);
}
exports.useSubscriptionClaimEmissionsMutation = useSubscriptionClaimEmissionsMutation;
function useSubscriptionClaimCompensationMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.claimCompensation(msg, fee, memo, funds), options);
}
exports.useSubscriptionClaimCompensationMutation = useSubscriptionClaimCompensationMutation;
function useSubscriptionUnsubscribeMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.unsubscribe(msg, fee, memo, funds), options);
}
exports.useSubscriptionUnsubscribeMutation = useSubscriptionUnsubscribeMutation;
function useSubscriptionPayMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.pay(msg, fee, memo, funds), options);
}
exports.useSubscriptionPayMutation = useSubscriptionPayMutation;
function useSubscriptionReceiveMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.receive(msg, fee, memo, funds), options);
}
exports.useSubscriptionReceiveMutation = useSubscriptionReceiveMutation;
function useSubscriptionBaseMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.base(msg, fee, memo, funds), options);
}
exports.useSubscriptionBaseMutation = useSubscriptionBaseMutation;
//# sourceMappingURL=Subscription.react-query.js.map