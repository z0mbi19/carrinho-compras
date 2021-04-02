import { ADD_TO_CART } from "../actions";

const initialState = {
  products: [],
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.products.find((p) => p.id === action.product.id)) {
        return state;
      }
      return { ...state, products: state.products.concat(action.product) };
    default:
      return state;
  }
};
