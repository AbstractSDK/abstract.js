"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.6.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCw20IcsReceiveMutation = exports.useCw20IcsTransferMutation = exports.useCw20IcsAllowMutation = exports.useCw20IcsUpdateAdminMutation = exports.useCw20IcsPortQuery = exports.useCw20IcsListChannelsQuery = exports.useCw20IcsChannelQuery = exports.useCw20IcsConfigQuery = exports.useCw20IcsAdminQuery = exports.useCw20IcsAllowedQuery = exports.useCw20IcsListAllowedQuery = void 0;
const react_query_1 = require("@tanstack/react-query");
function useCw20IcsListAllowedQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20IcsListAllowed", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.listAllowed({
        limit: args.limit,
        startAfter: args.startAfter
    }) : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20IcsListAllowedQuery = useCw20IcsListAllowedQuery;
function useCw20IcsAllowedQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20IcsAllowed", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.allowed({
        contract: args.contract
    }) : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20IcsAllowedQuery = useCw20IcsAllowedQuery;
function useCw20IcsAdminQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20IcsAdmin", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.admin() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20IcsAdminQuery = useCw20IcsAdminQuery;
function useCw20IcsConfigQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20IcsConfig", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.config() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20IcsConfigQuery = useCw20IcsConfigQuery;
function useCw20IcsChannelQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20IcsChannel", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.channel({
        id: args.id
    }) : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20IcsChannelQuery = useCw20IcsChannelQuery;
function useCw20IcsListChannelsQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20IcsListChannels", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.listChannels() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20IcsListChannelsQuery = useCw20IcsListChannelsQuery;
function useCw20IcsPortQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20IcsPort", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.port() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20IcsPortQuery = useCw20IcsPortQuery;
function useCw20IcsUpdateAdminMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateAdmin(msg, fee, memo, funds), options);
}
exports.useCw20IcsUpdateAdminMutation = useCw20IcsUpdateAdminMutation;
function useCw20IcsAllowMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.allow(msg, fee, memo, funds), options);
}
exports.useCw20IcsAllowMutation = useCw20IcsAllowMutation;
function useCw20IcsTransferMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.transfer(msg, fee, memo, funds), options);
}
exports.useCw20IcsTransferMutation = useCw20IcsTransferMutation;
function useCw20IcsReceiveMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.receive(msg, fee, memo, funds), options);
}
exports.useCw20IcsReceiveMutation = useCw20IcsReceiveMutation;
//# sourceMappingURL=Cw20IcsContract.react-query.js.map