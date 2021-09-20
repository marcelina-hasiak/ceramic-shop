export const addItemToCart = (cartItems, item) => {
  const isItemAlreadyExist = cartItems.find(cartItem => cartItem.id === item.id)

  if (isItemAlreadyExist) {
    return cartItems.map((cartItem)=> cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + 1}  : cartItem)
  } else {
    return [...cartItems, {...item, quantity: 1}]
  }
}