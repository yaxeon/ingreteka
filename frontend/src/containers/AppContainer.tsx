import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Layout } from "../components/Layout";
import { init } from "../actions/appActions";

interface Props {
  onInit: () => void;
}

class App extends PureComponent<Props> {
  componentDidMount(): void {
    const { onInit } = this.props;

    onInit();
  }

  render() {
    return <Layout>Ingreteka guide</Layout>;
  }
}

export const AppContainer = connect(
  undefined,
  { onInit: init }
)(App);
