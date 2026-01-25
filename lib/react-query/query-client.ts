import {
  QueryClient,
  QueryClientConfig,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // berapa lama data fresh
      gcTime: 1000 * 60 * 30, // berapa lama data disimpan di cache
      retry: 1, // berapa kali refetch jika error
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      throwOnError: false,
    },
    mutations: {
      onError: () => true,
    },
  },
};

export const queryClient = new QueryClient({
  defaultOptions: queryConfig.defaultOptions,
});

export type ApiFnReturnType<FnType extends (...args: any[]) => any> = Awaited<
  ReturnType<FnType>
>;

export type QueryConfig<QueryFnType extends (...args: any[]) => Promise<any>> =
  UseQueryOptions<
    ApiFnReturnType<QueryFnType>,
    Error,
    ApiFnReturnType<QueryFnType>,
    QueryKey
  >;

export type UseQueryConfig<QueryFnType extends (...args: any[]) => any> = {
  config?: QueryConfig<QueryFnType>;
};

type MutationConfig<MutationFnType extends (...args: any[]) => Promise<any>> =
  UseMutationOptions<
    ApiFnReturnType<MutationFnType>,
    Error,
    Parameters<MutationFnType>[0]
  >;

export type UseMutationConfig<
  MutationFnType extends (...args: any[]) => Promise<any>,
> = {
  config?: MutationConfig<MutationFnType>;
};
