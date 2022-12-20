import { __assign, __rest } from "tslib";
import React from 'react';
import { QueryClientProvider as ReactQueryClientProvider, } from '@tanstack/react-query';
export var QueryClientProvider = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React.createElement(ReactQueryClientProvider, __assign({}, props), children);
};
