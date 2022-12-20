/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.14.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { __assign } from "tslib";
import { useQuery, useMutation } from '@tanstack/react-query';
export var etfQueryKeys = {
    contract: [
        {
            contract: 'etf',
        },
    ],
    address: function (contractAddress) {
        return [__assign(__assign({}, etfQueryKeys.contract[0]), { address: contractAddress })];
    },
    base: function (contractAddress, args) {
        return [__assign(__assign({}, etfQueryKeys.address(contractAddress)[0]), { method: 'base', args: args })];
    },
    state: function (contractAddress, args) {
        return [__assign(__assign({}, etfQueryKeys.address(contractAddress)[0]), { method: 'state', args: args })];
    },
    configValidity: function (contractAddress, args) {
        return [__assign(__assign({}, etfQueryKeys.address(contractAddress)[0]), { method: 'config_validity', args: args })];
    },
};
export function useEtfConfigValidityQuery(_a) {
    var client = _a.client, options = _a.options;
    return useQuery(etfQueryKeys.configValidity(client === null || client === void 0 ? void 0 : client.contractAddress), function () { return (client ? client.configValidity() : Promise.reject(new Error('Invalid client'))); }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useEtfStateQuery(_a) {
    var client = _a.client, options = _a.options;
    return useQuery(etfQueryKeys.state(client === null || client === void 0 ? void 0 : client.contractAddress), function () { return (client ? client.state() : Promise.reject(new Error('Invalid client'))); }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useEtfSetFeeMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.setFee(msg, fee, memo, funds);
    }, options);
}
export function useEtfImportMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.import(fee, memo, funds);
    }, options);
}
export function useEtfUpdatePoolMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.updatePool(msg, fee, memo, funds);
    }, options);
}
export function useEtfProvideLiquidityMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.provideLiquidity(msg, fee, memo, funds);
    }, options);
}
export function useEtfReceiveMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.receive(msg, fee, memo, funds);
    }, options);
}
export function useEtfBaseMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.base(msg, fee, memo, funds);
    }, options);
}
