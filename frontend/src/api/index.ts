import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";

import gql from "graphql-tag";
import { from } from "rxjs";

export class ApiClient {
  private client: ApolloClient<{}>;

  constructor(options: HttpLink.Options) {
    this.client = new ApolloClient({
      link: ApolloLink.from([new HttpLink(options)]),
      cache: new InMemoryCache()
    });
  }

  query$ = (query: string, variables = {}) =>
    from(
      this.client.query<any>({
        query: gql(query),
        variables
      })
    );
}
