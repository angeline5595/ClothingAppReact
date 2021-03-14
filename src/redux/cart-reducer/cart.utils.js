  export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  console.log("existingitem :"+existingCartItem);

  if (existingCartItem) {
    console.log("inside existingitem if loop :"+existingCartItem);

    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  console.log("outside loop :");
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};