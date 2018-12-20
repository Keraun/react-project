import Thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./root-reducer";

export default function(initialState) {
  return createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools(applyMiddleware(promiseMiddleware(), Thunk))
  );
}
