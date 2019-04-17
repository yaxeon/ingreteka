import React, { createContext, useState, useEffect } from "react";
import { withApollo, WithApolloClient } from "react-apollo";

import { Variables, login } from "../api/mutation/login";
import { getProfile } from "../api/query/getProfile";
import { Loading } from "../components/Loading";
import { Login } from "./Login";

export const AuthContext = createContext({ profile: null });

const Auth: React.FC<WithApolloClient<{ children: React.ReactNode }>> = ({
  children,
  client
}) => {
  const [profile, setProfile] = useState();
  const [initialization, setInitialization] = useState(true);

  const fetchProfile = () => {
    getProfile(client).then(({ data: { profile } }) => {
      if (profile) {
        setProfile(profile);
      }
      setInitialization(false);
    });
  };

  const onLogin = async (variables: Variables) => {
    return login(client, variables).then(({ data }) => {
      if (!data || !data.login) {
        throw Error("Invalid credentials");
      }

      fetchProfile();
    });
  };

  useEffect(fetchProfile, []);

  if (initialization) {
    return <Loading />;
  }

  if (!profile) {
    return <Login onLogin={onLogin} />;
  }

  return (
    <AuthContext.Provider
      value={{
        profile
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthGuard = withApollo(Auth);
