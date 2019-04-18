import gql from "graphql-tag";
import { ApiClient } from "../index";

interface Result {
  logout: boolean;
}

export const mutation = gql`
  mutation {
    logout
  }
`;

export const logout = (client: ApiClient) =>
  client.mutate<Result>({ mutation });
