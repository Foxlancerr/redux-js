// action types
export const WATCHLIST_ITEM_ADD = "watchlist/item_add";
export const WATCHLIST_ITEM_REMOVED = "watchlist/item_remove";

// action creators
export function watchListItemAdd(id) {
  return { type: WATCHLIST_ITEM_ADD, payload: { id } };
}
export function watchListItemRemove(id) {
  return { type: WATCHLIST_ITEM_REMOVED, payload: { id } };
}

// reducers
export default function watchListReducer(state = [], action) {
  switch (action.type) {
    case WATCHLIST_ITEM_ADD:
      return [...state, action.payload];

    case WATCHLIST_ITEM_REMOVED:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}
