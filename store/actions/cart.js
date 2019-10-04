export const ADD_TO_CART = "ADD_TOCART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    product: product
  };
};

export const deleteFromCart = id => {
  return {
    type: DELETE_FROM_CART,
    id: id
  };
};
