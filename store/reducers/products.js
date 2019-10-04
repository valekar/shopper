import PRODUCTS from "../../data/dummy-data";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter(product => product.ownerId === "u1")
};

export default productReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT: {
      //let products = { ...state.userProducts };
      const updatedProduct = state.userProducts.filter(
        product => product.id !== action.pid
      );
      return {
        ...state,
        userProducts: updatedProduct,
        availableProducts: state.availableProducts.filter(
          product => product.id !== action.pid
        )
      };
    }
  }

  return state;
};
