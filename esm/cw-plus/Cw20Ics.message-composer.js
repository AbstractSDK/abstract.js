/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.11.1.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */
import { MsgExecuteContract } from 'cosmjs-types/cosmwasm/wasm/v1/tx';
import { toUtf8 } from '@cosmjs/encoding';
var Cw20IcsMessageComposer = /** @class */ (function () {
    function Cw20IcsMessageComposer(sender, contractAddress) {
        var _this = this;
        this.receive = function (_a, funds) {
            var amount = _a.amount, msg = _a.msg, sender = _a.sender;
            return {
                typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                value: MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: toUtf8(JSON.stringify({
                        receive: {
                            amount: amount,
                            msg: msg,
                            sender: sender,
                        },
                    })),
                    funds: funds,
                }),
            };
        };
        this.transfer = function (_a, funds) {
            var channel = _a.channel, remoteAddress = _a.remoteAddress, timeout = _a.timeout;
            return {
                typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                value: MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: toUtf8(JSON.stringify({
                        transfer: {
                            channel: channel,
                            remote_address: remoteAddress,
                            timeout: timeout,
                        },
                    })),
                    funds: funds,
                }),
            };
        };
        this.allow = function (_a, funds) {
            var contract = _a.contract, gasLimit = _a.gasLimit;
            return {
                typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                value: MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: toUtf8(JSON.stringify({
                        allow: {
                            contract: contract,
                            gas_limit: gasLimit,
                        },
                    })),
                    funds: funds,
                }),
            };
        };
        this.updateAdmin = function (_a, funds) {
            var admin = _a.admin;
            return {
                typeUrl: '/cosmwasm.wasm.v1.MsgExecuteContract',
                value: MsgExecuteContract.fromPartial({
                    sender: _this.sender,
                    contract: _this.contractAddress,
                    msg: toUtf8(JSON.stringify({
                        update_admin: {
                            admin: admin,
                        },
                    })),
                    funds: funds,
                }),
            };
        };
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.receive = this.receive.bind(this);
        this.transfer = this.transfer.bind(this);
        this.allow = this.allow.bind(this);
        this.updateAdmin = this.updateAdmin.bind(this);
    }
    return Cw20IcsMessageComposer;
}());
export { Cw20IcsMessageComposer };
