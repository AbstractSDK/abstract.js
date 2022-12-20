"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientProvider = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_query_1 = require("@tanstack/react-query");
var QueryClientProvider = function (_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    return react_1.default.createElement(react_query_1.QueryClientProvider, tslib_1.__assign({}, props), children);
};
exports.QueryClientProvider = QueryClientProvider;
