import React from "react";

import { Layout } from "../components/Layout";
import { ScrollToTop } from "../components/ScrollToTop";
import { Routes } from "./Routes";
import { FavoriteProvider } from "./FavoriteContext";

export const AppContainer = () => (
  <FavoriteProvider>
    <Layout>
      <ScrollToTop />
      <Routes />
    </Layout>
  </FavoriteProvider>
);
