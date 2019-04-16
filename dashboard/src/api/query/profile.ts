import gql from "graphql-tag";
import { Query } from "react-apollo";

interface Data {
  profile: {
    username: string;
    email: string;
    roles: string[];
  } | null;
}

export const query = gql`
  {
    profile {
      username
      roles
      email
    }
  }
`;

export class ProfileQuery extends Query<Data> {}
