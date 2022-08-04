"use strict";
/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCw20IcsPortQuery = exports.useCw20IcsListChannelsQuery = exports.useCw20IcsChannelQuery = exports.useCw20IcsConfigQuery = exports.useCw20IcsAdminQuery = exports.useCw20IcsAllowedQuery = exports.useCw20IcsListAllowedQuery = void 0;
const react_query_1 = require("@tanstack/react-query");
function useCw20IcsListAllowedQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(['cw20IcsListAllowed', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.listAllowed({
            limit: args.limit,
            startAfter: args.startAfter,
        })
        : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20IcsListAllowedQuery = useCw20IcsListAllowedQuery;
function useCw20IcsAllowedQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(['cw20IcsAllowed', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.allowed({
            contract: args.contract,
        })
        : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20IcsAllowedQuery = useCw20IcsAllowedQuery;
function useCw20IcsAdminQuery({ client, options }) {
    return (0, react_query_1.useQuery)(['cw20IcsAdmin', client === null || client === void 0 ? void 0 : client.contractAddress], () => (client ? client.admin() : undefined), Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20IcsAdminQuery = useCw20IcsAdminQuery;
function useCw20IcsConfigQuery({ client, options }) {
    return (0, react_query_1.useQuery)(['cw20IcsConfig', client === null || client === void 0 ? void 0 : client.contractAddress], () => (client ? client.config() : undefined), Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20IcsConfigQuery = useCw20IcsConfigQuery;
function useCw20IcsChannelQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(['cw20IcsChannel', client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client
        ? client.channel({
            id: args.id,
        })
        : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20IcsChannelQuery = useCw20IcsChannelQuery;
function useCw20IcsListChannelsQuery({ client, options }) {
    return (0, react_query_1.useQuery)(['cw20IcsListChannels', client === null || client === void 0 ? void 0 : client.contractAddress], () => (client ? client.listChannels() : undefined), Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20IcsListChannelsQuery = useCw20IcsListChannelsQuery;
function useCw20IcsPortQuery({ client, options }) {
    return (0, react_query_1.useQuery)(['cw20IcsPort', client === null || client === void 0 ? void 0 : client.contractAddress], () => (client ? client.port() : undefined), Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20IcsPortQuery = useCw20IcsPortQuery;
//# sourceMappingURL=Cw20IcsContract.react-query.js.map