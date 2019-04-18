import React from "react";

import { Loading } from "../components/Loading";
import { LoginForm } from "../forms/LoginForm";
import { useAuth } from "../hooks/useAuth";
import { AuthContext } from "../contexts/AuthContext";

export const AuthGuard: React.FC = ({ children }) => {
  const { isLoading, profile, onLogin, onLogout } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  if (!profile) {
    return <LoginForm onLogin={onLogin} />;
  }

  return (
    <AuthContext.Provider
      value={{
        profile,
        onLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
