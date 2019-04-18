import { useState, useEffect } from "react";
import { useApolloClient } from "react-apollo-hooks";
import { getProfile } from "../api/query/getProfile";
import { login, Variables } from "../api/mutation/login";
import { logout } from "../api/mutation/logout";

export const useAuth = () => {
  const client = useApolloClient();
  const [profile, setProfile] = useState();
  const [isLoading, setLoading] = useState(true);

  const fetchProfile = () => {
    getProfile(client).then(({ data: { profile } }) => {
      setProfile(profile);
      setLoading(false);
    });
  };

  const onLogin = (variables: Variables) =>
    login(client, variables).then(({ data }) => {
      if (!data || !data.login) {
        throw Error("Invalid credentials");
      }

      fetchProfile();
    });

  const onLogout = () => {
    logout(client).then(() => {
      setProfile(null);
    });
  };

  useEffect(fetchProfile, []);

  return { profile, isLoading, onLogin, onLogout };
};
