// import product arrays used as initial state
import productData from "../../assets/productData";

// action types
export const CART_ITEM_ADD = "cart/item_add";
export const CART_ITEM_REMOVE = "cart/item_remove";
export const CART_ITEM_QUANTITY_INC = "cart/item_increment";
export const CART_ITEM_QUANTITY_DEC = "cart/item_decrement";

// action creators
export function CartItemAdd(id: number, quantity: number) {
  return {
    type: CART_ITEM_ADD,
    payload: { id, quantity },
  };
}
export function CartItemRemove(id: number) {
  return {
    type: CART_ITEM_REMOVE,
    payload: { id },
  };
}

export function cardItemQuantityIncrement(id:number,quantity:number = 1) {
  return { type: CART_ITEM_QUANTITY_INC, payload: { id, quantity } }
}

export function cardItemQuantityDecrement(id:number,quantity:number = -1) {
  return { type: CART_ITEM_QUANTITY_DEC, payload: { id, quantity } }
}
// reducer functions
export default function CartListReducer(state = [], action) {
  switch (action?.type) {
    case CART_ITEM_ADD:
      const present = state.find((item) => item.id === action.payload.id);

      if (present?.id) {
        return state.map((item) => {
          if (action.payload.id === item.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload?.quantity,
            };
          }
          return item;
        });
      }

      return [...state, action?.payload];
    case CART_ITEM_REMOVE:
      return state.filter((item) => item.id !== action.payload.id);
    case CART_ITEM_QUANTITY_INC:
      return state.map((item) => {
        if (action.payload.id === item.id) {
          return {
            ...item,
            quantity: item.quantity + action.payload?.quantity,
          };
        }
        return item;
      });
    case CART_ITEM_QUANTITY_DEC:
        return state.map((item) => {
          if (action.payload.id === item.id) {
            // check the quantity must be 1 or greater
            if (item.quantity <= 1) {
              return item;
            }
            return { ...item, quantity: item.quantity - action.payload?.quantity };
          }
          return item;
        });
    default:
      return state;
  }
}
