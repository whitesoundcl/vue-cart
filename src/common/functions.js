export const getCartQty = (cart) => {
  return Object.keys(cart)
    .map((key) => cart[key].qty)
    .reduce((prev, current) => prev + current, 0);
};

export const getCartTotal = (cart) => {
  return Object.keys(cart)
    .map((key) => cart[key].data.price * cart[key].qty)
    .reduce((prev, current) => prev + current, 0);
};

export const getCartProducts = (cart) => {
  return Object.keys(cart).map((key) => cart[key]);
};
