import React from "react";

import { query, ProfileQuery } from "../api/query/profile";
import { Loading } from "../components/Loading";
import { Login } from "./Login";

export const AuthGuard: React.FC<{ children: React.ReactElement }> = ({
  children
}) => (
  <ProfileQuery query={query}>
    {({ data, loading, refetch }) => {
      if (loading || !data) {
        return <Loading />;
      }

      if (!data.profile) {
        return <Login onEnter={refetch} />;
      }

      return children;
    }}
  </ProfileQuery>
);
