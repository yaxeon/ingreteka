import gql from "graphql-tag";
import { ApiClient } from "../index";

interface Result {
  login: boolean;
}

export interface Variables {
  username: string;
  password: string;
}

export const mutation = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export const login = (client: ApiClient, variables: Variables) =>
  client.mutate<Result, Variables>({ mutation, variables });
