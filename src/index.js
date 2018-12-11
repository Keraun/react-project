import "babel-polyfill";
import "lib/promise";
import "lib/unhandledrejection";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import history from "utils/history";
import CoreRouter from "./router";
import createStore from "./store/create";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={CoreRouter} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
