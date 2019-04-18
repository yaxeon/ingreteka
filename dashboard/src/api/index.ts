import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";

export const createClient = (options: HttpLink.Options) => {
  return new ApolloClient<object>({
    link: ApolloLink.from([new HttpLink(options)]),
    cache: new InMemoryCache({ addTypename: false }),
    defaultOptions: { query: { fetchPolicy: "no-cache" } }
  });
};

export type ApiClient = ReturnType<typeof createClient>;
