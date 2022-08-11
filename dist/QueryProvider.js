"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_query_1 = require("@tanstack/react-query");
const QueryClientProvider = ({ queryClient, children }) => {
    return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, Object.assign({ client: queryClient, contextSharing: true }, { children: children })));
};
exports.QueryClientProvider = QueryClientProvider;
//# sourceMappingURL=QueryProvider.js.map