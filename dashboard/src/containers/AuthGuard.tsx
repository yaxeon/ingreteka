import React, { createContext } from "react";
import { LinearProgress, Dialog, DialogTitle } from "@material-ui/core";

import { LoginForm } from "../components/Forms/LoginForm";
import { useAuthProfileQuery, User } from "../api";

const Loading = () => {
  return (
    <Dialog open>
      <DialogTitle>Please, wait...</DialogTitle>
      <LinearProgress color="secondary" />
    </Dialog>
  );
};

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
