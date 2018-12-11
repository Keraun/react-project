import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import lazyloader from "./lazyloader";

export default function CoreRouter() {
  return (
    <Switch>
      {/* 壳组件 */}
      <Route component={lazyloader("home")} path="/home" />
      <Redirect to="/home" />
    </Switch>
  );
}
