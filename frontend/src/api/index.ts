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
      cache: new InMemoryCache({ addTypename: false })
    });
  }

  public query$<T = any>(query: string, variables = {}) {
    return from(
      this.client.query<T>({
        query: gql(query),
        variables
      })
    );
  }
}
