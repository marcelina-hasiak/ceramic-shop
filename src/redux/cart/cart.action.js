import { CartActionTypes } from './cart.types'

export const setCartVisibility = () => ({
  type: CartActionTypes.CART_TOGGLE_VISIBILITY
})

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item
})

export const deleteItemFromCart = item => ({
  type: CartActionTypes.DELETE_ITEM_FROM_CART,
  payload: item
})

export const removeItemFromCart = item => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item
})