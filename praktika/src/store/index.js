import { createStore, combineReducers, applyMiddleware } from "redux";
import { tovarReducer } from "./tovarReduser";
import { comentReducer } from "./comentReduser";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tovar: tovarReducer,
  coment: comentReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));