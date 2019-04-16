import React from "react";

import { Layout } from "../components/Layout";
import { Routes } from "./Routes";
import { AuthGuard } from "./AuthGuard";

export const AppContainer = () => (
  <AuthGuard>
    <Layout>
      <Routes />
    </Layout>
  </AuthGuard>
);
