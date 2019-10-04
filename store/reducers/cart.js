import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/cart";
import CartItem from "../../models/cart-item";
import { ADD_ORDER } from "../actions/order";
import { DELETE_PRODUCT } from "../actions/products";

const initialState = {
  items: {},
  totalAmount: 0
};

export default cartReducer = (state = initialState, action) => {
  //console.log(state);
  switch (action.type) {
    case ADD_TO_CART: {
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;

      if (state.items[addedProduct.id]) {
        //we have product

        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          state.items[addedProduct.id].productPrice,
          prodTitle,
          prodPrice + state.items[addedProduct.id].sum
        );

        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: updatedCartItem },
          totalAmount: state.totalAmount + prodPrice
        };
      } else {
        const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
        return {
          ...state,
          items: { ...state.items, [addedProduct.id]: newCartItem },
          totalAmount: state.totalAmount + prodPrice
        };
      }
    }
    case DELETE_FROM_CART: {
      let filteredItem = { ...state.items };
      //console.log(filteredItem);

      const deductibleAmount = filteredItem[action.id].productPrice;
      if (filteredItem[action.id].quantity == 1) {
        delete filteredItem[action.id];
        console.log(action.id);
        console.log(filteredItem);
      } else {
        const cartItem = filteredItem[action.id];

        const updatedItem = new CartItem(
          cartItem.quantity - 1,
          cartItem.productPrice,
          cartItem.productTitle,
          cartItem.sum - cartItem.productPrice
        );
        delete filteredItem[action.id];
        filteredItem = { ...filteredItem, [action.id]: updatedItem };
        console.log(filteredItem);
      }

      return {
        ...state,
        items: filteredItem,
        totalAmount: state.totalAmount - deductibleAmount
      };
    }
    case ADD_ORDER: {
      return initialState;
    }

    case DELETE_PRODUCT: {
      const productID = action.pid;
      if (!state.items[productID]) {
        return state;
      }
      const updatedItems = { ...state.items };
      const itemTotal = state.items[productID].sum;
      delete updatedItems[productID];
      return {
        ...state,
        items: updatedItems,
        totalAmount: state.totalAmount - itemTotal
      };
    }
  }

  return state;
};
