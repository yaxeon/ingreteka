import gql from "graphql-tag";
import { Mutation } from "react-apollo";

interface Data {
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

export class LoginMutation extends Mutation<Data, Variables> {}
