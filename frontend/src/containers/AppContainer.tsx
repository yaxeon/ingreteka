import React from "react";

import { Layout } from "../components/Layout";
import { ScrollToTop } from "../components/ScrollToTop";
import { Routes } from "./Routes";

export const AppContainer = () => (
  <Layout>
    <ScrollToTop />
    <Routes />
  </Layout>
);
