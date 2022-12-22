import { createStore ,combineReducers } from "redux";


import { Reducer } from "./Reducer";

import { SagaMiddleware } from "redux-saga";
import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { watchButtonClick } from "./sagas";

const Sagamiddlware = createSagaMiddleware()
var MyStore = createStore(Reducer,applyMiddleware(Sagamiddlware));

Sagamiddlware.run(watchButtonClick)



export default MyStore