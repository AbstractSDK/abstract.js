/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.16.5.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { __assign } from "tslib";
import { useQuery, useMutation } from '@tanstack/react-query';
export var cw20QueryKeys = {
    contract: [
        {
            contract: 'cw20',
        },
    ],
    address: function (contractAddress) {
        return [__assign(__assign({}, cw20QueryKeys.contract[0]), { address: contractAddress })];
    },
    balance: function (contractAddress, args) {
        return [__assign(__assign({}, cw20QueryKeys.address(contractAddress)[0]), { method: 'balance', args: args })];
    },
    tokenInfo: function (contractAddress, args) {
        return [__assign(__assign({}, cw20QueryKeys.address(contractAddress)[0]), { method: 'token_info', args: args })];
    },
    minter: function (contractAddress, args) {
        return [__assign(__assign({}, cw20QueryKeys.address(contractAddress)[0]), { method: 'minter', args: args })];
    },
    allowance: function (contractAddress, args) {
        return [__assign(__assign({}, cw20QueryKeys.address(contractAddress)[0]), { method: 'allowance', args: args })];
    },
    allAllowances: function (contractAddress, args) {
        return [__assign(__assign({}, cw20QueryKeys.address(contractAddress)[0]), { method: 'all_allowances', args: args })];
    },
    allAccounts: function (contractAddress, args) {
        return [__assign(__assign({}, cw20QueryKeys.address(contractAddress)[0]), { method: 'all_accounts', args: args })];
    },
    marketingInfo: function (contractAddress, args) {
        return [__assign(__assign({}, cw20QueryKeys.address(contractAddress)[0]), { method: 'marketing_info', args: args })];
    },
    downloadLogo: function (contractAddress, args) {
        return [__assign(__assign({}, cw20QueryKeys.address(contractAddress)[0]), { method: 'download_logo', args: args })];
    },
};
export var cw20Queries = {
    balance: function (_a) {
        var client = _a.client, options = _a.options, args = _a.args;
        return (__assign(__assign({ queryKey: cw20QueryKeys.balance(client === null || client === void 0 ? void 0 : client.contractAddress, args), queryFn: function () {
                return client
                    ? client.balance({
                        address: args.address,
                    })
                    : Promise.reject(new Error('Invalid client'));
            } }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
    },
    tokenInfo: function (_a) {
        var client = _a.client, options = _a.options;
        return (__assign(__assign({ queryKey: cw20QueryKeys.tokenInfo(client === null || client === void 0 ? void 0 : client.contractAddress), queryFn: function () { return (client ? client.tokenInfo() : Promise.reject(new Error('Invalid client'))); } }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
    },
    minter: function (_a) {
        var client = _a.client, options = _a.options;
        return (__assign(__assign({ queryKey: cw20QueryKeys.minter(client === null || client === void 0 ? void 0 : client.contractAddress), queryFn: function () { return (client ? client.minter() : Promise.reject(new Error('Invalid client'))); } }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
    },
    allowance: function (_a) {
        var client = _a.client, options = _a.options, args = _a.args;
        return (__assign(__assign({ queryKey: cw20QueryKeys.allowance(client === null || client === void 0 ? void 0 : client.contractAddress, args), queryFn: function () {
                return client
                    ? client.allowance({
                        owner: args.owner,
                        spender: args.spender,
                    })
                    : Promise.reject(new Error('Invalid client'));
            } }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
    },
    allAllowances: function (_a) {
        var client = _a.client, options = _a.options, args = _a.args;
        return (__assign(__assign({ queryKey: cw20QueryKeys.allAllowances(client === null || client === void 0 ? void 0 : client.contractAddress, args), queryFn: function () {
                return client
                    ? client.allAllowances({
                        limit: args.limit,
                        owner: args.owner,
                        startAfter: args.startAfter,
                    })
                    : Promise.reject(new Error('Invalid client'));
            } }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
    },
    allAccounts: function (_a) {
        var client = _a.client, options = _a.options, args = _a.args;
        return (__assign(__assign({ queryKey: cw20QueryKeys.allAccounts(client === null || client === void 0 ? void 0 : client.contractAddress, args), queryFn: function () {
                return client
                    ? client.allAccounts({
                        limit: args.limit,
                        startAfter: args.startAfter,
                    })
                    : Promise.reject(new Error('Invalid client'));
            } }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
    },
    marketingInfo: function (_a) {
        var client = _a.client, options = _a.options;
        return (__assign(__assign({ queryKey: cw20QueryKeys.marketingInfo(client === null || client === void 0 ? void 0 : client.contractAddress), queryFn: function () { return (client ? client.marketingInfo() : Promise.reject(new Error('Invalid client'))); } }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
    },
    downloadLogo: function (_a) {
        var client = _a.client, options = _a.options;
        return (__assign(__assign({ queryKey: cw20QueryKeys.downloadLogo(client === null || client === void 0 ? void 0 : client.contractAddress), queryFn: function () { return (client ? client.downloadLogo() : Promise.reject(new Error('Invalid client'))); } }, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
    },
};
export function useCw20DownloadLogoQuery(_a) {
    var client = _a.client, options = _a.options;
    return useQuery(cw20QueryKeys.downloadLogo(client === null || client === void 0 ? void 0 : client.contractAddress), function () { return (client ? client.downloadLogo() : Promise.reject(new Error('Invalid client'))); }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useCw20MarketingInfoQuery(_a) {
    var client = _a.client, options = _a.options;
    return useQuery(cw20QueryKeys.marketingInfo(client === null || client === void 0 ? void 0 : client.contractAddress), function () { return (client ? client.marketingInfo() : Promise.reject(new Error('Invalid client'))); }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useCw20AllAccountsQuery(_a) {
    var client = _a.client, args = _a.args, options = _a.options;
    return useQuery(cw20QueryKeys.allAccounts(client === null || client === void 0 ? void 0 : client.contractAddress, args), function () {
        return client
            ? client.allAccounts({
                limit: args.limit,
                startAfter: args.startAfter,
            })
            : Promise.reject(new Error('Invalid client'));
    }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useCw20AllAllowancesQuery(_a) {
    var client = _a.client, args = _a.args, options = _a.options;
    return useQuery(cw20QueryKeys.allAllowances(client === null || client === void 0 ? void 0 : client.contractAddress, args), function () {
        return client
            ? client.allAllowances({
                limit: args.limit,
                owner: args.owner,
                startAfter: args.startAfter,
            })
            : Promise.reject(new Error('Invalid client'));
    }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useCw20AllowanceQuery(_a) {
    var client = _a.client, args = _a.args, options = _a.options;
    return useQuery(cw20QueryKeys.allowance(client === null || client === void 0 ? void 0 : client.contractAddress, args), function () {
        return client
            ? client.allowance({
                owner: args.owner,
                spender: args.spender,
            })
            : Promise.reject(new Error('Invalid client'));
    }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useCw20MinterQuery(_a) {
    var client = _a.client, options = _a.options;
    return useQuery(cw20QueryKeys.minter(client === null || client === void 0 ? void 0 : client.contractAddress), function () { return (client ? client.minter() : Promise.reject(new Error('Invalid client'))); }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useCw20TokenInfoQuery(_a) {
    var client = _a.client, options = _a.options;
    return useQuery(cw20QueryKeys.tokenInfo(client === null || client === void 0 ? void 0 : client.contractAddress), function () { return (client ? client.tokenInfo() : Promise.reject(new Error('Invalid client'))); }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useCw20BalanceQuery(_a) {
    var client = _a.client, args = _a.args, options = _a.options;
    return useQuery(cw20QueryKeys.balance(client === null || client === void 0 ? void 0 : client.contractAddress, args), function () {
        return client
            ? client.balance({
                address: args.address,
            })
            : Promise.reject(new Error('Invalid client'));
    }, __assign(__assign({}, options), { enabled: !!client && ((options === null || options === void 0 ? void 0 : options.enabled) != undefined ? options.enabled : true) }));
}
export function useCw20UploadLogoMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.uploadLogo(msg, fee, memo, funds);
    }, options);
}
export function useCw20UpdateMarketingMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.updateMarketing(msg, fee, memo, funds);
    }, options);
}
export function useCw20UpdateMinterMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.updateMinter(msg, fee, memo, funds);
    }, options);
}
export function useCw20MintMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.mint(msg, fee, memo, funds);
    }, options);
}
export function useCw20BurnFromMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.burnFrom(msg, fee, memo, funds);
    }, options);
}
export function useCw20SendFromMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.sendFrom(msg, fee, memo, funds);
    }, options);
}
export function useCw20TransferFromMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.transferFrom(msg, fee, memo, funds);
    }, options);
}
export function useCw20DecreaseAllowanceMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.decreaseAllowance(msg, fee, memo, funds);
    }, options);
}
export function useCw20IncreaseAllowanceMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.increaseAllowance(msg, fee, memo, funds);
    }, options);
}
export function useCw20SendMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.send(msg, fee, memo, funds);
    }, options);
}
export function useCw20BurnMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.burn(msg, fee, memo, funds);
    }, options);
}
export function useCw20TransferMutation(options) {
    return useMutation(function (_a) {
        var client = _a.client, msg = _a.msg, _b = _a.args, _c = _b === void 0 ? {} : _b, fee = _c.fee, memo = _c.memo, funds = _c.funds;
        return client.transfer(msg, fee, memo, funds);
    }, options);
}
