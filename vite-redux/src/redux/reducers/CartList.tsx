// action types
export const CART_ITEM_ADD = "cart/item_add";
export const CART_ITEM_REMOVE = "cart/item_remove";

// action creators
function CartItemAdd(id: number, quantity: number) {
  return {
    type: CART_ITEM_ADD,
    payload: { id, quantity },
  };
}
function CartItemRemove(id: number) {
  return {
    type: CART_ITEM_ADD,
    payload: { id },
  };
}
// reducer functions
export default function CartListReducer(state = [], action) {
  switch (action?.type) {
    case CART_ITEM_ADD:
      return [...state, action?.payload];
    case CART_ITEM_REMOVE:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}
