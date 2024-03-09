import { createStore } from "@reduxjs/toolkit";
const REDUX_CONNECTION = window.__REDUX_DEVTOOLS_EXTENSION__?.();
const initailState = {
  productList: [],
  cartItem: [],
  watchList: [],
};

const CART_ITEM_ADD = "cart/item_added";
const CART_ITEM_REMOVED = "cart/item_remove";
const CART_ITEM_QUANTITY_INC = "cart/quantity_inc";
const CART_ITEM_QUANTITY_DEC = "cart/quantity_dec";
const store = createStore(reducerFunc, REDUX_CONNECTION);

function reducerFunc(state = initailState, action) {
  switch (action.type) {
    case CART_ITEM_ADD:
      return { ...state, cartItem: [...state.cartItem, action.payload] };
    case CART_ITEM_REMOVED:
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };

    case CART_ITEM_QUANTITY_INC:
      return {
        ...state,

        cartItem: state.cartItem.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case CART_ITEM_QUANTITY_DEC:
      return {
        ...state,

        cartItem: state.cartItem.map((item) => {
          if (action.payload.id === item.id) {

            // check the quantity must be 1 or greater
            if (item.quantity <= 1) {
              return item;
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    default:
      return state;
  }
}

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