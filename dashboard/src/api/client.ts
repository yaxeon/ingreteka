import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { createUploadLink } from "apollo-upload-client";
import { ApolloLink } from "apollo-link";

export const createClient = (options: HttpLink.Options) => {
  const uploadLink = createUploadLink(options);

  return new ApolloClient<object>({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache({ addTypename: false }),
    defaultOptions: { query: { fetchPolicy: "no-cache" } }
  });
};
