import { combineReducers, createStore } from "@reduxjs/toolkit";
import CartListReducer,{CartItemAdd,CartItemRemove} from "../reducers/CartList";

const reducerFunc = combineReducers({
  cartList: CartListReducer,
});

const REDUX_CONNECTION = window.__REDUX_DEVTOOLS_EXTENSION__?.();

export const store = createStore(reducerFunc,REDUX_CONNECTION);

store.dispatch(CartItemAdd(1,1))
store.dispatch(CartItemAdd(2,1))

// store.dispatch(CartItemRemove(1))
