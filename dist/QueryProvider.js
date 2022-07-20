"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_query_1 = require("react-query");
const queryClient = new react_query_1.QueryClient();
const QueryClientProvider = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)(react_query_1.QueryClientProvider, Object.assign({ client: queryClient, contextSharing: true }, { children: children })));
};
exports.QueryClientProvider = QueryClientProvider;
//# sourceMappingURL=QueryProvider.js.map