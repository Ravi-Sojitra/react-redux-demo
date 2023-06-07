import { combineReducers, createStore } from "redux";
import itemReducer from "../Reducer/itemReducer";

const rootReducer = combineReducers({ items: itemReducer });
const store = createStore(rootReducer);
export default store;
