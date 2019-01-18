import { ApiClient } from "../";
import { User } from "../../models/User";

const QUERY = `
{
    profile {
      username
      picture
    }
}
`;

type Result = {
  profile: User | null;
};

export const getProfile = (gqlClient: ApiClient) =>
  gqlClient.query$<Result>(QUERY);
