import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { Layout } from "../components/Layout";
import { init } from "../actions/appActions";
import { Routes } from "./Routes";

const dispatchProps = {
  onInit: init
};

type Props = typeof dispatchProps;

class App extends PureComponent<Props> {
  componentDidMount(): void {
    const { onInit } = this.props;

    onInit();
  }

  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}

export const AppContainer = connect(
  undefined,
  dispatchProps
)(App);
