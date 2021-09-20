import { CartActionTypes } from './cart.types'

export const setCartVisibility = () => ({
  type: CartActionTypes.CART_TOGGLE_VISIBILITY
})

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item
})