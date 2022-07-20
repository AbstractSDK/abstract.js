import React from 'react';
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from 'react-query';
var queryClient = new QueryClient();
export var QueryClientProvider = function (_a) {
    var children = _a.children;
    return (React.createElement(ReactQueryClientProvider, { client: queryClient, contextSharing: true }));
};
