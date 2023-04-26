import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider as Provider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const QueryClientProvider = (props: PropsWithChildren) => {
  return <Provider client={queryClient}>{props.children}</Provider>;
};

export default QueryClientProvider;
