import React, { PureComponent } from "react";

import { Layout } from "../components/Layout";
import { Routes } from "./Routes";

export class AppContainer extends PureComponent {
  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}
