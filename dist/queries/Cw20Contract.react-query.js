"use strict";
/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.6.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCw20TransferMutation = exports.useCw20BurnMutation = exports.useCw20SendMutation = exports.useCw20IncreaseAllowanceMutation = exports.useCw20DecreaseAllowanceMutation = exports.useCw20TransferFromMutation = exports.useCw20SendFromMutation = exports.useCw20BurnFromMutation = exports.useCw20MintMutation = exports.useCw20UpdateMinterMutation = exports.useCw20UpdateMarketingMutation = exports.useCw20UploadLogoMutation = exports.useCw20BalanceQuery = exports.useCw20TokenInfoQuery = exports.useCw20MinterQuery = exports.useCw20AllowanceQuery = exports.useCw20AllAllowancesQuery = exports.useCw20AllAccountsQuery = exports.useCw20MarketingInfoQuery = exports.useCw20DownloadLogoQuery = void 0;
const react_query_1 = require("@tanstack/react-query");
function useCw20DownloadLogoQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20DownloadLogo", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.downloadLogo() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20DownloadLogoQuery = useCw20DownloadLogoQuery;
function useCw20MarketingInfoQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20MarketingInfo", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.marketingInfo() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20MarketingInfoQuery = useCw20MarketingInfoQuery;
function useCw20AllAccountsQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20AllAccounts", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.allAccounts({
        limit: args.limit,
        startAfter: args.startAfter
    }) : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20AllAccountsQuery = useCw20AllAccountsQuery;
function useCw20AllAllowancesQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20AllAllowances", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.allAllowances({
        limit: args.limit,
        owner: args.owner,
        startAfter: args.startAfter
    }) : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20AllAllowancesQuery = useCw20AllAllowancesQuery;
function useCw20AllowanceQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20Allowance", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.allowance({
        owner: args.owner,
        spender: args.spender
    }) : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20AllowanceQuery = useCw20AllowanceQuery;
function useCw20MinterQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20Minter", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.minter() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20MinterQuery = useCw20MinterQuery;
function useCw20TokenInfoQuery({ client, options }) {
    return (0, react_query_1.useQuery)(["cw20TokenInfo", client === null || client === void 0 ? void 0 : client.contractAddress], () => client ? client.tokenInfo() : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20TokenInfoQuery = useCw20TokenInfoQuery;
function useCw20BalanceQuery({ client, args, options }) {
    return (0, react_query_1.useQuery)(["cw20Balance", client === null || client === void 0 ? void 0 : client.contractAddress, JSON.stringify(args)], () => client ? client.balance({
        address: args.address
    }) : undefined, Object.assign(Object.assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
exports.useCw20BalanceQuery = useCw20BalanceQuery;
function useCw20UploadLogoMutation(options) {
    return (0, react_query_1.useMutation)(({ client, args: { fee, memo, funds } = {} }) => client.uploadLogo(fee, memo, funds), options);
}
exports.useCw20UploadLogoMutation = useCw20UploadLogoMutation;
function useCw20UpdateMarketingMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateMarketing(msg, fee, memo, funds), options);
}
exports.useCw20UpdateMarketingMutation = useCw20UpdateMarketingMutation;
function useCw20UpdateMinterMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.updateMinter(msg, fee, memo, funds), options);
}
exports.useCw20UpdateMinterMutation = useCw20UpdateMinterMutation;
function useCw20MintMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.mint(msg, fee, memo, funds), options);
}
exports.useCw20MintMutation = useCw20MintMutation;
function useCw20BurnFromMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.burnFrom(msg, fee, memo, funds), options);
}
exports.useCw20BurnFromMutation = useCw20BurnFromMutation;
function useCw20SendFromMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.sendFrom(msg, fee, memo, funds), options);
}
exports.useCw20SendFromMutation = useCw20SendFromMutation;
function useCw20TransferFromMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.transferFrom(msg, fee, memo, funds), options);
}
exports.useCw20TransferFromMutation = useCw20TransferFromMutation;
function useCw20DecreaseAllowanceMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.decreaseAllowance(msg, fee, memo, funds), options);
}
exports.useCw20DecreaseAllowanceMutation = useCw20DecreaseAllowanceMutation;
function useCw20IncreaseAllowanceMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.increaseAllowance(msg, fee, memo, funds), options);
}
exports.useCw20IncreaseAllowanceMutation = useCw20IncreaseAllowanceMutation;
function useCw20SendMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.send(msg, fee, memo, funds), options);
}
exports.useCw20SendMutation = useCw20SendMutation;
function useCw20BurnMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.burn(msg, fee, memo, funds), options);
}
exports.useCw20BurnMutation = useCw20BurnMutation;
function useCw20TransferMutation(options) {
    return (0, react_query_1.useMutation)(({ client, msg, args: { fee, memo, funds } = {} }) => client.transfer(msg, fee, memo, funds), options);
}
exports.useCw20TransferMutation = useCw20TransferMutation;
//# sourceMappingURL=Cw20Contract.react-query.js.map