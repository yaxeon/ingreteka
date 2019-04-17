import gql from "graphql-tag";
import { ApiClient } from "../";

interface Result {
  profile: {
    username: string;
    email: string;
    roles: string[];
  } | null;
}

const query = gql`
  {
    profile {
      username
      roles
      email
    }
  }
`;

export const getProfile = (client: ApiClient) =>
  client.query<Result>({ query });
