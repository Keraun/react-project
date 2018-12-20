import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import lazyloader from "./lazyloader";
import Layout from "@pages/layout";

export default function CoreRouter() {
  return (
    <Layout>
      <Switch>
        <Route path="/home" component={lazyloader("home")} />
        <Redirect to="/home" />
      </Switch>
    </Layout>
  );
}
