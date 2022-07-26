"use strict";
/**
* This file was automatically generated by cosmwasm-typescript-gen@0.3.9.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the cosmwasm-typescript-gen generate command to regenerate this file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCw20BalanceQuery = exports.useCw20TokenInfoQuery = exports.useCw20MinterQuery = exports.useCw20AllowanceQuery = exports.useCw20AllAllowancesQuery = exports.useCw20AllAccountsQuery = exports.useCw20MarketingInfoQuery = exports.useCw20DownloadLogoQuery = void 0;
const react_query_1 = require("@tanstack/react-query");
function useCw20DownloadLogoQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20DownloadLogo", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.downloadLogo() : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20DownloadLogoQuery = useCw20DownloadLogoQuery;
function useCw20MarketingInfoQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20MarketingInfo", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.marketingInfo() : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20MarketingInfoQuery = useCw20MarketingInfoQuery;
function useCw20AllAccountsQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20AllAccounts", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.allAccounts({
        limit: args.limit,
        startAfter: args.startAfter
    }) : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20AllAccountsQuery = useCw20AllAccountsQuery;
function useCw20AllAllowancesQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20AllAllowances", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.allAllowances({
        limit: args.limit,
        owner: args.owner,
        startAfter: args.startAfter
    }) : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20AllAllowancesQuery = useCw20AllAllowancesQuery;
function useCw20AllowanceQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20Allowance", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.allowance({
        owner: args.owner,
        spender: args.spender
    }) : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20AllowanceQuery = useCw20AllowanceQuery;
function useCw20MinterQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20Minter", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.minter() : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20MinterQuery = useCw20MinterQuery;
function useCw20TokenInfoQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20TokenInfo", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.tokenInfo() : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20TokenInfoQuery = useCw20TokenInfoQuery;
function useCw20BalanceQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20Balance", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.balance({
        address: args.address
    }) : undefined, Object.assign({ enabled: !!client && (options === null || options === void 0 ? void 0 : options.enabled) }, options));
}
exports.useCw20BalanceQuery = useCw20BalanceQuery;
//# sourceMappingURL=Cw20Contract.react-query.js.map