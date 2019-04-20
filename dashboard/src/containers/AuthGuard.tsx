import React, { createContext } from "react";

import { Loading } from "../components/Loading";
import { LoginForm } from "../forms/LoginForm";
import { useAuthProfileQuery, User } from "../api";

interface AuthContextType {
  profile: User | null;
  onReload: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  profile: null,
  onReload: () => {}
});

export const AuthGuard: React.FC = ({ children }) => {
  const { data, loading, refetch } = useAuthProfileQuery();

  if (loading) {
    return <Loading />;
  }

  const profile = data ? data.auth.profile : null;

  return (
    <AuthContext.Provider
      value={{
        profile: profile,
        onReload: refetch
      }}
    >
      {profile ? children : <LoginForm />}
    </AuthContext.Provider>
  );
};
