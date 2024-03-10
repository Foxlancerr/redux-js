export const WATCHLIST_ITEM_ADD = "watchlist/item_add";
export const WATCHLIST_ITEM_REMOVED = "watchlist/item_remove";

const initailState = []
export default function watchListReducer(state = initailState, action) {
  switch (action.type) {
    case WATCHLIST_ITEM_ADD:
      return [...state, action.payload];

    case WATCHLIST_ITEM_REMOVED:
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
}
