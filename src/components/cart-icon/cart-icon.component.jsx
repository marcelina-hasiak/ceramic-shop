import React from 'react'
import styles from './cart-icon.module.scss'

import { connect } from 'react-redux'
import { setCartVisibility } from '../../redux/cart/cart.action'

import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/shopping-cart-icon.svg'

const CartIcon = ({ setCartVisibility, quantity }) => {
  return (
    <button onClick={setCartVisibility} className={styles['cart-icon-wrapper']}>
      <ShoppingCartIcon className={styles['cart-icon']} />
      <span className={styles['items-counter']}> {quantity} </span>
    </button>
  )
}

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    quantity: cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0,
    ),
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCartVisibility: () => dispatch(setCartVisibility()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
