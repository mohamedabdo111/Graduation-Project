import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
const middleware = [thunk];

export const Store = createStore(rootReducer, applyMiddleware(...middleware));
