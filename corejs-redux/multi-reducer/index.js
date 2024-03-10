import { combineReducers, createStore } from "@reduxjs/toolkit";

import ProductListReducer, {
  CART_ITEM_ADD,
  CART_ITEM_QUANTITY_DEC,
  CART_ITEM_QUANTITY_INC,
  CART_ITEM_REMOVED,
} from "./reducer/CartList";
import watchListReducer, {
  WATCHLIST_ITEM_ADD,
  WATCHLIST_ITEM_REMOVED,
} from "./reducer/WatchList";

const REDUX_CONNECTION = window.__REDUX_DEVTOOLS_EXTENSION__?.();

// const initailState = {
//   productList: [],
//   cartItem: [],
//   watchList: [],
// };

const reducerFunc = combineReducers({
  productList: [],
  cartItem: ProductListReducer,
  watchList: watchListReducer,
});

const store = createStore(reducerFunc, REDUX_CONNECTION);

console.log(store.getState());

store.dispatch({ type: CART_ITEM_ADD, payload: { id: 1, quantity: 1 } });
store.dispatch({ type: CART_ITEM_ADD, payload: { id: 2, quantity: 1 } });
store.dispatch({ type: CART_ITEM_ADD, payload: { id: 3, quantity: 1 } });
store.dispatch({ type: CART_ITEM_ADD, payload: { id: 4, quantity: 1 } });
store.dispatch({ type: CART_ITEM_ADD, payload: { id: 5, quantity: 1 } });
store.dispatch({ type: CART_ITEM_ADD, payload: { id: 6, quantity: 1 } });
store.dispatch({ type: CART_ITEM_ADD, payload: { id: 7, quantity: 1 } });
store.dispatch({ type: CART_ITEM_ADD, payload: { id: 8, quantity: 1 } });
store.dispatch({ type: CART_ITEM_ADD, payload: { id: 9, quantity: 1 } });
store.dispatch({ type: CART_ITEM_ADD, payload: { id: 10, quantity: 1 } });

console.log(store.getState());

store.dispatch({ type: CART_ITEM_REMOVED, payload: { id: 1 } });
store.dispatch({ type: CART_ITEM_REMOVED, payload: { id: 2 } });

console.log(store.getState());

store.dispatch({ type: CART_ITEM_QUANTITY_INC, payload: { id: 10 } });
store.dispatch({ type: CART_ITEM_QUANTITY_INC, payload: { id: 10 } });
store.dispatch({ type: CART_ITEM_QUANTITY_INC, payload: { id: 9 } });
store.dispatch({ type: CART_ITEM_QUANTITY_INC, payload: { id: 9 } });

console.log(store.getState());

//increment or decrement quantities
store.dispatch({ type: CART_ITEM_QUANTITY_INC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_INC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_INC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_INC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_INC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
store.dispatch({ type: CART_ITEM_QUANTITY_DEC, payload: { id: 5 } });
console.log(store.getState());

// watchlist item added or removed
store.dispatch({ type: WATCHLIST_ITEM_ADD, payload: { id: 5 } });
store.dispatch({ type: WATCHLIST_ITEM_ADD, payload: { id: 4 } });
store.dispatch({ type: WATCHLIST_ITEM_ADD, payload: { id: 3 } });
store.dispatch({ type: WATCHLIST_ITEM_ADD, payload: { id: 2 } });
store.dispatch({ type: WATCHLIST_ITEM_REMOVED, payload: { id: 2 } });
store.dispatch({ type: WATCHLIST_ITEM_REMOVED, payload: { id: 4 } });

console.log(store.getState());
