import { FC, PropsWithChildren } from 'react';
import { QueryClient } from '@tanstack/react-query';
interface QueryClientProviderProps {
    queryClient: QueryClient;
}
export declare const QueryClientProvider: FC<PropsWithChildren<QueryClientProviderProps>>;
export {};
