import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const deletedArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deletedArray;
    default:
      return state;
  }
};

export default reducer;