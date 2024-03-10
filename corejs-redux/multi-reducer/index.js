import { combineReducers, createStore } from "@reduxjs/toolkit";

import ProductListReducer, {
  cardItemAdd,
  cardItemQuantityDecrement,
  cardItemQuantityIncrement,
  cardItemRemove,
} from "./reducer/CartList";

import watchListReducer, {
  watchListItemAdd,
  watchListItemRemove,
} from "./reducer/WatchList";

const REDUX_CONNECTION = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const reducerFunc = combineReducers({
  productList: [],
  cartItem: ProductListReducer,
  watchList: watchListReducer,
});

const store = createStore(reducerFunc, REDUX_CONNECTION);

store.dispatch(cardItemAdd(1, 10));
store.dispatch(cardItemAdd(2, 10));
store.dispatch(cardItemAdd(3, 10));
store.dispatch(cardItemAdd(4, 10));
store.dispatch(cardItemAdd(5, 10));

store.dispatch(cardItemRemove(4));

store.dispatch(cardItemQuantityIncrement(2, 5));
store.dispatch(cardItemQuantityIncrement(2, 5));

store.dispatch(cardItemQuantityDecrement(3, 2));
store.dispatch(cardItemQuantityDecrement(3, 2));

store.dispatch(watchListItemAdd(1));
store.dispatch(watchListItemAdd(2));
store.dispatch(watchListItemAdd(3));
store.dispatch(watchListItemRemove(2));
