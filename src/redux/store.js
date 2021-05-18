import { createStore, applyMiddleware, compose } from "redux";
import authreducer from "./reducers/AuthReducer";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(authreducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
