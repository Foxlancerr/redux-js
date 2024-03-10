export const CART_ITEM_ADD = "cart/item_added";
export const CART_ITEM_REMOVED = "cart/item_remove";
export const CART_ITEM_QUANTITY_INC = "cart/quantity_inc";
export const CART_ITEM_QUANTITY_DEC = "cart/quantity_dec";

const initailState = []
export default function CartListReducer(state = initailState, action) {
  switch (action.type) {
    case CART_ITEM_ADD:
      return [...state, action.payload];
    case CART_ITEM_REMOVED:
      return state.filter((item) => {
        return item.id !== action.payload.id;
      });

    case CART_ITEM_QUANTITY_INC:
      return state.map((item) => {
        if (action.payload.id === item.id) {
          return { ...item, quantity: item.quantity + 1 };
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
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

    default:
     return  state;
  }
}
