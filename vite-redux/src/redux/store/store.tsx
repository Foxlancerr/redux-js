import { combineReducers, createStore } from "@reduxjs/toolkit";
import CartListReducer from "../reducers/CartList";

const reducerFunc = combineReducers({
  cartList: CartListReducer,
});
const store = createStore(reducerFunc);
