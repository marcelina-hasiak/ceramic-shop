import { CartActionTypes } from './cart.types'

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_TOGGLE_VISIBILITY:
      return {
        ...state,
        hidden: !state.hidden
      }
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      }
    default: 
      return {
        state
      }
  }
}