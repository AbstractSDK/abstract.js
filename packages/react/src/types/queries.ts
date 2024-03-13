// Modified from https://github.com/wevm/wagmi/blob/d767265eb52f830164388f05921fa270acf5dce6/packages/react/src/utils/query.ts
import {
  type QueryKey,
  type UseInfiniteQueryOptions,
  type UseInfiniteQueryResult,
  type UseMutationOptions,
  type UseMutationResult,
  type UseQueryOptions,
  type UseQueryResult,
  useInfiniteQuery as tanstack_useInfiniteQuery,
  useQuery as tanstack_useQuery,
} from '@tanstack/react-query'
import { type Evaluate, type ExactPartial, type Omit } from './utils'

export type UseMutationParameters<
  data = unknown,
  error = Error,
  variables = void,
  context = unknown,
> = Evaluate<
  Omit<
    UseMutationOptions<data, error, Evaluate<variables>, context>,
    'mutationFn' | 'mutationKey'
  >
>

export type UseMutationReturnType<
  data = unknown,
  error = Error,
  variables = void,
  context = unknown,
> = Evaluate<
  Omit<
    UseMutationResult<data, error, variables, context>,
    'mutate' | 'mutateAsync'
  >
>

////////////////////////////////////////////////////////////////////////////////

export type UseQueryParameters<
  queryFnData = unknown,
  error = Error,
  data = queryFnData,
  queryKey extends QueryKey = QueryKey,
> = Evaluate<
  ExactPartial<
    Omit<UseQueryOptions<queryFnData, error, data, queryKey>, 'initialData'>
  > & {
    // Fix `initialData` type
    initialData?:
      | UseQueryOptions<queryFnData, error, data, queryKey>['initialData']
      | undefined
  }
>

export type UseQueryReturnType<data = unknown, error = Error> = Evaluate<
  UseQueryResult<data, error> & {
    queryKey: QueryKey
  }
>

// Adding some basic customization.
// Ideally we don't have this function, but `import('@tanstack/react-query').useQuery` currently has some quirks where it is super hard to
// pass down the inferred `initialData` type because of it's discriminated overload in the on `useQuery`.
export function useQuery<queryFnData, error, data, queryKey extends QueryKey>(
  parameters: UseQueryParameters<queryFnData, error, data, queryKey> & {
    queryKey: QueryKey
  },
): UseQueryReturnType<data, error> {
  const result = tanstack_useQuery({
    ...(parameters as any),
    // queryKeyHashFn: hashFn, // for bigint support
  }) as UseQueryReturnType<data, error>
  result.queryKey = parameters.queryKey
  return result
}

////////////////////////////////////////////////////////////////////////////////

export type UseInfiniteQueryParameters<
  queryFnData = unknown,
  error = Error,
  data = queryFnData,
  queryData = queryFnData,
  queryKey extends QueryKey = QueryKey,
> = Evaluate<
  Omit<
    UseInfiniteQueryOptions<queryFnData, error, data, queryData, queryKey>,
    'initialData'
  > & {
    // Fix `initialData` type
    initialData?:
      | UseInfiniteQueryOptions<
          queryFnData,
          error,
          data,
          queryKey
        >['initialData']
      | undefined
  }
>

export type UseInfiniteQueryReturnType<
  data = unknown,
  error = Error,
> = UseInfiniteQueryResult<data, error> & {
  queryKey: QueryKey
}

// Adding some basic customization.
export function useInfiniteQuery<
  queryFnData,
  error,
  data,
  queryKey extends QueryKey,
>(
  parameters: UseInfiniteQueryParameters<queryFnData, error, data, queryKey> & {
    queryKey: QueryKey
  },
): UseInfiniteQueryReturnType<data, error> {
  const result = tanstack_useInfiniteQuery({
    ...(parameters as any),
    // queryKeyHashFn: hashFn, // for bigint support
  }) as UseInfiniteQueryReturnType<data, error>
  result.queryKey = parameters.queryKey
  return result
}
