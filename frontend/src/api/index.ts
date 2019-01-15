import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

export const client = new ApolloClient({
  uri: "/graphql"
});

const login = () =>
  client.query({
    query: gql`
      {
        profile {
          username
          roles
        }
      }
    `
  });

export interface Api {
  login: () => Promise<any>;
}

export const api: Api = { login };
